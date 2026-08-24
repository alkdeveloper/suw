# Data migration: ALK ana sayfa TR/EN metin içeriği (görseller ve dosya alanları değişmez).

from django.db import migrations


def seed_homepage_copy(apps, schema_editor):
    HomePage = apps.get_model("home", "HomePage")
    HomeAboutFeature = apps.get_model("home", "HomeAboutFeature")
    HomeTickerWord = apps.get_model("home", "HomeTickerWord")
    HomeActivity = apps.get_model("home", "HomeActivity")
    HomeOperationalItem = apps.get_model("home", "HomeOperationalItem")

    page = HomePage.objects.first()
    if not page:
        return

    hero_title_tr = (
        "Üreterek büyüyen bir yapı; güçlü üretim, güçlü portföy, güçlü operasyon."
    )
    hero_title_en = (
        "Growing through manufacturing; strong production, strong portfolio, strong operations."
    )
    hero_subtitle_tr = "1970'DEN BU YANA"
    hero_subtitle_en = "SINCE 1970"
    hero_description_tr = (
        "ALK Grubu, kurulduğu günden bu yana tekstil üretiminde uzmanlaşmış, üretimi ve inovasyonu "
        "merkezine alan bir yapı olarak sektörde güçlü bir konum edinmiştir. Yüksek üretim kapasitesi "
        "ile hızlı ve esnek operasyonları bir araya getiren şirket; spor giyimden günlük modaya, iş "
        "kıyafetlerinden promosyon ürünlerine geniş bir ürün yelpazesi sunar. Kendi markalarıyla "
        "büyümeyi sürdürürken, dünyanın önde gelen markaları için üretim ortağı olarak da faaliyet "
        "göstermektedir."
    )
    hero_description_en = (
        "Since its founding, ALK Group has specialized in textile manufacturing and built a strong "
        "position by placing production and innovation at its core. Combining high production capacity "
        "with fast, flexible operations, the company offers a broad product range from sportswear to "
        "everyday fashion and from workwear to promotional goods. While continuing to grow with its own "
        "brands, it also serves as a manufacturing partner for leading global brands."
    )

    brands_title_tr = "ALK GROUP"
    brands_title_en = "ALK GROUP"
    brands_description_tr = "Bizi biz yapan markalarımız"
    brands_description_en = "The brands that define us"

    activities_label_tr = "FAALİYET ALANLARIMIZ"
    activities_label_en = "OUR BUSINESS AREAS"
    activities_title_tr = "Üretimden dağıtıma entegre bir yapı"
    activities_title_en = "An integrated structure from manufacturing to distribution"
    activities_description_tr = ""
    activities_description_en = ""

    about_label_tr = "TARİHİMİZDE"
    about_label_en = "OUR HERITAGE"
    about_title_tr = "Rakamlarla Gücümüz"
    about_title_en = "Our Strength in Numbers"
    about_subtitle_tr = ""
    about_subtitle_en = ""
    about_short_description_tr = (
        "1970'den bu yana üretimden teknolojiye her yıl daha da güçleniyoruz."
    )
    about_short_description_en = (
        "Since 1970, we have grown stronger every year—from manufacturing to technology."
    )
    about_long_description_tr = ""
    about_long_description_en = ""

    video_title_tr = "Neler Yapıyoruz?"
    video_title_en = "What We Do"
    video_description_tr = (
        "ALK Grubu; tekstil üretiminden marka yönetimine, lojistikten dağıtıma kadar tüm süreçleri "
        "entegre bir yapı içinde yönetir. Avrupa merkezli üretim ve operasyon kabiliyetiyle küresel "
        "pazarlara hızlı ve güvenilir çözümler sunar."
    )
    video_description_en = (
        "ALK Group manages the entire journey from textile production to brand management, and from "
        "logistics to distribution within one integrated structure. With Europe-centered manufacturing "
        "and operational capability, it delivers fast and reliable solutions to global markets."
    )

    operational_label_tr = "ÇÖZÜMLERİMİZ"
    operational_label_en = "OUR SOLUTIONS"
    operational_title_tr = "Üretimden dağıtıma kadar uçtan uca yönetim kabiliyeti"
    operational_title_en = "End-to-end management from production to distribution"
    operational_description_tr = (
        "ALK Grubu; üretimden lojistiğe kadar tüm operasyonlarını merkezi bir yapı altında yürüterek "
        "süreklilik, verimlilik ve sürdürülebilir büyüme sağlar."
    )
    operational_description_en = (
        "ALK Group runs all operations from production to logistics under one central structure, "
        "ensuring continuity, efficiency, and sustainable growth."
    )

    news_section_title_tr = "Bizden Haberler"
    news_section_title_en = "News from Us"
    news_section_button_text_tr = "Tümünü Gör"
    news_section_button_text_en = "View All"

    meta_title_tr = "ALK Grubu | Ana Sayfa"
    meta_title_en = "ALK Group | Home"
    meta_description_tr = (
        "ALK Grubu: tekstil üretimi, markalar, lojistik ve küresel operasyonlarla büyüyen entegre yapı."
    )
    meta_description_en = (
        "ALK Group: an integrated textile group with manufacturing, brands, logistics, and global operations."
    )

    HomePage.objects.filter(pk=page.pk).update(
        hero_title=hero_title_tr,
        hero_title_tr=hero_title_tr,
        hero_title_en=hero_title_en,
        hero_subtitle=hero_subtitle_tr,
        hero_subtitle_tr=hero_subtitle_tr,
        hero_subtitle_en=hero_subtitle_en,
        hero_description=hero_description_tr,
        hero_description_tr=hero_description_tr,
        hero_description_en=hero_description_en,
        brands_title=brands_title_tr,
        brands_title_tr=brands_title_tr,
        brands_title_en=brands_title_en,
        brands_description=brands_description_tr,
        brands_description_tr=brands_description_tr,
        brands_description_en=brands_description_en,
        activities_label=activities_label_tr,
        activities_label_tr=activities_label_tr,
        activities_label_en=activities_label_en,
        activities_title=activities_title_tr,
        activities_title_tr=activities_title_tr,
        activities_title_en=activities_title_en,
        activities_description=activities_description_tr,
        activities_description_tr=activities_description_tr,
        activities_description_en=activities_description_en,
        about_label=about_label_tr,
        about_label_tr=about_label_tr,
        about_label_en=about_label_en,
        about_title=about_title_tr,
        about_title_tr=about_title_tr,
        about_title_en=about_title_en,
        about_subtitle=about_subtitle_tr,
        about_subtitle_tr=about_subtitle_tr,
        about_subtitle_en=about_subtitle_en,
        about_short_description=about_short_description_tr,
        about_short_description_tr=about_short_description_tr,
        about_short_description_en=about_short_description_en,
        about_long_description=about_long_description_tr,
        about_long_description_tr=about_long_description_tr,
        about_long_description_en=about_long_description_en,
        video_title=video_title_tr,
        video_title_tr=video_title_tr,
        video_title_en=video_title_en,
        video_description=video_description_tr,
        video_description_tr=video_description_tr,
        video_description_en=video_description_en,
        operational_label=operational_label_tr,
        operational_label_tr=operational_label_tr,
        operational_label_en=operational_label_en,
        operational_title=operational_title_tr,
        operational_title_tr=operational_title_tr,
        operational_title_en=operational_title_en,
        operational_description=operational_description_tr,
        operational_description_tr=operational_description_tr,
        operational_description_en=operational_description_en,
        news_section_title=news_section_title_tr,
        news_section_title_tr=news_section_title_tr,
        news_section_title_en=news_section_title_en,
        news_section_button_text=news_section_button_text_tr,
        news_section_button_text_tr=news_section_button_text_tr,
        news_section_button_text_en=news_section_button_text_en,
        meta_title=meta_title_tr,
        meta_title_tr=meta_title_tr,
        meta_title_en=meta_title_en,
        meta_description=meta_description_tr,
        meta_description_tr=meta_description_tr,
        meta_description_en=meta_description_en,
    )

    stats_tr = [
        ("Deneyim", "45+ Yıl"),
        ("Marka", "5+"),
        ("Operasyon", "3 Kıta"),
        ("Müşteri", "10000+"),
    ]
    stats_en = [
        ("Experience", "45+ Years"),
        ("Brands", "5+"),
        ("Operations", "3 Continents"),
        ("Customers", "10000+"),
    ]
    rows = list(HomeAboutFeature.objects.order_by("order"))
    for i, ((ktr, vtr), (ken, ven)) in enumerate(zip(stats_tr, stats_en)):
        if i < len(rows):
            HomeAboutFeature.objects.filter(pk=rows[i].pk).update(
                key=ktr,
                key_tr=ktr,
                key_en=ken,
                value=vtr,
                value_tr=vtr,
                value_en=ven,
            )
        else:
            HomeAboutFeature.objects.create(
                order=i,
                key=ktr,
                key_tr=ktr,
                key_en=ken,
                value=vtr,
                value_tr=vtr,
                value_en=ven,
            )

    HomeTickerWord.objects.all().delete()
    ticker_pairs = [
        ("Outdoor", "Outdoor"),
        ("Lifestyle", "Lifestyle"),
        ("Kids Fashion", "Kids Fashion"),
        ("Casual fashion", "Casual fashion"),
        ("Headwear", "Headwear"),
        ("Workwear", "Workwear"),
    ]
    for order, (tr, en) in enumerate(ticker_pairs):
        HomeTickerWord.objects.create(
            order=order,
            text=tr,
            text_tr=tr,
            text_en=en,
        )

    activity_tr = ["Tekstil", "Promosyon", "Lojistik"]
    activity_en = ["Textiles", "Promotional", "Logistics"]
    act_rows = list(HomeActivity.objects.order_by("order")[:3])
    for i, row in enumerate(act_rows):
        HomeActivity.objects.filter(pk=row.pk).update(
            title=activity_tr[i],
            title_tr=activity_tr[i],
            title_en=activity_en[i],
        )

    op_items_tr = [
        (
            "Global Vizyon",
            "ALK, markalarının uluslararası pazarlarda güçlü bir varlık göstermesi için sürdürülebilir büyüme sağlar.",
        ),
        (
            "Sektör Liderliği",
            "Kalite, inovasyon ve operasyonel mükemmellik odağında sektöründe öncü bir rol oynar.",
        ),
        (
            "Dağıtım & Lojistik",
            "Entegre dağıtım modeliyle ürünleri zamanında ve güvenilir şekilde son kullanıcıya ulaştırır.",
        ),
    ]
    op_items_en = [
        (
            "Global Vision",
            "ALK enables sustainable growth so its brands can build a strong presence in international markets.",
        ),
        (
            "Industry Leadership",
            "With a focus on quality, innovation, and operational excellence, it plays a leading role in its sector.",
        ),
        (
            "Distribution & Logistics",
            "Through an integrated distribution model, products reach end users on time and reliably.",
        ),
    ]
    op_rows = list(HomeOperationalItem.objects.order_by("order"))
    for i, ((tit_tr, desc_tr), (tit_en, desc_en)) in enumerate(zip(op_items_tr, op_items_en)):
        if i < len(op_rows):
            HomeOperationalItem.objects.filter(pk=op_rows[i].pk).update(
                title=tit_tr,
                title_tr=tit_tr,
                title_en=tit_en,
                description=desc_tr,
                description_tr=desc_tr,
                description_en=desc_en,
            )
        else:
            HomeOperationalItem.objects.create(
                order=i,
                icon="",
                title=tit_tr,
                title_tr=tit_tr,
                title_en=tit_en,
                description=desc_tr,
                description_tr=desc_tr,
                description_en=desc_en,
            )


def noop_reverse(apps, schema_editor):
    pass


class Migration(migrations.Migration):

    dependencies = [
        ("home", "0009_alter_homepage_news_section_button_text_en_and_more"),
    ]

    operations = [
        migrations.RunPython(seed_homepage_copy, noop_reverse),
    ]
