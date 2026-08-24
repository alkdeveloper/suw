"""
Base settings — tüm ortamlar için ortak ayarlar.
"""
from datetime import timedelta
from pathlib import Path
import environ
from config.admin_permissions import is_superuser, is_ik_or_superuser

# Dizinler
BASE_DIR = Path(__file__).resolve().parent.parent.parent

# Environ
env = environ.Env()
environ.Env.read_env(BASE_DIR / ".env")

# Uygulama
INSTALLED_APPS = [
    # django-unfold (admin teması — default admin'in üstünde olmalı)
    "unfold",
    "unfold.contrib.filters",
    "unfold.contrib.forms",
    "unfold.contrib.inlines",

    # modeltranslation — django.contrib.admin'den ÖNCE olmalı
    "modeltranslation",

    # Django core
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",

    # Üçüncü taraf
    "rest_framework",
    "corsheaders",
    "solo",
    "ordered_model",
    "storages",
    "drf_spectacular",

    # Güvenlik
    "axes",

    # Yerel app'ler
    "apps.core",
    "apps.home",
    "apps.corporate",
    "apps.brands",
    "apps.gallery",
    "apps.careers",
    "apps.news",
    "apps.contact",
    "apps.legal",
]

MIDDLEWARE = [
    # EN BAŞTA olmalı: ALB/ECS health check'ini ALLOWED_HOSTS/Host doğrulamasından
    # önce yanıtlar (health check, Host olarak container'ın private IP'sini gönderir).
    "common.middleware.HealthCheckMiddleware",
    "django.middleware.security.SecurityMiddleware",
    # WhiteNoise — static dosyaları app ile aynı origin'den servis eder; SecurityMiddleware'in hemen ardında olmalı
    "whitenoise.middleware.WhiteNoiseMiddleware",
    "corsheaders.middleware.CorsMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
    "django.middleware.locale.LocaleMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
    "axes.middleware.AxesMiddleware",
]

# Auth backends
AUTHENTICATION_BACKENDS = [
    "axes.backends.AxesStandaloneBackend",
    "django.contrib.auth.backends.ModelBackend",
]

# django-axes — Admin brute force koruması
AXES_FAILURE_LIMIT = 10            # 10 başarısız denemeden sonra kilitle
AXES_COOLOFF_TIME = timedelta(minutes=30)  # 30 dakika kilitle
AXES_LOCKOUT_PARAMETERS = ["ip_address"]   # IP bazlı kilitleme
AXES_RESET_ON_SUCCESS = True               # Başarılı girişte sayacı sıfırla
AXES_LOCKOUT_CALLABLE = "config.views.axes_lockout_view"
AXES_ENABLE_ADMIN = False                  # Axes admin arayüzünü gizle

ROOT_URLCONF = "config.urls"

TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        "DIRS": [BASE_DIR / "templates"],
        "APP_DIRS": True,
        "OPTIONS": {
            "context_processors": [
                "django.template.context_processors.debug",
                "django.template.context_processors.request",
                "django.contrib.auth.context_processors.auth",
                "django.contrib.messages.context_processors.messages",
            ],
        },
    },
]

WSGI_APPLICATION = "config.wsgi.application"

# Şifre Doğrulama
AUTH_PASSWORD_VALIDATORS = [
    {"NAME": "django.contrib.auth.password_validation.UserAttributeSimilarityValidator"},
    {"NAME": "django.contrib.auth.password_validation.MinimumLengthValidator"},
    {"NAME": "django.contrib.auth.password_validation.CommonPasswordValidator"},
    {"NAME": "django.contrib.auth.password_validation.NumericPasswordValidator"},
]

# i18n
LANGUAGE_CODE = "tr"
TIME_ZONE = "Europe/Istanbul"
USE_I18N = True
USE_L10N = True
USE_TZ = True

LANGUAGES = [
    ("tr", "Türkçe"),
    ("en", "English"),
]

LOCALE_PATHS = [BASE_DIR / "locale"]

# Statik & Medya (local default — prod S3'e geçer)
STATIC_URL = "/static/"
STATIC_ROOT = BASE_DIR / "staticfiles"
STATICFILES_DIRS = [BASE_DIR / "static"]
MEDIA_URL = "/media/"
MEDIA_ROOT = BASE_DIR / "media"

# Birincil anahtar tipi
DEFAULT_AUTO_FIELD = "django.db.models.BigAutoField"

# REST Framework
REST_FRAMEWORK = {
    "DEFAULT_RENDERER_CLASSES": [
        "rest_framework.renderers.JSONRenderer",
    ],
    "DEFAULT_SCHEMA_CLASS": "drf_spectacular.openapi.AutoSchema",
    "EXCEPTION_HANDLER": "common.exceptions.custom_exception_handler",
    # Hız sınırlama — ScopedRateThrottle yalnızca `throttle_scope` tanımlı
    # view'larda devreye girer; diğer endpoint'leri etkilemez.
    "DEFAULT_THROTTLE_CLASSES": [
        "rest_framework.throttling.ScopedRateThrottle",
    ],
    "DEFAULT_THROTTLE_RATES": {
        "job_application": "10/hour",
    },
}

