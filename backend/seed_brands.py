"""
Brands seed scripti.
Kullanım: docker compose exec backend python seed_brands.py
"""
import os
import django

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "config.settings.development")
django.setup()

from apps.brands.models import (
    BrandsPage,
    Brand,
    GroupCompany,
    BrandMilestone,
    GlobalOperationLocation,
    AkalPage,
    AlkanPage,
    AkalGmbhPage,
    SuwPage,
)


# ── Markalar sayfası (listeleme) ─────────────────────────────────
page, _ = BrandsPage.objects.get_or_create(pk=1)

page.hero_title_tr = "Şirketlerimiz"
page.hero_title_en = "Our Companies"
page.hero_subtitle_tr = "Farklı hedef kitlelere hitap eden güçlü markalar…"
page.hero_subtitle_en = "Strong brands that appeal to different target audiences…"

page.intro_label_tr = "ALK GROUP"
page.intro_label_en = "ALK GROUP"
page.intro_text_tr = (
    "ALK Group, girişimlerine 1978 yılında İstanbul'da bir aile şirketi olarak kurduğu "
    "AKAL Tekstil ile başlamıştır. İş ahlakı ve güvenilirliği sayesinde sektörde saygın "
    "bir konuma ulaşmış, 1993 yılında büyük ölçekli üretim yatırımlarına yönelerek "
    "uluslararası düzeyde on binlerce tüketiciye ulaşmasını sağlayan önemli bir atılım "
    "gerçekleştirmiştir."
)
page.intro_text_en = (
    "ALK Group began its ventures in 1978 in Istanbul as a family company with the "
    "founding of AKAL Textile. Earning a respected position through business ethics "
    "and reliability, it made a significant leap in 1993 by investing in large-scale "
    "production to reach tens of thousands of consumers internationally."
)

page.ticker_description_tr = (
    "Tekstil aksesuarları alanında takım ve eşleştirmeli ürün imalatı yapan ilk "
    "firmalardan biri olarak tanınan AKAL, özgün markaları Suyutti, Nordbron, SYT, "
    "Kitti ve Kepp ile hem yurt içinde hem de yurt dışında geniş bir müşteri "
    "kitlesine ulaşmıştır."
)
page.ticker_description_en = (
    "Recognized as one of the first companies manufacturing matched and set-based "
    "textile accessories, AKAL has reached a wide customer base both domestically "
    "and internationally with its original brands Suyutti, Nordbron, SYT, Kitti and "
    "Kepp."
)

page.milestones_title_tr = "Yıllar İçinde Büyüyen Bir Hikâye"
page.milestones_title_en = "A Story That Grows Over The Years"
page.milestones_button_text_tr = "Markalarımızı Keşfedin"
page.milestones_button_text_en = "Discover Our Brands"
page.milestones_button_url = "/tr/brands"
page.milestones_year_suffix_tr = "yılı"
page.milestones_year_suffix_en = ""

page.companies_title_tr = "Grup Şirketlerimiz"
page.companies_title_en = "Our Group Companies"
page.companies_description_tr = (
    "ALK Group, bünyesindeki tüm şirketlerle yatırımlarına ve büyüme yolculuğuna "
    "devam etmektedir."
)
page.companies_description_en = (
    "ALK Group continues its investments and growth journey with all the companies "
    "within its structure."
)

page.global_title_tr = "Global Operasyon Ağı"
page.global_title_en = "Our Global Operations Network"
page.global_description_tr = (
    "Türkiye merkezli operasyon yapımız, Avrupa ve Asya tedarik ağıyla global "
    "ölçekte faaliyet göstermektedir."
)
page.global_description_en = (
    "Our Turkey-based operations structure operates on a global scale through its "
    "European and Asian supply network."
)
page.countries_text_tr = (
    "İngiltere, Almanya, Yunanistan, İsviçre, Hollanda, Fransa, Belçika, İspanya, "
    "Avusturya, Bulgaristan, Polonya, Makedonya, Sloveyna, Sırbistan, Romanya, "
    "Kuzey Kıbrıs Türk Cumhuriyeti, Ukrayna, Filistin ve Cezayir gibi daha pek çok "
    "ülkeye doğrudan ya da temsilcilikleri aracılığıyla ihracat yapmaktadır."
)
page.countries_text_en = (
    "We export directly or through representatives to many countries including the "
    "UK, Germany, Greece, Switzerland, the Netherlands, France, Belgium, Spain, "
    "Austria, Bulgaria, Poland, Macedonia, Slovenia, Serbia, Romania, Northern Cyprus, "
    "Ukraine, Palestine and Algeria."
)

