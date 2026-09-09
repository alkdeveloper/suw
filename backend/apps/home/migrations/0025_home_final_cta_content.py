from django.db import migrations, models


def seed_final_cta(apps, schema_editor):
    HomePage = apps.get_model("home", "HomePage")
    page, _ = HomePage.objects.get_or_create(pk=1)
    values = {
        "final_cta_title_tr": "İŞ GİYİMİNİZİ\nBİRLİKTE GELİŞTİRELİM.", "final_cta_title_en": "LET'S BUILD\nYOUR WORKWEAR.",
        "final_cta_description_tr": "Ekibinizi, çalışma ortamınızı ve ihtiyaçlarınızı bize anlatın. İşletmenize uygun doğru iş giyim çözümünü birlikte oluşturalım.",
        "final_cta_description_en": "Tell us about your team, working environment and requirements. We'll help build the right workwear solution around your business.",
        "final_cta_text_tr": "PROJE BAŞLAT", "final_cta_text_en": "START A PROJECT",
        "final_cta_bottom_label_tr": "PROFESYONEL İŞ GİYİMİ", "final_cta_bottom_label_en": "PROFESSIONAL WORKWEAR", "final_cta_link": "/contact",
    }
    for field, value in values.items():
        if not getattr(page, field, None): setattr(page, field, value)
    page.save()


class Migration(migrations.Migration):
    dependencies = [("home", "0024_seed_current_suw_home_content")]
    operations = [
        migrations.AddField(model_name="homepage", name="final_cta_title_tr", field=models.CharField(blank=True, max_length=240)), migrations.AddField(model_name="homepage", name="final_cta_title_en", field=models.CharField(blank=True, max_length=240)),
        migrations.AddField(model_name="homepage", name="final_cta_description_tr", field=models.TextField(blank=True)), migrations.AddField(model_name="homepage", name="final_cta_description_en", field=models.TextField(blank=True)),
        migrations.AddField(model_name="homepage", name="final_cta_text_tr", field=models.CharField(blank=True, max_length=100)), migrations.AddField(model_name="homepage", name="final_cta_text_en", field=models.CharField(blank=True, max_length=100)),
        migrations.AddField(model_name="homepage", name="final_cta_bottom_label_tr", field=models.CharField(blank=True, max_length=120)), migrations.AddField(model_name="homepage", name="final_cta_bottom_label_en", field=models.CharField(blank=True, max_length=120)),
        migrations.AddField(model_name="homepage", name="final_cta_link", field=models.CharField(blank=True, default="/contact", max_length=300)), migrations.RunPython(seed_final_cta, migrations.RunPython.noop),
    ]