# Unfold Admin Tema
from django.urls import reverse_lazy
from django.templatetags.static import static

UNFOLD = {
    "SITE_TITLE": "ALK Group",
    "SITE_HEADER": "ALK Group",
    "SITE_URL": "/",
    "SITE_LOGO": lambda request: static("admin/img/alk-logo.png"),
    # Favicon — frontend ile aynı (frontend/public/alk_favicon.png kopyası)
    "SITE_FAVICONS": [
        {
            "rel": "icon",
            "sizes": "32x32",
            "type": "image/png",
            "href": lambda request: static("admin/img/alk_favicon.png"),
        },
    ],
    "SHOW_HISTORY": True,
    "SHOW_VIEW_ON_SITE": True,
    "DASHBOARD_CALLBACK": "apps.core.dashboard.dashboard_callback",

    # Özel CSS — sidebar arka planı ve logo görünürlüğü
    "STYLES": [
        lambda request: static("admin/css/theme.css"),
    ],

    # Renk teması — primary: lacivert, base: nötr gri
    # Unfold Tailwind v4: değerler geçerli CSS rengi olmalı (rgb() veya hex)
    "COLORS": {
        "primary": {
            "50":  "rgb(237, 240, 255)",
            "100": "rgb(214, 220, 250)",
            "200": "rgb(175, 185, 240)",
            "300": "rgb(126, 140, 220)",
            "400": "rgb(85,  100, 195)",
            "500": "rgb(55,  70,  165)",
            "600": "rgb(38,  52,  130)",
            "700": "rgb(24,  35,  90)",
            "800": "rgb(13,  20,  55)",
            "900": "rgb(8,   10,  20)",
            "950": "rgb(4,   5,   12)",
        },
    },

    "EXTENSIONS": {
        "modeltranslation": {
            "flags": {
                "tr": "🇹🇷",
                "en": "🇬🇧",
            },
        },
    },

    "SIDEBAR": {
        "show_search": True,
        "show_all_applications": False,
        "navigation": [
            {
                "title": "Ana Sayfa",
                "separator": False,
                "items": [
                    {"title": "Genel Ayarlar",        "icon": "home",                "link": reverse_lazy("admin:home_homepage_changelist"),                "permission": is_superuser},
                    {"title": "Ticker Kelimeler",     "icon": "format_list_bulleted", "link": reverse_lazy("admin:home_hometickerword_changelist"),          "permission": is_superuser},
                    {"title": "Markalar",             "icon": "label",               "link": reverse_lazy("admin:home_homebrand_changelist"),               "permission": is_superuser},
                    {"title": "Faaliyetler",          "icon": "work",                "link": reverse_lazy("admin:home_homeactivity_changelist"),            "permission": is_superuser},
                    {"title": "Özellikler",           "icon": "star",                "link": reverse_lazy("admin:home_homeaboutfeature_changelist"),        "permission": is_superuser},
                    {"title": "Operasyonel Öğeler",   "icon": "settings",            "link": reverse_lazy("admin:home_homeoperationalitem_changelist"),     "permission": is_superuser},
                ],
            },
            {
                "title": "Kurumsal",
                "separator": True,
                "items": [
                    {"title": "Kurumsal Sayfa", "icon": "domain",  "link": reverse_lazy("admin:corporate_corporatepage_changelist"),        "permission": is_superuser},
                    {"title": "Tarihçe",        "icon": "history", "link": reverse_lazy("admin:corporate_corporatehistoryitem_changelist"), "permission": is_superuser},
                ],
            },
            {
                "title": "Markalar",
                "separator": True,
                "items": [
                    {"title": "Sayfa Ayarları",        "icon": "storefront", "link": reverse_lazy("admin:brands_brandspage_changelist"),                    "permission": is_superuser},
                    {"title": "Markalar",               "icon": "label",      "link": reverse_lazy("admin:brands_brand_changelist"),                        "permission": is_superuser},
                    {"title": "Zaman Çizelgesi",        "icon": "timeline",   "link": reverse_lazy("admin:brands_brandmilestone_changelist"),               "permission": is_superuser},
                    {"title": "Operasyon Lokasyonları", "icon": "public",     "link": reverse_lazy("admin:brands_brandsoperationlocation_changelist"),       "permission": is_superuser},
                ],
            },
            {
                "title": "Şirketler",
                "separator": True,
                "items": [
                    {"title": "Sayfa Ayarları",         "icon": "domain",       "link": reverse_lazy("admin:brands_companiespage_changelist"),              "permission": is_superuser},
                    {"title": "Şirketler",               "icon": "business",     "link": reverse_lazy("admin:brands_groupcompany_changelist"),              "permission": is_superuser},
                    {"title": "Detay Sayfaları",         "icon": "description",  "link": reverse_lazy("admin:brands_companydetailpage_changelist"),         "permission": is_superuser},
                    {"title": "Operasyon Lokasyonları",  "icon": "public",       "link": reverse_lazy("admin:brands_companiesoperationlocation_changelist"), "permission": is_superuser},
                    {"title": "Şirket · AKAL",           "icon": "account_tree", "link": reverse_lazy("admin:brands_akalpage_changelist"),                  "permission": is_superuser},
                    {"title": "Şirket · ALKAN",          "icon": "account_tree", "link": reverse_lazy("admin:brands_alkanpage_changelist"),                 "permission": is_superuser},
                    {"title": "Şirket · AKAL GmbH",      "icon": "account_tree", "link": reverse_lazy("admin:brands_akalgmbhpage_changelist"),              "permission": is_superuser},
                ],
            },
            {
                "title": "Haberler",
                "separator": True,
                "items": [
                    {"title": "Sayfa Ayarları", "icon": "article",   "link": reverse_lazy("admin:news_newspage_changelist"),     "permission": is_superuser},
                    {"title": "Kategoriler",    "icon": "category",  "link": reverse_lazy("admin:news_newscategory_changelist"), "permission": is_superuser},
                    {"title": "Haberler",       "icon": "newspaper", "link": reverse_lazy("admin:news_news_changelist"),         "permission": is_superuser},
                ],
            },
            {
                "title": "Galeri",
                "separator": True,
                "items": [
                    {"title": "Sayfa Ayarları", "icon": "photo_library", "link": reverse_lazy("admin:gallery_gallerypage_changelist"),     "permission": is_superuser},
                    {"title": "Kategoriler",    "icon": "folder",        "link": reverse_lazy("admin:gallery_gallerycategory_changelist"), "permission": is_superuser},
                    {"title": "Görseller",      "icon": "image",         "link": reverse_lazy("admin:gallery_galleryimage_changelist"),    "permission": is_superuser},
                ],
            },
            {
                "title": "İletişim",
                "separator": True,
                "items": [
                    {"title": "Sayfa Ayarları", "icon": "contact_mail", "link": reverse_lazy("admin:contact_contactpage_changelist"),        "permission": is_superuser},
                    {"title": "Mesajlar",       "icon": "inbox",        "link": reverse_lazy("admin:contact_contactmessage_changelist"),     "permission": is_superuser},
                ],
            },
            {
                "title": "Kariyer",
                "separator": True,
                "items": [
                    {"title": "Sayfa Ayarları", "icon": "work",           "link": reverse_lazy("admin:careers_careersettings_changelist"),  "permission": is_ik_or_superuser},
                    {"title": "Departmanlar",   "icon": "account_tree",   "link": reverse_lazy("admin:careers_department_changelist"),      "permission": is_ik_or_superuser},
                    {"title": "İş İlanları",    "icon": "assignment",     "link": reverse_lazy("admin:careers_jobposition_changelist"),     "permission": is_ik_or_superuser},
                    {"title": "Başvurular",     "icon": "assignment_ind", "link": reverse_lazy("admin:careers_jobapplication_changelist"),  "permission": is_ik_or_superuser},
                ],
            },
            {
                "title": "Yasal",
                "separator": True,
                "items": [
                    {"title": "Yasal Sayfalar", "icon": "gavel", "link": reverse_lazy("admin:legal_legalpage_changelist"), "permission": is_superuser},
                ],
            },
            {
                "title": "Site Ayarları",
                "separator": True,
                "items": [
                    {"title": "Site Ayarları",    "icon": "tune", "link": reverse_lazy("admin:core_sitesettings_changelist"),          "permission": is_superuser},
                    {"title": "Bülten Aboneleri", "icon": "mail", "link": reverse_lazy("admin:core_newslettersubscriber_changelist"),  "permission": is_superuser},
                ],
            },
            {
                "title": "Yönetim",
                "separator": True,
                "items": [
                    {"title": "Kullanıcılar", "icon": "people", "link": reverse_lazy("admin:auth_user_changelist"), "permission": is_superuser},
                ],
            },
        ],
    },
}

# drf-spectacular
SPECTACULAR_SETTINGS = {
    "TITLE": "ALK API",
    "VERSION": "v1",
    "SERVE_INCLUDE_SCHEMA": False,
}

# Modeltranslation
MODELTRANSLATION_DEFAULT_LANGUAGE = "tr"
MODELTRANSLATION_LANGUAGES = ("tr", "en")

# İletişim formu bildirim e-postası — gelen mesajların iletileceği adres
CONTACT_NOTIFICATION_EMAIL = env("CONTACT_NOTIFICATION_EMAIL", default="")

# Loglama — uygulama logları (apps.*) konsola/stdout'a yazılır.
LOGGING = {
    "version": 1,
    "disable_existing_loggers": False,
    "formatters": {
        "simple": {"format": "[{asctime}] {levelname} {name}: {message}", "style": "{"},
    },
    "handlers": {
        "console": {"class": "logging.StreamHandler", "formatter": "simple"},
    },
    "loggers": {
        "apps": {"handlers": ["console"], "level": "INFO", "propagate": False},
    },
    "root": {"handlers": ["console"], "level": "WARNING"},
}