page.meta_title_tr = "ALK Grubu | Markalarımız"
page.meta_title_en = "ALK Group | Our Brands"
page.meta_description_tr = (
    "ALK Grubu markaları: Nordbron, Kitti, SUW, Suyutti, Kepp ve grup şirketleri."
)
page.meta_description_en = (
    "ALK Group brands: Nordbron, Kitti, SUW, Suyutti, Kepp and group companies."
)
page.save()
print("✓ BrandsPage güncellendi")


# ── Marka kartları (external URL) ────────────────────────────────
brands_seed = [
    {
        "name": "Nordbron",
        "slug": "nordbron",
        "subtitle_tr": "Outdoor & iş güvenliği",
        "subtitle_en": "Outdoor & workwear",
        "description_tr": (
            "Nordbron, kuzey ikliminden ilham alan outdoor ve iş güvenliği ürünleri ile "
            "profesyonellerin ve doğa tutkunlarının yanında yer alır."
        ),
        "description_en": (
            "Inspired by the Nordic climate, Nordbron stands alongside professionals and "
            "outdoor enthusiasts with its outdoor and workwear products."
        ),
        "url": "https://nordbron.com",
        "cta_label_tr": "Markayı Keşfet",
        "cta_label_en": "Discover Brand",
    },
    {
        "name": "Kitti",
        "slug": "kitti",
        "subtitle_tr": "Çocuk giyim",
        "subtitle_en": "Kidswear",
        "description_tr": (
            "Kitti, çocukların rahatlığını ve özgürce hareket etmesini ön plana alan, "
            "yenilikçi tasarımlarıyla ailelerin tercihi olan çocuk giyim markasıdır."
        ),
        "description_en": (
            "Kitti is a kidswear brand that prioritizes comfort and freedom of movement, "
            "becoming a family favorite with its innovative designs."
        ),
        "url": "https://kitti.com.tr",
        "cta_label_tr": "Markayı Keşfet",
        "cta_label_en": "Discover Brand",
    },
    {
        "name": "SUW",
        "slug": "suw",
        "subtitle_tr": "İş güvenliği & workwear",
        "subtitle_en": "Safety & workwear",
        "description_tr": (
            "SUW; iş güvenliği giyimi, koruyucu ekipman ve workwear alanında yüksek kalite "
            "ve sertifikalı ürünleriyle profesyonellerin çözüm ortağıdır."
        ),
        "description_en": (
            "SUW is a solution partner for professionals in safety clothing, protective "
            "equipment and workwear with its high-quality, certified product range."
        ),
        "url": "https://suw.com.tr",
        "cta_label_tr": "Markayı Keşfet",
        "cta_label_en": "Discover Brand",
    },
    {
        "name": "Suyutti",
        "slug": "suyutti",
        "subtitle_tr": "Ev tekstili",
        "subtitle_en": "Home textiles",
        "description_tr": (
            "Suyutti, kaliteli kumaşlar ve modern tasarımlarla evlere konfor ve şıklık "
            "taşıyan ev tekstili markasıdır."
        ),
        "description_en": (
            "Suyutti is a home textile brand that brings comfort and elegance to homes "
            "with quality fabrics and modern designs."
        ),
        "url": "https://suyutti.com",
        "cta_label_tr": "Markayı Keşfet",
        "cta_label_en": "Discover Brand",
    },
    {
        "name": "Kepp",
        "slug": "kepp",
        "subtitle_tr": "Günlük giyim",
        "subtitle_en": "Everyday wear",
        "description_tr": (
            "Kepp, güncel trendleri erişilebilir fiyatlarla buluşturan, genç ve dinamik "
            "bir günlük giyim markasıdır."
        ),
        "description_en": (
            "Kepp is a young and dynamic everyday wear brand that brings current trends "
            "to accessible prices."
        ),
        "url": "https://kepp.com.tr",
        "cta_label_tr": "Markayı Keşfet",
        "cta_label_en": "Discover Brand",
    },
]

