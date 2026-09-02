from django.db import migrations


def compact_seeded_copy(apps, schema_editor):
    Page = apps.get_model("corporate", "CorporatePage")
    Why = apps.get_model("corporate", "WhySuwItem")
    Experience = apps.get_model("corporate", "GroupExperienceItem")

    page = Page.objects.filter(pk=1).first()
    if page:
        changes = {
            "group_description_tr": (
                "SUW'ın arkasında, temelleri 1978 yılında İstanbul'da atılan ALK Group'un tekstil üretimi, ürün geliştirme ve uluslararası operasyon deneyimi bulunuyor. Yıllar içinde gelişen üretim altyapısı ve farklı pazarlardaki tecrübe, bugün SUW'ın kurumsal iş giyimi çözümlerinin temelini oluşturuyor.",
                "SUW, temelleri 1978'de İstanbul'da atılan ALK Group'un tekstil üretimi, ürün geliştirme ve uluslararası operasyon deneyiminden güç alır.",
            ),
            "group_description_en": (
                "Behind SUW stands ALK Group's experience in textile manufacturing, product development and international operations, founded in Istanbul in 1978. Its evolving production infrastructure and market expertise form the foundation of SUW's corporate workwear solutions today.",
                "SUW draws strength from ALK Group's textile manufacturing, product development and international operations experience, established in Istanbul in 1978.",
            ),
            "why_description_tr": (
                "Kurumsal kimlikten çalışma koşullarına kadar tüm ihtiyaçları birlikte değerlendirerek uzun süreli kullanım için iş giyimi çözümleri geliştiriyoruz.",
                "",
            ),
            "why_description_en": (
                "We develop workwear for long-term use by considering every need, from corporate identity to working conditions.",
                "",
            ),
            "experience_description_tr": (
                "SUW, ürün geliştirmeden üretime, özel uygulamalardan operasyon yönetimine kadar ALK Group'un tekstil alanındaki deneyiminden güç alır.",
                "SUW, ALK Group'un tekstil alanındaki deneyiminden güç alır.",
            ),
            "experience_description_en": (
                "From product development and manufacturing to custom applications and operations management, SUW draws strength from ALK Group's textile expertise.",
                "SUW draws strength from ALK Group's textile expertise.",
            ),
            "final_cta_description_tr": (
                "Üretim bilgisini, kurumsal kimliği ve günlük kullanım ihtiyaçlarını aynı ürün üzerinde buluşturuyoruz. Amacımız yalnızca iş kıyafeti sunmak değil, ekiplerinizi temsil eden sürdürülebilir bir giyim sistemi geliştirmek.",
                "Üretim bilgisini, kurumsal kimliği ve günlük kullanım ihtiyaçlarını buluşturuyoruz.",
            ),
            "final_cta_description_en": (
                "We bring manufacturing knowledge, corporate identity and everyday needs together in each product. Our aim is not simply to supply workwear, but to build a sustainable clothing system that represents your teams.",
                "We unite manufacturing knowledge, corporate identity and everyday needs.",
            ),
        }
        update_fields = []
        for field, (seeded_value, compact_value) in changes.items():
            if getattr(page, field) == seeded_value:
                setattr(page, field, compact_value)
                update_fields.append(field)
        if update_fields:
            page.save(update_fields=update_fields)

    why_descriptions = [
        ("Markanın renklerini, uygulamalarını ve görsel dilini ekiplerin kullandığı ürünlere taşırız.", "We carry the brand's colours, applications and visual language into the products used by its teams.", "Marka kimliğini ekiplerin kullandığı ürünlere taşırız.", "We carry brand identity into the products teams use."),
        ("Çalışma ortamı, hareket ihtiyacı ve günlük kullanım koşulları ürün seçiminde belirleyicidir.", "The working environment, movement requirements and daily conditions guide product selection.", "Çalışma ortamına ve günlük kullanım koşullarına göre çözümler geliştiririz.", "We develop solutions around working environments and daily use."),
        ("Ürün seçimi, uygulama, üretim ve kalite kontrol süreçlerini bütüncül şekilde ele alırız.", "We approach product selection, application, manufacturing and quality control as one integrated process.", "Üretimden kalite kontrole tüm süreci birlikte yönetiriz.", "We manage the full process from manufacturing to quality control."),
        ("Tek seferlik ürün tedariği yerine, kurumların devam eden ihtiyaçlarına cevap verebilecek iş birlikleri hedefleriz.", "Rather than one-off supply, we build partnerships that respond to organisations' ongoing needs.", "Devam eden kurumsal ihtiyaçlara uzun vadeli çözümler sunarız.", "We provide long-term solutions for ongoing corporate needs."),
    ]
    experience_descriptions = [
        ("Tekstil üretim deneyimi ve farklı ürün gruplarındaki teknik bilgi.", "Textile manufacturing experience and technical knowledge across diverse product groups.", "Tekstil üretimi ve teknik ürün bilgisi.", "Textile manufacturing and technical product expertise."),
        ("Kuruma, projeye ve kullanım alanına göre özelleştirilebilir çözümler.", "Solutions tailored to the organisation, project and intended use.", "Projeye göre özelleştirilebilir çözümler.", "Solutions tailored to each project."),
        ("Farklı ürün ihtiyaçlarını yönetebilen tedarik ve operasyon yapısı.", "A supply and operations structure capable of managing varied product requirements.", "Entegre tedarik ve operasyon yönetimi.", "Integrated supply and operations management."),
        ("Farklı pazarlarda edinilen üretim, satış ve lojistik tecrübesi.", "Manufacturing, sales and logistics expertise gained across different markets.", "Farklı pazarlardaki üretim ve lojistik tecrübesi.", "Manufacturing and logistics experience across different markets."),
    ]

    for position, (old_tr, old_en, description_tr, description_en) in enumerate(why_descriptions, 1):
        Why.objects.filter(sort_order=position, description_tr=old_tr, description_en=old_en).update(
            description_tr=description_tr, description_en=description_en,
        )
    for position, (old_tr, old_en, description_tr, description_en) in enumerate(experience_descriptions, 1):
        Experience.objects.filter(sort_order=position, description_tr=old_tr, description_en=old_en).update(
            description_tr=description_tr, description_en=description_en,
        )


class Migration(migrations.Migration):
    dependencies = [("corporate", "0007_seed_suw_about")]
    operations = [migrations.RunPython(compact_seeded_copy, migrations.RunPython.noop)]
