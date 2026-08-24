#!/usr/bin/env bash
# Alk DB dump helper.
# Kullanım: ./scripts/dump-db.sh
# Çıktı: dump-alk_db-YYYYMMDDHHMM.sql (repo kökünde)

set -euo pipefail

CONTAINER="${DB_CONTAINER:-alk_db}"
DB_USER="${DB_USER:-alk_user}"
DB_NAME="${DB_NAME:-alk_db}"

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
TIMESTAMP="$(date +%Y%m%d%H%M)"
OUT_FILE="${REPO_ROOT}/dump-${DB_NAME}-${TIMESTAMP}.sql"

if ! docker ps --format '{{.Names}}' | grep -q "^${CONTAINER}$"; then
  echo "✗ '${CONTAINER}' container çalışmıyor." >&2
  exit 1
fi

echo "→ Dump alınıyor: ${OUT_FILE}"
docker exec -t "${CONTAINER}" pg_dump -U "${DB_USER}" -d "${DB_NAME}" \
  --no-owner --no-privileges --clean --if-exists \
  > "${OUT_FILE}"

SIZE=$(du -h "${OUT_FILE}" | cut -f1)
echo "✓ Hazır: ${OUT_FILE} (${SIZE})"