for order, data in enumerate(brands_seed):
    b, _ = Brand.objects.update_or_create(
        slug=data["slug"],
        defaults={
            "name": data["name"],
            "order": order,
            "url": data["url"],
            "subtitle_tr": data["subtitle_tr"],
            "subtitle_en": data["subtitle_en"],
            "description_tr": data["description_tr"],
            "description_en": data["description_en"],
            "cta_label_tr": data["cta_label_tr"],
            "cta_label_en": data["cta_label_en"],
            "is_active": True,
        },
    )
print(f"✓ {len(brands_seed)} marka güncellendi")


# ── Grup şirketleri (4 detay sayfasına yönlenir) ─────────────────
companies_seed = [
    {
        "slug": "akal",
        "name": "AKAL",
        "detail_key": "akal",
        "founded_year": 1978,
        "description_tr": (
            "1978’de kurulan grubun üretim şirketi. Tekstil aksesuarları ve moda "
            "ürünlerinde tasarım ve üretim faaliyetleri yürütür."
        ),
        "description_en": (
            "The group's production company, founded in 1978. It runs design and "
            "manufacturing activities in textile accessories and fashion products."
        ),
    },
    {
        "slug": "alkan-promosyon",
        "name": "ALKAN",
        "detail_key": "alkan-promosyon",
        "founded_year": 2000,
        "description_tr": (
            "ALKAN Promosyon Reklamcılık ve Tekstil San.Tic.Ltd.Şti., 2000 yılında "
            "İstanbul’da ALK GROUP çatısı altında promosyon sektöründe hizmet vermek "
            "üzere ticari hayatına başlamıştır."
        ),
        "description_en": (
            "ALKAN Promotion Advertising and Textile Co. Ltd. started its commercial "
            "life in 2000 in Istanbul under the ALK GROUP umbrella to provide services "
            "in the promotional sector."
        ),
    },
    {
        "slug": "akal-gmbh",
        "name": "AKAL GmbH",
        "detail_key": "akal-gmbh",
        "founded_year": 2015,
        "description_tr": (
            "AKAL GmbH, ALK Group’un özellikle Nordbron markası odağında Avrupa "
            "operasyonlarının finans ve lojistik yönetimini üstlenmek ve bu alanları "
            "güçlendirmek amacıyla Almanya merkezli olarak kurulmuştur."
        ),
        "description_en": (
            "AKAL GmbH was founded in Germany to undertake the finance and logistics "
            "management of ALK Group’s European operations, particularly focused on the "
            "Nordbron brand, and to strengthen these areas."
        ),
    },
    {
        "slug": "suw",
        "name": "SUW",
        "detail_key": "suw",
        "founded_year": 2021,
        "description_tr": (
            "İş güvenliği ve workwear kategorisinde profesyonel ürünler üretir."
        ),
        "description_en": (
            "Produces professional products in the occupational safety and workwear "
            "category."
        ),
    },
]

for order, data in enumerate(companies_seed):
    GroupCompany.objects.update_or_create(
        slug=data["slug"],
        defaults={
            "name": data["name"],
            "order": order,
            "detail_key": data["detail_key"],
            "founded_year": data["founded_year"],
            "description_tr": data["description_tr"],
            "description_en": data["description_en"],
            "is_active": True,
        },
    )
print(f"✓ {len(companies_seed)} grup şirketi güncellendi")


