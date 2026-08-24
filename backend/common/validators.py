"""
Dosya yükleme doğrulayıcıları.

CV yüklemelerinde uzantı kontrolü (FileExtensionValidator) tek başına yetersizdir:
`zararli.exe` dosyası `cv.pdf` olarak yeniden adlandırılıp yüklenebilir. Buradaki
doğrulayıcı dosyanın GERÇEK içeriğini baş baytlarından (magic bytes / dosya imzası)
doğrular ve harici bir sistem bağımlılığı (libmagic vb.) gerektirmez.

CV'ler yalnızca PDF kabul edilir ve admin'de tarayıcıda (sandbox) görüntülenir;
bu, Office (Word) makro saldırı vektörünü tümüyle kapatır.
"""
import os

from django.core.exceptions import ValidationError
from django.utils.translation import gettext_lazy as _

# İzin verilen tek CV formatının dosya imzası
PDF_SIGNATURE = b"%PDF-"

MAX_CV_SIZE_MB = 5
MAX_CV_SIZE = MAX_CV_SIZE_MB * 1024 * 1024

ALLOWED_CV_EXTENSIONS = ("pdf",)


def _read_head(f, size: int = 2048) -> bytes:
    """Dosyanın baş baytlarını okur ve imleci başa geri sarar.

    seek(0) yapılmazsa dosya kaydedilirken içerik boş/eksik olur — kritik.
    """
    f.seek(0)
    head = f.read(size)
    f.seek(0)
    return head


def validate_cv_file(value) -> None:
    """CV dosyasını boyut ve gerçek içerik tipine göre doğrular.

    - Boyut MAX_CV_SIZE_MB sınırını aşamaz (disk/S3 doldurma koruması).
    - Dosya gerçekten bir PDF olmalıdır (uzantı sahteciliğine karşı koruma).
    """
    # 1) Boyut
    size = getattr(value, "size", None)
    if size is not None and size > MAX_CV_SIZE:
        raise ValidationError(
            _("Dosya boyutu %(max)d MB sınırını aşıyor.") % {"max": MAX_CV_SIZE_MB}
        )

    # 2) İçerik imzası — gerçekten PDF mi?
    head = _read_head(value)
    if not head.startswith(PDF_SIGNATURE):
        raise ValidationError(
            _("Dosya geçerli bir PDF değil. Lütfen CV'nizi PDF olarak yükleyin.")
        )
