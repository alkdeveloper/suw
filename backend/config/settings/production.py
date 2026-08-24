"""
Production settings — canlı sunucu ortamı.
"""
from .base import *  # noqa

# Güvenlik
SECRET_KEY = env("SECRET_KEY")
DEBUG = False
# ALLOWED_HOSTS — backend'in servis edildiği gerçek domain(ler). '*' KULLANMA.
# Health check artık common.middleware.HealthCheckMiddleware ile ALLOWED_HOSTS'tan
# bağımsız yanıtlanıyor; bu yüzden burada '*' veya IP zorunlu değil.
ALLOWED_HOSTS = list(env.list("ALLOWED_HOSTS", default=[]))

# Yedek: internal (service-to-service) IP-bazlı çağrılar için container'ın kendi
# private IP'sini ekle. gethostname yerel çözümleme yapar — dış route/NAT gerektirmez.
import socket as _socket
try:
    for _info in _socket.getaddrinfo(_socket.gethostname(), None, _socket.AF_INET):
        _ip = _info[4][0]
        if _ip and _ip != "127.0.0.1" and _ip not in ALLOWED_HOSTS:
            ALLOWED_HOSTS.append(_ip)
except OSError:
    pass

# Veritabanı (PostgreSQL)
DATABASES = {
    "default": env.db("DATABASE_URL")
}

# CORS
CORS_ALLOW_ALL_ORIGINS = env.bool("CORS_ALLOW_ALL_ORIGINS", default=False)
CORS_ALLOWED_ORIGINS = env.list("CORS_ALLOWED_ORIGINS", default=[])

# Güvenlik Başlıkları
SECURE_BROWSER_XSS_FILTER = True
SECURE_CONTENT_TYPE_NOSNIFF = True
X_FRAME_OPTIONS = "DENY"
SECURE_HSTS_SECONDS = 31536000
SECURE_HSTS_INCLUDE_SUBDOMAINS = True
SECURE_SSL_REDIRECT = env.bool("SECURE_SSL_REDIRECT", default=False)
SECURE_PROXY_SSL_HEADER = ("HTTP_X_FORWARDED_PROTO", "https")
# HTTPS yoksa (örn. local docker http) .env'de False yapılabilir; gerçek prod'da True kalır.
SESSION_COOKIE_SECURE = env.bool("SESSION_COOKIE_SECURE", default=True)
CSRF_COOKIE_SECURE = env.bool("CSRF_COOKIE_SECURE", default=True)

# AWS S3
AWS_ACCESS_KEY_ID = env("AWS_ACCESS_KEY_ID")
AWS_SECRET_ACCESS_KEY = env("AWS_SECRET_ACCESS_KEY")
AWS_STORAGE_BUCKET_NAME = env("AWS_STORAGE_BUCKET_NAME")
AWS_S3_REGION_NAME = env("AWS_S3_REGION_NAME", default="eu-central-1")
AWS_S3_CUSTOM_DOMAIN = env("AWS_S3_CUSTOM_DOMAIN", default="")
AWS_DEFAULT_ACL = None
AWS_S3_FILE_OVERWRITE = False
AWS_QUERYSTRING_AUTH = False

STORAGES = {
    "default": {
        "BACKEND": "common.storage_backends.MediaStorage",
    },
    "staticfiles": {
        # WhiteNoise — static (admin/Unfold CSS/JS/font) app ile aynı origin'den servis edilir; S3'e gerek yok.
        "BACKEND": "whitenoise.storage.CompressedManifestStaticFilesStorage",
    },
}

# CV gibi gizli yüklemeler private bucket + imzalı (süreli) URL ile saklanır.
# common.storage_backends.select_cv_storage bu bayrağa göre PrivateMediaStorage seçer.
USE_PRIVATE_CV_STORAGE = True

# E-posta
EMAIL_BACKEND = "django.core.mail.backends.smtp.EmailBackend"
EMAIL_HOST = env("EMAIL_HOST")
EMAIL_PORT = env.int("EMAIL_PORT", default=587)
EMAIL_USE_TLS = True
EMAIL_HOST_USER = env("EMAIL_HOST_USER")
EMAIL_HOST_PASSWORD = env("EMAIL_HOST_PASSWORD")
DEFAULT_FROM_EMAIL = env("DEFAULT_FROM_EMAIL")
EMAIL_TIMEOUT = 10  # SMTP isteğin request thread'ini kilitlememesi için