# ── Milestones (tarihçe) ─────────────────────────────────────────
milestones_seed = [
    (
        "2000",
        (
            "İstanbul’da tekstil promosyon sektöründe faaliyet göstermek üzere Alkan "
            "Tekstil Promosyon’u kuran ALK Group; özel sektör, kamu kurumları, sivil "
            "toplum kuruluşları, festivaller ve kitlesel organizasyonlara yönelik "
            "şapka, tişört, mont, çanta, iş elbiseleri gibi ürün taleplerini zamanında "
            "ve eksiksiz karşılayarak sektörde kendine saygın bir yer edinmiştir."
        ),
        (
            "Founding Alkan Textile Promotion in Istanbul to operate in the textile "
            "promotion sector, ALK Group gained a respected place in the industry by "
            "timely and fully responding to product demands — caps, t-shirts, coats, "
            "bags, workwear — from the private sector, public institutions, NGOs, "
            "festivals and mass organizations."
        ),
    ),
    (
        "2010",
        (
            "Asya pazarındaki gelişmeleri yakından takip etmek amacıyla Çin’de bir "
            "tedarik ofisi açan ALK Group, buradan doğrudan ihracat da "
            "gerçekleştirmektedir."
        ),
        (
            "Opening a sourcing office in China to closely follow developments in the "
            "Asian market, ALK Group also carries out direct exports from there."
        ),
    ),
    (
        "2012",
        (
            "AKAL bünyesinde oluşturulan Nordbron markasını Avrupa pazarında "
            "konumlandırmak amacıyla, 2015 yılında Almanya merkezli AKAL GmbH "
            "kurulmuştur. Bu şirket, özellikle Nordbron olmak üzere ALK Group’un "
            "Avrupa operasyonlarının finans ve lojistik yönetimini üstlenmiş ve bu "
            "pazarda hızlı erişimi mümkün kılmıştır."
        ),
        (
            "To position the Nordbron brand — created within AKAL — in the European "
            "market, Germany-based AKAL GmbH was founded in 2015. This company has "
            "undertaken the finance and logistics management of ALK Group’s European "
            "operations, particularly Nordbron, enabling fast access to this market."
        ),
    ),
]
BrandMilestone.objects.all().delete()
for order, (year, tr, en) in enumerate(milestones_seed):
    m = BrandMilestone.objects.create(year=year, order=order, description=tr)
    m.description_tr = tr
    m.description_en = en
    m.save()
print(f"✓ {len(milestones_seed)} milestone eklendi")


# ── Global operasyon lokasyonları ────────────────────────────────
locations_seed = [
    ("Türkiye", 38.9637, 35.2433),
    ("Almanya", 51.1657, 10.4515),
    ("Fransa", 46.6034, 1.8883),
    ("İngiltere", 55.3781, -3.4360),
    ("İtalya", 41.8719, 12.5674),
    ("İspanya", 40.4637, -3.7492),
    ("Hollanda", 52.1326, 5.2913),
    ("Rusya", 61.5240, 105.3188),
    ("Ukrayna", 48.3794, 31.1656),
    ("Kazakistan", 48.0196, 66.9237),
    ("ABD", 37.0902, -95.7129),
    ("Kanada", 56.1304, -106.3468),
]
GlobalOperationLocation.objects.all().delete()
for page_scope in [
    GlobalOperationLocation.PAGE_SCOPE_BRANDS,
    GlobalOperationLocation.PAGE_SCOPE_COMPANIES,
]:
    for order, (name, lat, lng) in enumerate(locations_seed):
        GlobalOperationLocation.objects.create(
            page_scope=page_scope,
            country_name=name,
            latitude=lat,
            longitude=lng,
            order=order,
        )
print(f"✓ {len(locations_seed) * 2} lokasyon eklendi")


# ── AKAL detay sayfası ───────────────────────────────────────────
akal, _ = AkalPage.objects.get_or_create(pk=1)
akal.hero_title_tr = "Şirketlerimiz"
akal.hero_title_en = "Our Companies"
akal.subtitle_tr = "AKAL TEKSTİL"
akal.subtitle_en = "AKAL TEXTILE"
akal.description_tr = (
    "Tekstil sektöründeki serüvenine bir aile girişimi olarak 1978 yılında İstanbul’da "
    "başlayan AKAL, iş ahlakı ve güvenilirliği ile kendine saygın bir konum "
    "edinmiş; 1993 yılında ise büyük ölçekli üretim yatırımları ile, bugün "
    "uluslararası düzeyde on binlerce tüketiciye ulaşmasını sağlayan büyük bir "
    "atılım gerçekleştirmiştir. Tekstil aksesuarları alanında, takım ve "
    "eşleştirmeli ürünler imalatı yapan ilk firmalardan biri olarak tanınan AKAL; "
    "aralarında Türkiye’nin en büyük spor kulüplerinin ve dünyaca ünlü moda "
    "devlerinin de bulunduğu birçok markanın üreticisi olarak çalışmıştır."
)
akal.description_en = (
    "Starting its journey in the textile industry as a family enterprise in Istanbul "
    "in 1978, AKAL earned a respected position with its business ethics and "
    "reliability. In 1993, it made a major breakthrough with large-scale production "
    "investments, today reaching tens of thousands of consumers internationally. "
    "Recognized as one of the first companies manufacturing matched and set-based "
    "textile accessories, AKAL has produced for many brands — including Turkey’s "
    "largest sports clubs and world-famous fashion giants."
)
akal.cta_label_tr = "İletişime Geç"
akal.cta_label_en = "Contact Us"
akal.cta_url = "/tr/contact"
akal.contact_name = "AKAL Tekstil"
akal.contact_email = "info@akal.com.tr"
akal.contact_website = "https://akal.com.tr"

