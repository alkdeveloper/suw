from django.db import migrations


ITEMS = [
    (
        "KALİTE VE MARKA",
        "QUALITY AND BRAND",
        "SUW markamız ile, mevcut değerlerinize yenilerini ekleyerek markanızı daha da güçlendiririz.",
        "With SUW, we strengthen your brand further by adding new value to what you already stand for.",
    ),
    (
        "TASARIM VE KONFOR",
        "DESIGN AND COMFORT",
        "Çalışanlarınızın konforunu ön planda tutarak, işlevsel ve şık kıyafetlerle kurumunuzun imajını zirveye taşırız.",
        "By putting your employees’ comfort first, we elevate your corporate image with functional and stylish clothing.",
    ),
    (
        "GÜVENİLİR DESTEK",
        "RELIABLE SUPPORT",
        "İş ahlakına sadık kalarak, satış öncesi ve sonrasında güvenilir iletişim ve üstün destek hizmetiyle yanınızda oluruz.",
        "Staying true to sound business ethics, we stand by you with reliable communication and outstanding support before and after every sale.",
    ),
    (
        "GENİŞ ÜRÜN AĞI",
        "BROAD PRODUCT NETWORK",
        "Geniş ürün yelpazesi ve ulusal-uluslararası tedarik ağıyla, ihtiyaçlarınıza en uygun çözümleri sunarız.",
        "With a broad product range and a national and international supply network, we provide the solutions best suited to your needs.",
    ),
    (
        "TESLİMAT VE HİZMET",
        "DELIVERY AND SERVICE",
        "Zamanında teslimat, yüksek kaliteli ürünler ve rekabetçi fiyatlarla mükemmel hizmet alırsınız.",
        "You receive excellent service through on-time delivery, high-quality products and competitive pricing.",
    ),
]


def update_why_suw(apps, schema_editor):
    CorporatePage = apps.get_model("corporate", "CorporatePage")
    WhySuwItem = apps.get_model("corporate", "WhySuwItem")

    CorporatePage.objects.update(
        why_eyebrow_tr="NEDEN SUW?",
        why_eyebrow_en="WHY SUW?",
        why_title_tr="NEDEN SUW?",
        why_title_en="WHY SUW?",
        why_description_tr="",
        why_description_en="",
    )

    existing = list(WhySuwItem.objects.order_by("sort_order", "id"))
    for index, (title_tr, title_en, description_tr, description_en) in enumerate(ITEMS):
        item = existing[index] if index < len(existing) else WhySuwItem()
        item.title_tr = title_tr
        item.title_en = title_en
        item.description_tr = description_tr
        item.description_en = description_en
        item.sort_order = index
        item.is_active = True
        item.save()

    if len(existing) > len(ITEMS):
        WhySuwItem.objects.filter(id__in=[item.id for item in existing[len(ITEMS):]]).update(is_active=False)


class Migration(migrations.Migration):
    dependencies = [("corporate", "0008_compact_about_copy")]
    operations = [migrations.RunPython(update_why_suw, migrations.RunPython.noop)]
