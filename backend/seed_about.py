"""
About (Corporate) sayfası seed scripti.
Kullanım: docker compose exec backend python seed_about.py
"""
import os, django

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "config.settings.development")
django.setup()

from django.contrib.auth import get_user_model
from apps.corporate.models import CorporatePage, CorporateHistoryItem

# ── Admin şifresi ────────────────────────────────────────────────
User = get_user_model()
u = User.objects.filter(username="admin").first()
if u:
    u.set_password("Admin1234!")
    u.save()
    print("✓ Admin şifresi: Admin1234!")
else:
    print("⚠  Admin kullanıcısı bulunamadı")

# ── Corporate (About) sayfası ────────────────────────────────────
page, _ = CorporatePage.objects.get_or_create(pk=1)

page.hero_text_tr   = "Köklerimiz üretimde, vizyonumuz gelecekte..."
page.hero_text_en   = "Our roots are in production, our vision in the future..."

page.about_label_tr = "HAKKIMIZDA"
page.about_label_en = "ABOUT US"

page.about_description_tr = (
    "ALK Group, 1978 yılında tekstil odağında başlayan yolculuğunu bugün çok markalı "
    "ve uluslararası bir yapıya dönüştürmüş güçlü bir holdingdir. Üretimden dağıtıma "
    "uzanan entegre iş modeliyle farklı pazarlarda değer üretmekte; kalite, güven ve "
    "sürdürülebilir büyüme ilkeleriyle yatırımlarına devam etmektedir."
)
page.about_description_en = (
    "ALK Group is a powerful holding company that has transformed its journey, which "
    "started with a focus on textiles in 1978, into a multi-brand and international "
    "structure today. Creating value in different markets with an integrated business "
    "model spanning from production to distribution."
)

page.history_label_tr = "HİKAYEMİZ"
page.history_label_en = "OUR STORY"
page.history_title_tr  = "Faaliyet Süreci"
page.history_title_en  = "Our Journey"

page.vision_title_tr = "Vizyon"
page.vision_title_en = "Vision"
page.vision_description_tr = (
    "Sektördeki liderlik deneyimimizi yeniliğe, katma değer yaratmaya ve sürdürülebilir "
    "büyümeye taşıyarak, sahip olduğumuz her firmayı 'o firmanın en güçlü markası' "
    "konumuna getirmek ve uluslararası pazarlarda güvenilir bir firma olmak."
)
page.vision_description_en = (
    "To position each of our companies as 'the strongest brand in their sector' by "
    "transforming our leadership experience into innovation, value creation and "
    "sustainable growth, and to be a trusted company in international markets."
)

page.mission_title_tr = "Misyon"
page.mission_title_en = "Mission"
page.mission_description_tr = (
    "Finanse, ülkemiz ekonomisine katkı sağlamak amacıyla inovasyonla birlikte "
    "büyüyen, büyümekte olan iş yapıyoruz. Bu süreçte bünyemizdeki iş ortaklarımız "
    "ile el ele, birbirlerimizin güçlü yönlerinden yararlanan ve yararlanan "
    "markalarımızı yönetmek, büyütmek ve uluslararası arenada söz sahibi olmak."
)
page.mission_description_en = (
    "We grow businesses that contribute to our country's economy through innovation. "
    "In this process, we manage and grow our brands hand in hand with our business "
    "partners, leveraging each other's strengths."
)

page.brands_title_tr = "Çok markalı üretken yapımız"
page.brands_title_en = "Our multi-brand productive structure"

page.join_label_tr       = "HAKKIMIZDA"
page.join_label_en       = "ABOUT US"
page.join_title_tr       = "Aramıza Katılın"
page.join_title_en       = "Join Us"
page.join_description_tr = (
    "Sürdürülebilir büyümemizin bir parçası olmak, "
    "değer üretmek için yıllardır aramızda mısınız?"
)
page.join_description_en = (
    "Would you like to be part of our sustainable growth "
    "and create value with us?"
)
page.join_button_text_tr = "Kariyer"
page.join_button_text_en = "Career"
page.join_button_url     = "/kariyer"

page.save()
print("✓ CorporatePage kaydedildi")

# ── Tarihçe öğeleri ──────────────────────────────────────────────
CorporateHistoryItem.objects.all().delete()

items = [
    (1, "1978",
     "İstanbul'da sıfırdan yola çıkan AKAL Tekstil kuruldu ve üretim odaklı bir yolculuk başladı.",
     "AKAL Tekstil was founded in Istanbul, starting a production-focused journey from scratch."),
    (2, "1993",
     "Büyüyen holdingimiz, yurt dışı pazarlardaki pozisyonumuzu güçlendirerek uluslararası arenaya adım attı.",
     "Our growing holding strengthened its position in overseas markets and stepped into the international arena."),
    (3, "2000",
     "ALKAN Akıl Pozisyon'un faaliyet alanları genişledi; üretime bütünleşik dağıtım başlandı.",
     "The areas of activity of ALKAN expanded; integrated distribution into production began."),
    (4, "2010",
     "ALK Group bünyesindeki tekstil ve iş güvenliği markaları bölgesel ve küresel pazarlarda konumlandı.",
     "Textile and occupational safety brands within ALK Group were positioned in regional and global markets."),
]

for order, year, desc_tr, desc_en in items:
    obj = CorporateHistoryItem(order=order, year=year)
    obj.description_tr = desc_tr
    obj.description_en = desc_en
    obj.save()

print(f"✓ {len(items)} tarihçe öğesi eklendi")
print("\n=== TAMAMLANDI ===")
print("Admin Panel: http://localhost:8000/admin/")
print("Kullanici:   admin")
print("Sifre:       Admin1234!")
