import html
import json
import logging
import threading
import time
from urllib.error import HTTPError, URLError
from urllib.parse import quote, urlencode
from urllib.request import Request, urlopen

from django.conf import settings
from django.utils import timezone

logger = logging.getLogger(__name__)

TOKEN_URL = "https://login.microsoftonline.com/{tenant_id}/oauth2/v2.0/token"
GRAPH_URL = "https://graph.microsoft.com/v1.0/users/{sender}/sendMail"
REQUEST_TIMEOUT_SECONDS = 10
TOKEN_EXPIRY_MARGIN_SECONDS = 60

_token_cache = {"access_token": None, "expires_at": 0.0}
_token_lock = threading.Lock()


class GraphMailError(Exception):
    """Safe Microsoft Graph mail error without credential-bearing payloads."""

    def __init__(self, stage, message, status=None):
        super().__init__(message)
        self.stage = stage
        self.status = status


def _clear_token_cache():
    """Clear the in-process cache (used after auth failures and by tests)."""
    with _token_lock:
        _token_cache.update(access_token=None, expires_at=0.0)


def _configuration():
    return {
        "tenant_id": getattr(settings, "MICROSOFT_TENANT_ID", "").strip(),
        "client_id": getattr(settings, "MICROSOFT_CLIENT_ID", "").strip(),
        "client_secret": getattr(settings, "MICROSOFT_CLIENT_SECRET", "").strip(),
        "sender": getattr(settings, "MICROSOFT_GRAPH_SENDER", "").strip(),
        "recipient": getattr(settings, "CONTACT_NOTIFICATION_EMAIL", "").strip(),
    }


def _missing_configuration(config):
    return [name for name, value in config.items() if not value]


def _request_access_token(config):
    now = time.monotonic()
    with _token_lock:
        if _token_cache["access_token"] and _token_cache["expires_at"] > now:
            return _token_cache["access_token"]

        request = Request(
            TOKEN_URL.format(tenant_id=quote(config["tenant_id"], safe="")),
            data=urlencode(
                {
                    "client_id": config["client_id"],
                    "client_secret": config["client_secret"],
                    "grant_type": "client_credentials",
                    "scope": "https://graph.microsoft.com/.default",
                }
            ).encode("utf-8"),
            headers={"Content-Type": "application/x-www-form-urlencoded"},
            method="POST",
        )

        try:
            with urlopen(request, timeout=REQUEST_TIMEOUT_SECONDS) as response:
                payload = json.loads(response.read().decode("utf-8"))
        except HTTPError as exc:
            raise GraphMailError("token", "token endpoint rejected request", exc.code) from exc
        except (URLError, TimeoutError, OSError, ValueError) as exc:
            raise GraphMailError("token", "token endpoint request failed") from exc

        token = payload.get("access_token")
        if not token:
            raise GraphMailError("token", "token endpoint returned no access token")

        try:
            expires_in = max(int(payload.get("expires_in", 3600)), 0)
        except (TypeError, ValueError):
            expires_in = 3600
        _token_cache.update(
            access_token=token,
            expires_at=now + max(expires_in - TOKEN_EXPIRY_MARGIN_SECONDS, 0),
        )
        return token


def _message_payload(message, recipient):
    full_name = f"{message.first_name} {message.last_name}".strip()
    created_at = timezone.localtime(message.created_at).strftime("%d.%m.%Y %H:%M")

    def row(label, value):
        escaped_value = html.escape(str(value or "-")).replace("\n", "<br>")
        return (
            f"<p><strong>{html.escape(label)}:</strong> "
            f"{escaped_value}</p>"
        )

    body = "".join(
        [
            "<h2>Yeni web sitesi mesajı</h2>",
            row("Ad Soyad", full_name),
            row("E-posta", message.email),
            row("Telefon", message.phone),
            row("Konu", message.subject),
            row("Mesaj", message.message),
            row("Gönderim zamanı", created_at),
            row("Kaynak", "SUW Web Sitesi"),
        ]
    )
    return {
        "message": {
            "subject": f"Yeni SUW Web Sitesi Mesajı - {full_name}",
            "body": {"contentType": "HTML", "content": body},
            "toRecipients": [
                {"emailAddress": {"address": recipient}}
            ],
            "replyTo": [
                {
                    "emailAddress": {
                        "address": message.email,
                        "name": full_name,
                    }
                }
            ],
        },
        "saveToSentItems": True,
    }


def _send_mail(config, token, payload):
    request = Request(
        GRAPH_URL.format(sender=quote(config["sender"], safe="")),
        data=json.dumps(payload).encode("utf-8"),
        headers={
            "Authorization": f"Bearer {token}",
            "Content-Type": "application/json",
        },
        method="POST",
    )
    try:
        with urlopen(request, timeout=REQUEST_TIMEOUT_SECONDS) as response:
            if response.status != 202:
                raise GraphMailError("send", "Graph returned unexpected status", response.status)
    except HTTPError as exc:
        if exc.code in (401, 403):
            _clear_token_cache()
        raise GraphMailError("send", "Graph rejected sendMail request", exc.code) from exc
    except (URLError, TimeoutError, OSError) as exc:
        raise GraphMailError("send", "Graph sendMail request failed") from exc


def send_contact_notification(message):
    """Send a contact notification without ever affecting the saved message."""
    config = _configuration()
    missing = _missing_configuration(config)
    if missing:
        logger.warning(
            "Microsoft Graph bildirimi yapılandırılmadığı için atlandı "
            "(mesaj id=%s, eksik=%s)",
            message.pk,
            ",".join(missing),
        )
        return False

    try:
        token = _request_access_token(config)
        _send_mail(config, token, _message_payload(message, config["recipient"]))
    except GraphMailError as exc:
        logger.error(
            "Microsoft Graph bildirimi gönderilemedi "
            "(mesaj id=%s, aşama=%s, durum=%s, hata=%s)",
            message.pk,
            exc.stage,
            exc.status if exc.status is not None else "network/config",
            str(exc),
        )
        return False
    except Exception as exc:  # Defensive: notification failures must never fail the form API.
        logger.error(
            "Microsoft Graph bildiriminde beklenmeyen hata "
            "(mesaj id=%s, hata_tipi=%s)",
            message.pk,
            type(exc).__name__,
        )
        return False

    logger.info("Microsoft Graph bildirimi gönderildi (mesaj id=%s)", message.pk)
    return True
