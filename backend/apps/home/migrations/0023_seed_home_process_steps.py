from django.db import migrations


STEPS = (
    ("ÜRÜN SEÇİMİ", "PRODUCT SELECTION", "İhtiyaca, kullanım alanına ve çalışma koşullarına uygun ürün grubu belirlenir.", "The appropriate product range is defined according to requirements, area of use and working conditions."),
    ("TASARIM", "DESIGN", "Model, renk, kumaş, logo uygulamaları ve kurumsal detaylar proje ihtiyaçlarına göre şekillendirilir.", "Styles, colors, fabrics, logo applications and corporate details are shaped around the needs of the project."),
    ("TEKLİF & SİPARİŞ", "QUOTATION & ORDER", "Ürün özellikleri, adetler ve uygulamalar netleştirilerek teklif hazırlanır ve sipariş onaylanır.", "Product specifications, quantities and applications are finalized before the quotation is prepared and the order approved."),
    ("ÜRETİM", "PRODUCTION", "Onaylanan ürünler planlanan teknik detaylara ve üretim programına göre hazırlanır.", "Approved products are prepared according to the agreed technical details and production schedule."),
    ("KALİTE KONTROL", "QUALITY CONTROL", "Ürünler ölçü, dikiş, uygulama ve genel kalite kriterlerine göre kontrol edilir.", "Products are inspected against sizing, stitching, application and overall quality criteria."),
    ("TESLİMAT", "DELIVERY", "Kontrolleri tamamlanan ürünler paketlenir ve belirlenen teslimat planına göre sevk edilir.", "Once inspections are complete, products are packed and dispatched according to the agreed delivery plan."),
)


def seed_steps(apps, schema_editor):
    HomePage = apps.get_model("home", "HomePage")
    HomeProcessStep = apps.get_model("home", "HomeProcessStep")
    if HomeProcessStep.objects.exists():
        return
    page = HomePage.objects.first()
    if not page:
        page = HomePage.objects.create()
    HomeProcessStep.objects.bulk_create([
        HomeProcessStep(home_page=page, title_tr=tr_title, title_en=en_title, description_tr=tr_description, description_en=en_description, sort_order=index, is_active=True)
        for index, (tr_title, en_title, tr_description, en_description) in enumerate(STEPS, start=1)
    ])


class Migration(migrations.Migration):
    dependencies = [("home", "0022_homeprocesssettings_homepage_process_description_and_more")]
    operations = [migrations.RunPython(seed_steps, migrations.RunPython.noop)]
