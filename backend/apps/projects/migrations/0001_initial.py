from django.db import migrations, models
import common.utils


def seed_projects(apps, schema_editor):
    Settings = apps.get_model("projects", "ProjectsPageSettings")
    Sector = apps.get_model("projects", "ProjectSector")
    Settings.objects.update_or_create(
        id=1,
        defaults={
            "hero_eyebrow_tr": "PROJELER", "hero_eyebrow_en": "PROJECTS",
            "hero_title_tr": "İŞ GİYİMİ\nSAHADA.", "hero_title_en": "WORKWEAR\nIN ACTION.",
            "hero_description_tr": "Farklı sektörlerin çalışma koşullarına, kurumsal kimliğine ve kullanım ihtiyaçlarına göre geliştirilen iş giyimi projeleri.",
            "hero_description_en": "Workwear projects developed around the working conditions, corporate identity and practical needs of different industries.",
            "cta_eyebrow_tr": "PROJENİZ", "cta_eyebrow_en": "YOUR PROJECT",
            "cta_title_tr": "PROJENİZ İÇİN\nBİRLİKTE GELİŞTİRELİM.", "cta_title_en": "LET'S DEVELOP\nYOUR PROJECT TOGETHER.",
            "cta_description_tr": "Ekibinizin çalışma koşullarını, ürün ihtiyaçlarını ve kurumsal kimliğini birlikte değerlendirerek size özel bir iş giyimi çözümü geliştirelim.",
            "cta_description_en": "Let us evaluate your team's working conditions, product needs and corporate identity to develop a workwear solution tailored to you.",
            "cta_text_tr": "BİZE ULAŞIN", "cta_text_en": "CONTACT US",
        },
    )
    rows = [
        ("ENDÜSTRİ & ÜRETİM", "INDUSTRY & MANUFACTURING", "SAHADA DAYANIKLILIK,\nEKİPTE BÜTÜNLÜK.", "DURABILITY ON SITE,\nUNITY ACROSS THE TEAM.", "Üretim sahalarında hareket özgürlüğü, dayanıklılık ve ekip bütünlüğünü bir araya getiren kurumsal iş giyimi çözümleri.", "Corporate workwear solutions combining freedom of movement, durability and team consistency across production environments.", "Mont\nYelek\nPantolon\nT-Shirt\nSweatshirt", "Jackets\nVests\nTrousers\nT-Shirts\nSweatshirts"),
        ("LOJİSTİK & OPERASYON", "LOGISTICS & OPERATIONS", "HAREKET İÇİN TASARLANDI,\nOPERASYONA HAZIR.", "DESIGNED FOR MOVEMENT,\nREADY FOR OPERATIONS.", "Depo, sevkiyat ve saha ekiplerinin yoğun temposuna uyum sağlayan rahat, görünür ve dayanıklı ürün programları.", "Comfortable, visible and durable product programs built for the pace of warehouse, delivery and field teams.", "Yelek\nSoftshell\nPantolon\nPolar\nYağmurluk", "Vests\nSoftshell\nTrousers\nFleece\nRainwear"),
        ("İNŞAAT & TEKNİK EKİPLER", "CONSTRUCTION & TECHNICAL TEAMS", "ZORLU KOŞULLARA,\nDOĞRU KORUMA.", "THE RIGHT PROTECTION\nFOR DEMANDING CONDITIONS.", "Değişken hava, yoğun hareket ve teknik saha ihtiyaçları için katmanlı ve işlevsel iş giyimi çözümleri.", "Layered, functional workwear solutions for changing weather, active movement and technical field requirements.", "Mont\nSoftshell\nTulum\nPantolon\nYağmurluk", "Jackets\nSoftshell\nCoveralls\nTrousers\nRainwear"),
        ("OTOMOTİV & SERVİS", "AUTOMOTIVE & SERVICE", "TEKNİK DETAY,\nTUTARLI GÖRÜNÜM.", "TECHNICAL DETAIL,\nCONSISTENT PRESENTATION.", "Servis ve bakım ekiplerinde hareket kolaylığını, temiz görünümü ve kurumsal standardı destekleyen koleksiyonlar.", "Collections supporting mobility, a clean appearance and corporate consistency for service and maintenance teams.", "Tulum\nCeket\nPantolon\nT-Shirt\nSweatshirt", "Coveralls\nJackets\nTrousers\nT-Shirts\nSweatshirts"),
        ("PERAKENDE & HİZMET", "RETAIL & SERVICE", "MÜŞTERİYE YAKIN,\nMARKAYA UYUMLU.", "CLOSE TO THE CUSTOMER,\nTRUE TO THE BRAND.", "Müşteri temasındaki ekipler için konfor, kurumsal görünüm ve günlük kullanım kolaylığını bir araya getiren çözümler.", "Solutions combining comfort, brand presentation and everyday practicality for customer-facing teams.", "Gömlek\nT-Shirt\nSweatshirt\nÖnlük\nYelek", "Shirts\nT-Shirts\nSweatshirts\nAprons\nVests"),
        ("KURUMSAL & PROMOSYON", "CORPORATE & PROMOTIONAL", "MARKANIZI TAŞIYAN\nTUTARLI ÜRÜNLER.", "CONSISTENT PRODUCTS\nTHAT CARRY YOUR BRAND.", "Kurumsal etkinlikler, ekip kullanımı ve promosyon projeleri için marka kimliğine göre özelleştirilen tekstil ürünleri.", "Textile products customized to brand identity for corporate events, team use and promotional projects.", "T-Shirt\nSweatshirt\nŞapka\nÇanta\nAksesuar", "T-Shirts\nSweatshirts\nCaps\nBags\nAccessories"),
    ]
    for order, row in enumerate(rows, 1):
        Sector.objects.update_or_create(sort_order=order, defaults={"title_tr": row[0], "title_en": row[1], "headline_tr": row[2], "headline_en": row[3], "description_tr": row[4], "description_en": row[5], "product_groups_tr": row[6], "product_groups_en": row[7], "is_active": True})


