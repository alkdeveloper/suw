from django.core.files.storage import FileSystemStorage
from storages.backends.s3boto3 import S3Boto3Storage


class StaticStorage(S3Boto3Storage):
    location = "static"


class MediaStorage(S3Boto3Storage):
    location = "media"
    file_overwrite = False


class PrivateMediaStorage(S3Boto3Storage):
    """CV gibi gizli yüklemeler için private + imzalı (süreli) erişim.

    querystring_auth=True → her .url çağrısı imzalı ve querystring_expire kadar
    geçerli bir URL üretir; imzasız/kalıcı public erişim yoktur. KVKK kapsamındaki
    kişisel veriler (CV) için zorunludur.
    """

    location = "private"
    default_acl = "private"
    file_overwrite = False
    querystring_auth = True
    querystring_expire = 3600  # saniye (1 saat)


class LocalMediaStorage(FileSystemStorage):
    """Dev ortamı için: aynı isimde dosya varsa suffix eklemeden üzerine yazar."""

    def get_available_name(self, name, max_length=None):
        return name


def select_cv_storage():
    """CV alanı için ortam-duyarlı storage seçer.

    Prod'da (USE_PRIVATE_CV_STORAGE=True) private/imzalı S3 storage; aksi halde
    (dev/local) Django'nun varsayılan dosya sistemi storage'ı.
    """
    from django.conf import settings

    if getattr(settings, "USE_PRIVATE_CV_STORAGE", False):
        return PrivateMediaStorage()

    from django.core.files.storage import default_storage

    return default_storage
