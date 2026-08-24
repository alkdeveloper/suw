"""
Admin sidebar permission callables — unfold navigation'da kullanılır.
Her fonksiyon (request) alır, bool döner.
"""

KARIYER_GRUP_ADI = "Kariyer Yöneticisi"


def is_superuser(request):
    return request.user.is_superuser


def is_kariyer_or_superuser(request):
    if request.user.is_superuser:
        return True
    # has_module_perms session cache'e bağlı olduğu için grup üyeliğini kontrol et
    return request.user.groups.filter(name=KARIYER_GRUP_ADI).exists()


# geriye dönük uyumluluk
is_ik_or_superuser = is_kariyer_or_superuser
