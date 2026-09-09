from django.db import migrations, models


ITEMS = [
    ("1978", "Eminönü'nde küçük bir şapka mağazasıyla başlayan yolculuk, ALK Group'un tekstil alanındaki ilk adımını oluşturdu.", "The journey began with a small hat shop in Eminönü, marking ALK Group's first step into the textile industry."),
    ("1993", "Büyük ölçekli üretim yatırımlarıyla tekstil ve giyim aksesuarları alanındaki üretim kapasitesi önemli ölçüde büyüdü.", "Major manufacturing investments significantly expanded production capacity in textiles and apparel accessories."),
    ("2000", "ALKAN Tekstil Promosyonu ile promosyon tekstili alanına giriş yapıldı. Kurumsal firmalar, organizasyonlar ve farklı sektörlerin tekstil ihtiyaçlarına yönelik üretim ve tedarik yapısı geliştirildi.", "ALKAN Tekstil Promosyonu marked the group's entry into promotional textiles, establishing a production and sourcing structure for corporate clients, organizations and diverse industries."),
    ("2010", "Tedarik yapısını güçlendirmek ve Asya pazarındaki gelişmeleri yakından takip etmek amacıyla Çin'de tedarik ofisi açıldı.", "A sourcing office was opened in China to strengthen the supply network and stay closely connected to developments across Asian markets."),
    ("2012", "ALK bünyesinde Nordbron markası hayata geçirildi ve grubun kendi markalarıyla uluslararası pazarlardaki büyümesi güçlendirildi.", "Nordbron was launched within ALK, accelerating the group's international growth through its own brands."),
    ("2015", "Almanya merkezli yapılanma ile ALK Group'un Avrupa operasyonları, lojistik ve uluslararası ticaret altyapısı güçlendirildi.", "A Germany-based organization strengthened ALK Group's European operations, logistics capabilities and international trade infrastructure."),
    ("2021", "Personel kıyafetleri ve profesyonel iş giyimi alanındaki deneyim SUW markası altında yeni bir yapıya dönüştürüldü. Kalite, işlevsellik ve zamanında teslimat yaklaşımı SUW'un temelini oluşturdu.", "Expertise in staff uniforms and professional workwear evolved into a new structure under the SUW brand, founded on quality, functionality and reliable on-time delivery."),
]


def seed_chronology(apps, schema_editor):
    CorporatePage = apps.get_model("corporate", "CorporatePage")
    CorporateHistoryItem = apps.get_model("corporate", "CorporateHistoryItem")

    CorporatePage.objects.update(
        timeline_title_tr="1978'DEN BUGÜNE.",
        timeline_title_en="FROM 1978 TO TODAY.",
        timeline_description_tr="1978'de İstanbul'da başlayan yolculuğumuz, üretim, ürün geliştirme, tedarik ve uluslararası operasyon alanlarında büyüyerek bugün SUW'un arkasındaki deneyimi oluşturuyor.",
        timeline_description_en="Our journey began in Istanbul in 1978 and grew across manufacturing, product development, sourcing and international operations, creating the experience behind SUW today.",
    )

    chronology_ids = []
    for sort_order, (year, description_tr, description_en) in enumerate(ITEMS):
        item, _ = CorporateHistoryItem.objects.update_or_create(
            year=year,
            defaults={
                "year_tr": year,
                "year_en": year,
                "description": description_tr,
                "description_tr": description_tr,
                "description_en": description_en,
                "order": sort_order,
                "sort_order": sort_order,
                "is_active": True,
            },
        )
        chronology_ids.append(item.id)

    CorporateHistoryItem.objects.exclude(id__in=chronology_ids).update(is_active=False)


class Migration(migrations.Migration):
    dependencies = [("corporate", "0010_corporatevideosettings")]
    operations = [
        migrations.AddField(
            model_name="corporatepage",
            name="timeline_description_en",
            field=models.TextField(blank=True),
        ),
        migrations.AddField(
            model_name="corporatepage",
            name="timeline_description_tr",
            field=models.TextField(blank=True),
        ),
        migrations.RunPython(seed_chronology, migrations.RunPython.noop),
    ]