akal.sub_brands_title_tr = "AKAL Çatısı Altındaki Markalar"
akal.sub_brands_title_en = "Brands Under the AKAL Umbrella"
akal.bottom_paragraph_tr = (
    "Kendi özgün markaları SUYUTTİ, SYT, KİTTİ ve KEPP ile hem iç hem de dış "
    "piyasalarda on binlerce memnun müşteri edinmiştir. Bütün markalarında "
    "farklılaşma bilinci ile hareket eden AKAL, seçkin ekibini yeni fikirlere açık "
    "tasarımcılardan seçer ve onların özenli çalışmaları sonucunda günün "
    "trendlerine uygun, estetik, kullanışlı, kaliteli ve güvenli bir ürün gamı "
    "sunar."
)
akal.bottom_paragraph_en = (
    "With its original brands SUYUTTI, SYT, KITTI and KEPP, AKAL has gained tens of "
    "thousands of satisfied customers both domestically and abroad. Acting with a "
    "sense of differentiation across all its brands, AKAL selects its distinguished "
    "team from designers open to new ideas, and through their dedicated work offers "
    "a product range that is on-trend, aesthetic, practical, high-quality and safe."
)

akal.global_block_title_tr = "Global Operasyon Ağı"
akal.global_block_title_en = "Global Operations Network"
akal.global_block_description_tr = (
    "Türkiye merkezli operasyon yapımız, Avrupa ve Asya tedarik ağıyla global "
    "ölçekte faaliyet göstermektedir."
)
akal.global_block_description_en = (
    "Our Turkey-based operations structure operates on a global scale through its "
    "European and Asian supply network."
)

akal.meta_title_tr = "AKAL Tekstil | ALK Grubu"
akal.meta_title_en = "AKAL Textile | ALK Group"
akal.meta_description_tr = (
    "AKAL Tekstil; grubun çekirdek üretim şirketi, 40+ ülkeye ihracat."
)
akal.meta_description_en = (
    "AKAL Textile: the group's core production company, exporting to 40+ countries."
)
akal.save()

# Alt markaları ekle
akal.sub_brands.clear()
for slug in ["nordbron", "kitti", "suyutti", "kepp"]:
    b = Brand.objects.filter(slug=slug).first()
    if b:
        akal.sub_brands.add(b)
print("✓ AkalPage güncellendi")


