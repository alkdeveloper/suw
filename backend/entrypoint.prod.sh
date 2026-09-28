#!/usr/bin/env sh

set -eu

echo "Waiting for PostgreSQL..."
until python -c "
import os
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings.production')
import django
django.setup()
from django.db import connection
connection.ensure_connection()
" >/dev/null 2>&1; do
  sleep 1
done
echo "PostgreSQL is ready."

python manage.py migrate --no-input
python manage.py collectstatic --no-input

exec "$@"
