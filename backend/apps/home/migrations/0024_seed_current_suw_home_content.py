from django.db import migrations


def seed_current_home_content(apps, schema_editor):
    HomePage = apps.get_model("home", "HomePage")
    page, _ = HomePage.objects.get_or_create(pk=1)
    values = {
        "hero_title_tr": "İŞ İÇİN TASARLANDI.",
        "hero_title_en": "BUILT FOR WORK.",
        "hero_description_tr": "Performans, dayanıklılık ve işlevsellik için geliştirilen profesyonel iş giyimi çözümleri.",
        "hero_description_en": "Professional workwear solutions developed for performance, durability and functionality.",
        "product_categories_title_tr": "HER İŞ İÇİN TASARLANDI.",
        "product_categories_title_en": "BUILT FOR EVERY JOB.",
        "product_categories_description_tr": "Performans, koruma ve günlük kullanım ihtiyaçları için geliştirilen profesyonel iş giyimi çözümlerini keşfedin.",
        "product_categories_description_en": "Explore professional workwear developed around performance, protection and everyday usability.",
        "work_essentials_title_tr": "İŞ GİYİMİNİ YAKINDAN KEŞFEDİN.",
        "work_essentials_title_en": "EXPLORE WORKWEAR IN DETAIL.",
        "work_essentials_description_tr": "Farklı çalışma alanları için geliştirdiğimiz iş giyimi ve tamamlayıcı ürünlerden seçilmiş uygulamaları keşfedin.",
        "work_essentials_description_en": "Discover selected workwear and complementary products developed for different working environments.",
        "work_essentials_cta_text_tr": "ÜRÜNLERİ KEŞFET",
        "work_essentials_cta_text_en": "EXPLORE PRODUCTS",
        "work_essentials_cta_link": "/products",
        "production_insights_title_tr": "İYİ İŞ GİYİMİ DETAYLARDA BAŞLAR.",
        "production_insights_title_en": "GREAT WORKWEAR STARTS WITH THE DETAILS.",
        "production_insights_description_tr": "Doğru kumaştan uygulama tekniğine, kalite kontrolden sevkiyata kadar her aşama ürünün performansını belirler. SUW üretim sürecinin temel bileşenlerini keşfedin.",
        "production_insights_description_en": "From fabric selection and application techniques to quality control and delivery, every stage influences product performance. Explore the key components of the SUW production process.",
        "corporate_workwear_title_tr": "KIYAFETLERİNİZ, KİMLİĞİNİZ.",
        "corporate_workwear_title_en": "YOUR WORKWEAR, YOUR IDENTITY.",
        "corporate_workwear_description_tr": "Kurumsal kimliği sahaya taşıyan, ekiplerin kullanım ihtiyaçlarına göre geliştirilen personel kıyafetleri ve promosyon tekstil çözümleri sunuyoruz.",
        "corporate_workwear_description_en": "We provide staff apparel and promotional textile solutions that bring corporate identity into the workplace and respond to the practical needs of teams.",
    }
    changed = []
    for field, value in values.items():
        if not getattr(page, field, None):
            setattr(page, field, value)
            changed.append(field)
    if changed:
        page.save(update_fields=changed)


class Migration(migrations.Migration):
    dependencies = [("home", "0023_seed_home_process_steps")]
    operations = [migrations.RunPython(seed_current_home_content, migrations.RunPython.noop)]