# ── ALKAN detay sayfası ──────────────────────────────────────────
alkan, _ = AlkanPage.objects.get_or_create(pk=1)
alkan.hero_title_tr = "Şirketlerimiz"
alkan.hero_title_en = "Our Companies"
alkan.subtitle_tr = "ALKAN PROMOSYON"
alkan.subtitle_en = "ALKAN PROMOTION"
alkan.description_tr = (
    "ALKAN Promosyon Reklamcılık ve Tekstil San.Tic.Ltd.Şti., 2000 yılında "
    "İstanbul’da ALK GROUP çatısı altında promosyon sektöründe hizmet vermek üzere "
    "ticari hayatına başlamıştır.\n\n"
    "Sektöre hızlı bir giriş yapan ALKAN Promosyon, bu süre zarfında hizmet verdiği "
    "özel sektör, resmi kurum, Sivil Toplum Kuruluşları, festivaller ve kitlesel "
    "organizasyonlardan gelen talepleri tam zamanında ve eksiksiz olarak "
    "cevaplandırarak kendine saygın bir yer edinmeyi başarmıştır.\n\n"
    "Ürün kalitesi ve müşteri memnuniyeti ilkesinden taviz vermeyen ALKAN Promosyon; "
    "Türkiye’de tekstil promosyon sektöründe dürüst, güvenilir ve verdiği söze "
    "riayet etmek gibi ahlaki değerlerin, içerisinde bulunduğu sektörü yansıtan ve "
    "gelişmesi için çaba sarf eden öncü firmalardan olmasının haklı gururunu "
    "yaşamaktadır."
)
alkan.description_en = (
    "ALKAN Promotion Advertising and Textile Co. Ltd. started its commercial life in "
    "2000 in Istanbul under the ALK GROUP umbrella, to serve the promotional "
    "sector.\n\n"
    "With its rapid entry into the sector, ALKAN Promotion has earned a respected "
    "place by responding in a timely and complete manner to demands from the private "
    "sector, public institutions, NGOs, festivals, and mass organizations.\n\n"
    "Never compromising on product quality and customer satisfaction, ALKAN Promotion "
    "is rightfully proud of being one of the pioneering firms in Turkey’s textile "
    "promotion sector that embodies honesty, reliability, and keeping one’s word, "
    "while reflecting and striving to improve its industry."
)
alkan.cta_label_tr = "Markayı Keşfet"
alkan.cta_label_en = "Discover Brand"
alkan.cta_url = "https://alkansapka.com"
alkan.contact_name = "Mücahit Bayrak"
alkan.contact_email = "alkan@alk.com.tr"
alkan.contact_website = "https://alkansapka.com"
alkan.bottom_paragraph_tr = (
    "Ürün konseptinde sadece Tekstil Promosyon ürünlerine yönelerek konusunda "
    "ihtisaslaşmayı sağlayan ender firmalardan biri olmak ALKAN Promosyon’un her "
    "zaman asli ve tek işi olmuştur.\n\n"
    "ALKAN Promosyon’un yerli promosyon imalatındaki başarısı birçok ülkeye "
    "ihracatın önünü açmış ve bizlerin ülke ekonomisine katkıda bulunan bir firma "
    "konumunda olmasını sağlamıştır."
)
alkan.bottom_paragraph_en = (
    "Focusing solely on Textile Promotion products, being one of the rare firms that "
    "achieved specialization in this field has always been ALKAN Promotion’s sole "
    "and primary business.\n\n"
    "ALKAN Promotion’s success in domestic promotional manufacturing has paved the "
    "way for exports to many countries, positioning us as a firm contributing to the "
    "national economy."
)
alkan.meta_title_tr = "ALKAN Promosyon | ALK Grubu"
alkan.meta_title_en = "ALKAN Promotion | ALK Group"
alkan.meta_description_tr = (
    "ALKAN Promosyon; kurumsal tekstil ve promosyon ürünlerinde butik çözümler."
)
alkan.meta_description_en = (
    "ALKAN Promotion: boutique solutions in corporate textile and promotional products."
)
alkan.save()
print("✓ AlkanPage güncellendi")


# ── AKAL GmbH detay sayfası ──────────────────────────────────────
gmbh, _ = AkalGmbhPage.objects.get_or_create(pk=1)
gmbh.hero_title_tr = "Şirketlerimiz"
gmbh.hero_title_en = "Our Companies"
gmbh.subtitle_tr = "AKAL GMBH"
gmbh.subtitle_en = "AKAL GMBH"
gmbh.description_tr = (
    "AKAL GmbH, ALK Group’un özellikle Nordbron markası odağında Avrupa "
    "operasyonlarının finans ve lojistik yönetimini üstlenmek ve bu alanları "
    "güçlendirmek amacıyla Almanya merkezli olarak kurulmuştur."
)
gmbh.description_en = (
    "AKAL GmbH was founded in Germany to undertake the finance and logistics "
    "management of ALK Group’s European operations — particularly focused on the "
    "Nordbron brand — and to strengthen these areas."
)
gmbh.cta_label_tr = "Markayı Keşfet"
gmbh.cta_label_en = "Discover Brand"
gmbh.cta_url = "https://nordbron.com"
gmbh.contact_name = "AKAL GmbH"
gmbh.contact_email = "info@akal-gmbh.de"
gmbh.contact_website = "https://akal-gmbh.de"
gmbh.meta_title_tr = "AKAL GmbH | ALK Grubu"
gmbh.meta_title_en = "AKAL GmbH | ALK Group"
gmbh.meta_description_tr = (
    "AKAL GmbH; grubun Almanya merkezli Avrupa operasyon şirketi."
)
gmbh.meta_description_en = (
    "AKAL GmbH: the group's Germany-based European operations company."
)
gmbh.save()
print("✓ AkalGmbhPage güncellendi")


