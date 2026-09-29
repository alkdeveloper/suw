import json
from io import BytesIO
from unittest.mock import patch
from urllib.error import HTTPError, URLError

from django.test import TransactionTestCase, override_settings
from django.urls import reverse
from rest_framework.test import APIClient

from .models import ContactMessage
from .services import microsoft_graph_mail as graph_mail


GRAPH_SETTINGS = {
    "MICROSOFT_TENANT_ID": "tenant-id",
    "MICROSOFT_CLIENT_ID": "client-id",
    "MICROSOFT_CLIENT_SECRET": "secret-value",
    "MICROSOFT_GRAPH_SENDER": "info@suw.com.tr",
    "CONTACT_NOTIFICATION_EMAIL": "info@suw.com.tr",
}


class FakeResponse:
    def __init__(self, status, payload=None):
        self.status = status
        self.payload = payload or {}

    def __enter__(self):
        return self

    def __exit__(self, exc_type, exc_value, traceback):
        return False

    def read(self):
        return json.dumps(self.payload).encode("utf-8")


@override_settings(**GRAPH_SETTINGS)
class MicrosoftGraphMailTests(TransactionTestCase):
    reset_sequences = True

    def setUp(self):
        graph_mail._clear_token_cache()
        self.message = ContactMessage.objects.create(
            first_name="Test <script>",
            last_name="Kullanıcı & Co",
            email="test@example.com",
            phone="555 000 00 00",
            subject="Deneme <konu>",
            message="Merhaba <b>gizli değil</b>",
            kvkk_accepted=True,
        )

    def tearDown(self):
        graph_mail._clear_token_cache()

    @patch.object(graph_mail, "urlopen")
    def test_token_and_graph_202_success(self, mocked_urlopen):
        mocked_urlopen.side_effect = [
            FakeResponse(200, {"access_token": "token-value", "expires_in": 3600}),
            FakeResponse(202),
        ]

        self.assertTrue(graph_mail.send_contact_notification(self.message))
        token_request = mocked_urlopen.call_args_list[0].args[0]
        graph_request = mocked_urlopen.call_args_list[1].args[0]
        self.assertIn("oauth2/v2.0/token", token_request.full_url)
        self.assertTrue(graph_request.full_url.endswith("/users/info%40suw.com.tr/sendMail"))

    @patch.object(graph_mail, "urlopen")
    def test_graph_body_escapes_user_input(self, mocked_urlopen):
        mocked_urlopen.side_effect = [
            FakeResponse(200, {"access_token": "token-value", "expires_in": 3600}),
            FakeResponse(202),
        ]

        graph_mail.send_contact_notification(self.message)
        payload = json.loads(mocked_urlopen.call_args_list[1].args[0].data)
        content = payload["message"]["body"]["content"]
        self.assertNotIn("<script>", content)
        self.assertNotIn("<b>gizli değil</b>", content)
        self.assertIn("&lt;script&gt;", content)
        self.assertIn("&lt;b&gt;gizli değil&lt;/b&gt;", content)
        self.assertEqual(
            payload["message"]["replyTo"][0]["emailAddress"]["address"],
            self.message.email,
        )

    @patch.object(graph_mail, "urlopen")
    def test_graph_401_and_403_are_safe_failures(self, mocked_urlopen):
        for status in (401, 403):
            graph_mail._clear_token_cache()
            mocked_urlopen.side_effect = [
                FakeResponse(200, {"access_token": "token-value", "expires_in": 3600}),
                HTTPError("graph", status, "denied", {}, BytesIO()),
            ]
            with self.assertLogs(graph_mail.logger, level="ERROR") as logs:
                self.assertFalse(graph_mail.send_contact_notification(self.message))
            self.assertIn(f"durum={status}", " ".join(logs.output))
            self.assertNotIn("token-value", " ".join(logs.output))

    @patch.object(graph_mail, "urlopen")
    def test_graph_rate_limit_and_server_errors_are_safe_failures(self, mocked_urlopen):
        for status in (429, 500, 503):
            graph_mail._clear_token_cache()
            mocked_urlopen.side_effect = [
                FakeResponse(200, {"access_token": "token-value", "expires_in": 3600}),
                HTTPError("graph", status, "request failed", {}, BytesIO()),
            ]
            self.assertFalse(graph_mail.send_contact_notification(self.message))

    @patch.object(graph_mail, "urlopen")
    def test_graph_timeout_is_safe_failure(self, mocked_urlopen):
        mocked_urlopen.side_effect = [
            FakeResponse(200, {"access_token": "token-value", "expires_in": 3600}),
            TimeoutError("timed out"),
        ]
        self.assertFalse(graph_mail.send_contact_notification(self.message))

    @patch.object(graph_mail, "urlopen")
    def test_token_endpoint_error_is_safe_failure(self, mocked_urlopen):
        mocked_urlopen.side_effect = HTTPError(
            "token", 401, "invalid client", {}, BytesIO()
        )
        with self.assertLogs(graph_mail.logger, level="ERROR") as logs:
            self.assertFalse(graph_mail.send_contact_notification(self.message))
        output = " ".join(logs.output)
        self.assertNotIn("secret-value", output)
        self.assertNotIn("access_token", output)

    @override_settings(
        MICROSOFT_TENANT_ID="",
        MICROSOFT_CLIENT_ID="",
        MICROSOFT_CLIENT_SECRET="",
        MICROSOFT_GRAPH_SENDER="",
        CONTACT_NOTIFICATION_EMAIL="",
    )
    @patch.object(graph_mail, "urlopen")
    def test_missing_environment_skips_network_call(self, mocked_urlopen):
        with self.assertLogs(graph_mail.logger, level="WARNING"):
            self.assertFalse(graph_mail.send_contact_notification(self.message))
        mocked_urlopen.assert_not_called()


class ContactMessageCreateTests(TransactionTestCase):
    def setUp(self):
        self.client = APIClient()
        self.payload = {
            "first_name": "Ali",
            "last_name": "Veli",
            "email": "ali@example.com",
            "phone": "",
            "subject": "Test",
            "message": "Test mesajı",
            "kvkk_accepted": True,
        }

    @patch("apps.contact.views.send_contact_notification", return_value=False)
    def test_message_remains_saved_when_mail_fails(self, mocked_send):
        response = self.client.post(
            reverse("contact-message"), self.payload, format="json"
        )
        self.assertEqual(response.status_code, 201)
        self.assertEqual(ContactMessage.objects.count(), 1)
        mocked_send.assert_called_once()

    @patch("apps.contact.views.send_contact_notification", return_value=True)
    def test_message_is_saved_and_notification_runs_after_commit(self, mocked_send):
        response = self.client.post(
            reverse("contact-message"), self.payload, format="json"
        )
        self.assertEqual(response.status_code, 201)
        self.assertEqual(ContactMessage.objects.count(), 1)
        mocked_send.assert_called_once()
