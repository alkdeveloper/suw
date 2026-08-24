#!/usr/bin/env bash

set -e

echo " Veritabanı bekleniyor..."
while ! python -c "
import django, os
os.environ.setdefault('DJANGO_SETTINGS_MODULE', os.environ.get('DJANGO_SETTINGS_MODULE', 'config.settings.development'))
django.setup()
from django.db import connection
connection.ensure_connection()
" 2>/dev/null; do
  sleep 1
done
echo "✔  Veritabanı hazır."

echo " Migration'lar uygulanıyor..."
python manage.py migrate --no-input
echo "✔  Migration'lar tamamlandı."

echo " Statik dosyalar toplanıyor..."
python manage.py collectstatic --no-input --clear
echo "✔  Statik dosyalar toplandı."

# ---------------------------------------------------------------------------
# Superuser yönetimi
# ---------------------------------------------------------------------------
# Davranış:
#   - Kullanıcı YOKSA: env değerleriyle oluşturulur.
#   - Kullanıcı VARSA: sadece is_staff / is_superuser bayrakları garantilenir.
#                      Şifreye, e-postaya ASLA dokunulmaz — admin panel
#                      üzerinden yapılan değişiklikler korunur.
#   - Zorla sıfırlama gerekirse: DJANGO_SUPERUSER_FORCE_RESET=true
#     env değişkeni set edilir; deploy sonrası mutlaka kaldırın.
# ---------------------------------------------------------------------------
echo " Superuser kontrol ediliyor..."
python manage.py shell -c "
import os
from django.contrib.auth import get_user_model
User = get_user_model()
username = '${DJANGO_SUPERUSER_USERNAME:-admin}'
email = '${DJANGO_SUPERUSER_EMAIL:-admin@alk.com}'
password = '${DJANGO_SUPERUSER_PASSWORD:-admin}'
force_reset = os.environ.get('DJANGO_SUPERUSER_FORCE_RESET', '').lower() in ('1', 'true', 'yes')

user = User.objects.filter(username=username).first()

if user is None:
    User.objects.create_superuser(username, email, password)
    print(f'✔  Superuser oluşturuldu: {username}')
else:
    changed = False

    if not user.is_staff:
        user.is_staff = True
        changed = True

    if not user.is_superuser:
        user.is_superuser = True
        changed = True

    if force_reset:
        user.email = email
        user.set_password(password)
        changed = True
        print(f'⚠  Superuser zorla sıfırlandı (FORCE_RESET aktif): {username}')

    if changed:
        user.save()
        if not force_reset:
            print(f'✔  Superuser yetkileri güncellendi: {username}')
    else:
        print(f'✔  Superuser değişmedi: {username} (şifre/e-posta korundu)')
"

echo ""
echo " Sunucu başlatılıyor..."
exec "$@"
