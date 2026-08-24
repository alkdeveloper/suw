"""
Bot koruma middleware — yüksek frekanslı istekleri tespit edip IP'yi geçici olarak banlar.

Ayarlar (settings.py):
  BOT_RATELIMIT_REQUESTS  — ban tetiklenmeden önce izin verilen istek sayısı (default: 30)
  BOT_RATELIMIT_WINDOW    — istek sayacı süresi, saniye (default: 10)
  BOT_RATELIMIT_BAN_MINUTES — ban süresi, dakika (default: 30)
"""

import logging

from django.conf import settings
from django.core.cache import cache
from django.http import HttpResponse
from django.shortcuts import render

logger = logging.getLogger(__name__)

# Sayaç sıfırlanmadan izin verilen istek sayısı
RATELIMIT_REQUESTS = getattr(settings, "BOT_RATELIMIT_REQUESTS", 30)
# Sayaç penceresi (saniye)
RATELIMIT_WINDOW = getattr(settings, "BOT_RATELIMIT_WINDOW", 10)
# Ban süresi (saniye)
RATELIMIT_BAN_SECONDS = getattr(settings, "BOT_RATELIMIT_BAN_MINUTES", 30) * 60

# Bu path prefix'leri rate limit kapsamı dışı
EXEMPT_PREFIXES = ("/static/", "/media/", "/admin/")
EXEMPT_PATHS = ("/api/health/",)


def _get_client_ip(request) -> str:
    """ALB / proxy arkasında gerçek IP'yi döndür."""
    forwarded = request.META.get("HTTP_X_FORWARDED_FOR")
    if forwarded:
        return forwarded.split(",")[0].strip()
    return request.META.get("REMOTE_ADDR", "unknown")


def _is_exempt(path: str) -> bool:
    if path in EXEMPT_PATHS:
        return True
    return any(path.startswith(p) for p in EXEMPT_PREFIXES)


class HealthCheckMiddleware:
    """ALB/ECS health check'ini Host doğrulamasından (ALLOWED_HOSTS) ÖNCE yanıtlar.

    ALB health check, Host header'ı olarak container'ın private IP'sini gönderir.
    Bu IP ALLOWED_HOSTS'ta olmadığı için normal akışta Django 400 (DisallowedHost)
    döndürür ve health check fail olur → task öldürülür. Bu middleware MIDDLEWARE
    listesinin EN BAŞINDA çalışıp health path'ini doğrudan 200 ile yanıtlar; böylece
    ALLOWED_HOSTS'u '*' olmadan sıkı tutsak da health check her zaman geçer.

    Not: request.path Host doğrulamasını TETİKLEMEZ, bu yüzden güvenlidir.
    """

    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        if request.path == "/api/health/":
            return HttpResponse("ok", content_type="text/plain")
        return self.get_response(request)


class BotRateLimitMiddleware:
    """
    Her IP için kayan pencerede istek sayar.
    Eşik aşılırsa IP'yi önbelleğe yazar → sonraki istekler anında 429 döner.
    """

    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        path = request.path

        if _is_exempt(path):
            return self.get_response(request)

        ip = _get_client_ip(request)
        ban_key = f"bot:ban:{ip}"
        counter_key = f"bot:cnt:{ip}"

        # Ban'lı mı?
        if cache.get(ban_key):
            return self._banned_response(request, ip)

        # Atomik sayaç artır (TTL ilk set'te belirlenir, sonraki incr'lar değiştirmez)
        added = cache.add(counter_key, 1, RATELIMIT_WINDOW)
        if not added:
            try:
                count = cache.incr(counter_key)
            except ValueError:
                # Anahtar pencere sonunda silindi, yeniden başlat
                cache.add(counter_key, 1, RATELIMIT_WINDOW)
                count = 1
        else:
            count = 1

        if count > RATELIMIT_REQUESTS:
            cache.set(ban_key, True, RATELIMIT_BAN_SECONDS)
            cache.delete(counter_key)
            logger.warning(
                "Bot ban uygulandı | ip=%s | %d saniyede %d istek",
                ip,
                RATELIMIT_WINDOW,
                count,
            )
            return self._banned_response(request, ip)

        return self.get_response(request)

    @staticmethod
    def _banned_response(request, ip: str):
        logger.warning("Bot ban aktif — istek reddedildi | ip=%s path=%s", ip, request.path)
        return render(request, "429.html", status=429)