class Migration(migrations.Migration):
    initial = True
    dependencies = []
    operations = [
        migrations.CreateModel(name="ProjectsPageSettings", fields=[("id", models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name="ID")), ("hero_eyebrow_tr", models.CharField(blank=True, max_length=120)), ("hero_eyebrow_en", models.CharField(blank=True, max_length=120)), ("hero_title_tr", models.CharField(blank=True, max_length=220)), ("hero_title_en", models.CharField(blank=True, max_length=220)), ("hero_description_tr", models.TextField(blank=True)), ("hero_description_en", models.TextField(blank=True)), ("cta_eyebrow_tr", models.CharField(blank=True, max_length=120)), ("cta_eyebrow_en", models.CharField(blank=True, max_length=120)), ("cta_title_tr", models.CharField(blank=True, max_length=220)), ("cta_title_en", models.CharField(blank=True, max_length=220)), ("cta_description_tr", models.TextField(blank=True)), ("cta_description_en", models.TextField(blank=True)), ("cta_text_tr", models.CharField(blank=True, max_length=100)), ("cta_text_en", models.CharField(blank=True, max_length=100))], options={"verbose_name": "Projeler Sayfa Ayarları", "verbose_name_plural": "Projeler Sayfa Ayarları"}),
        migrations.CreateModel(name="ProjectSector", fields=[("id", models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name="ID")), ("title_tr", models.CharField(max_length=160)), ("title_en", models.CharField(max_length=160)), ("headline_tr", models.CharField(max_length=240)), ("headline_en", models.CharField(max_length=240)), ("description_tr", models.TextField()), ("description_en", models.TextField()), ("image", models.ImageField(blank=True, upload_to=common.utils.UniqueUploadTo("projects/sectors/"), validators=[])), ("image_mobile", models.ImageField(blank=True, upload_to=common.utils.UniqueUploadTo("projects/sectors/mobile/"), validators=[])), ("product_groups_tr", models.TextField(blank=True, help_text="Her ürün grubunu ayrı satıra yazın.")), ("product_groups_en", models.TextField(blank=True, help_text="Enter each product group on a separate line.")), ("sort_order", models.PositiveIntegerField(default=0)), ("is_active", models.BooleanField(default=True))], options={"verbose_name": "Sektör Projesi", "verbose_name_plural": "Sektör Projeleri", "ordering": ["sort_order", "id"]}),
        migrations.RunPython(seed_projects, migrations.RunPython.noop),
    ]
