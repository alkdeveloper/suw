"""
Development settings — local geliştirme ortamı.
"""
from .base import *  # noqa

# Güvenlik
SECRET_KEY = env("SECRET_KEY", default="dev-secret-key-change-in-production")
DEBUG = True
ALLOWED_HOSTS = ["*"]

# Veritabanı (PostgreSQL)
DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.postgresql",
        "NAME": env("POSTGRES_DB"),
        "USER": env("POSTGRES_USER"),
        "PASSWORD": env("POSTGRES_PASSWORD"),
        "HOST": env("DB_HOST", default="localhost"),
        "PORT": env("DB_PORT", default="5433"),
    }
}

# CORS (dev'de tüm originlere izin ver)
CORS_ALLOW_ALL_ORIGINS = True

# Medya: MEDIA_PUBLIC_BASE_URL ile tarayıcıya dönecek absolute URL belirlenir.
# Docker iç ağı (backend:8000) yerine localhost:8000 kullanılır.
_media_public_base = env("MEDIA_PUBLIC_BASE_URL", default="http://localhost:8000").rstrip("/")
MEDIA_URL = f"{_media_public_base}/media/"

USE_S3_MEDIA = env.bool("USE_S3_MEDIA", default=False)
if USE_S3_MEDIA:
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
        # Dev'de static dosyalar her zaman yerel diskten servis edilir.
        # collectstatic'i S3'e yüklemek gerekmez.
        "staticfiles": {
            "BACKEND": "django.contrib.staticfiles.storage.StaticFilesStorage",
        },
    }
else:
    # Yerel disk: suffix eklemeden üzerine yaz
    STORAGES = {
        "default": {
            "BACKEND": "common.storage_backends.LocalMediaStorage",
        },
        "staticfiles": {
            "BACKEND": "django.contrib.staticfiles.storage.StaticFilesStorage",
        },
    }

# E-posta — varsayılan console (ekrana basar, göndermez).
# USE_SMTP_EMAIL=True ise gerçek SMTP ile gönderir; local'de gerçek gönderimi test etmek için.
USE_SMTP_EMAIL = env.bool("USE_SMTP_EMAIL", default=False)
if USE_SMTP_EMAIL:
    EMAIL_BACKEND = "django.core.mail.backends.smtp.EmailBackend"
    EMAIL_HOST = env("EMAIL_HOST")
    EMAIL_PORT = env.int("EMAIL_PORT", default=587)
    EMAIL_USE_TLS = True
    EMAIL_HOST_USER = env("EMAIL_HOST_USER")
    EMAIL_HOST_PASSWORD = env("EMAIL_HOST_PASSWORD")
    DEFAULT_FROM_EMAIL = env("DEFAULT_FROM_EMAIL")
    EMAIL_TIMEOUT = 10
else:
    EMAIL_BACKEND = "django.core.mail.backends.console.EmailBackend"

# Debug Toolbar (opsiyonel, kuruluysa)
# INSTALLED_APPS += ["debug_toolbar"]
# MIDDLEWARE += ["debug_toolbar.middleware.DebugToolbarMiddleware"]
# INTERNAL_IPS = ["127.0.0.1"]