# ── SUW detay sayfası ────────────────────────────────────────────
suw, _ = SuwPage.objects.get_or_create(pk=1)
suw.hero_title_tr = "Şirketlerimiz"
suw.hero_title_en = "Our Companies"
suw.subtitle_tr = "SUW"
suw.subtitle_en = "SUW"
suw.description_tr = (
    "1978’den gelen tekstil tecrübemizi iş güvenliği ve workwear alanına "
    "taşıyarak SUW markasını oluşturduk. Kalite, güven ve zamanında teslimat "
    "anlayışıyla iş dünyasına çözümler sunuyoruz."
)
suw.description_en = (
    "Carrying our textile experience dating back to 1978 into the fields of "
    "occupational safety and workwear, we created the SUW brand. With an approach "
    "of quality, trust, and on-time delivery, we provide solutions to the business "
    "world."
)
suw.cta_label_tr = "Markayı Keşfet"
suw.cta_label_en = "Discover Brand"
suw.cta_url = "https://suw.com.tr"
suw.contact_name = "Mücahit Bayrak"
suw.contact_email = "info@suw.com.tr"
suw.contact_website = "https://suw.com.tr"
suw.bottom_paragraph_tr = (
    "NEDEN SUW? 2000 yılında kurmuş olduğumuz ALKAN Tekstil, promosyon sektöründe "
    "faaliyetlerine devam ederken, 2019 yılının ikinci çeyreğinde personel "
    "kıyafetleri, iş güvenliği alanında farklı bir konsept ile "
    "müşterilerimizin/müşteri adaylarımızın karşısına çıkmak adına çalışmalarına "
    "başladığımız ve tabii ki ALKAN Tekstil’de edindiğimiz piyasa tecrübelerine "
    "dayanarak, uygun fiyat, kaliteli ürün ve zamanında teslimat kriterlerini "
    "kendine ilke edinmiş olan, 2021 yılında SUW (safety-uniform-workwear) "
    "markamızı çıkardık.\n\n"
    "Amacımız geçmişten gelen kalite ve işinde ustalık anlayışını ürünlerimize "
    "yansıtarak sizin çözüm ortağınız olmak.\n\n"
    "Kendine özgü koleksiyonunu ve pazarlama anlayışını, 1978 yılından bu yana "
    "edindiğimiz tecrübeler ile harmanlayarak, zamanın içinde yaşayacak olan "
    "markamız bundan sonra sizin hizmetinizde olacak."
)
suw.bottom_paragraph_en = (
    "WHY SUW? While ALKAN Textile, founded in 2000, continued its activities in the "
    "promotional sector, in the second quarter of 2019 we started working to meet "
    "our customers and prospects with a different concept in staff uniforms and "
    "occupational safety. Drawing on the market experience we gained at ALKAN "
    "Textile, in 2021 we launched our SUW (safety-uniform-workwear) brand — "
    "committed to fair pricing, quality products and on-time delivery.\n\n"
    "Our aim is to be your solution partner by reflecting the quality and "
    "craftsmanship inherited from the past into our products.\n\n"
    "Blending its own collection and marketing approach with the experience we have "
    "gained since 1978, our enduring brand will from now on be at your service."
)
suw.meta_title_tr = "SUW | ALK Grubu"
suw.meta_title_en = "SUW | ALK Group"
suw.meta_description_tr = (
    "SUW; iş güvenliği, koruyucu ekipman ve workwear alanında sertifikalı ürünler."
)
suw.meta_description_en = (
    "SUW: certified products in occupational safety, protective equipment, and workwear."
)
suw.save()
print("✓ SuwPage güncellendi")


print("\n✅ Brands seed tamamlandı.")
