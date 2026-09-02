from django.db import migrations


GROUPS = [
    ("summer", "Yazlık", "Summer", 10),
    ("winter", "Kışlık", "Winter", 20),
    ("bags", "Çanta", "Bags", 30),
    ("accessories", "Aksesuar", "Accessories", 40),
]

CATEGORIES = [
    ("t-shirt", "T-Shirt", "T-Shirt", ["summer"]),
    ("sweatshirt", "Sweatshirt", "Sweatshirt", ["summer", "winter"]),
    ("ceket", "Ceket", "Jacket", ["winter"]),
    ("pantolon", "Pantolon", "Trousers", ["summer", "winter"]),
    ("tulum", "Tulum", "Coveralls", []),
    ("onluk", "Önlük", "Apron", []),
    ("polar", "Polar", "Fleece", ["winter"]),
    ("yelek", "Yelek", "Vest", ["summer", "winter"]),
    ("mont-kaban", "Mont & Kaban", "Coats & Jackets", ["winter"]),
    ("softshell", "Softshell", "Softshell", ["winter"]),
    ("yagmurluk", "Yağmurluk", "Rainwear", ["winter"]),
    ("gomlek", "Gömlek", "Shirt", ["summer"]),
    ("sapka", "Şapka", "Cap", ["accessories"]),
    ("bere", "Bere", "Beanie", ["accessories"]),
    ("eldiven", "Eldiven", "Gloves", ["accessories"]),
    ("promosyon-canta", "Promosyon Çanta", "Promotional Bag", ["bags"]),
    ("takim-cantasi", "Takım Çantası", "Tool Bag", ["bags"]),
    ("sportswear", "Sportswear", "Sportswear", ["summer"]),
]


def seed_products(apps, schema_editor):
    ProductGroup = apps.get_model("products", "ProductGroup")
    ProductCategory = apps.get_model("products", "ProductCategory")
    groups = {}
    for slug, name_tr, name_en, sort_order in GROUPS:
        group, _ = ProductGroup.objects.update_or_create(
            slug=slug,
            defaults={"name_tr": name_tr, "name_en": name_en, "sort_order": sort_order, "is_active": True, "show_on_home": True},
        )
        groups[slug] = group

    for sort_order, (slug, name_tr, name_en, group_slugs) in enumerate(CATEGORIES, start=10):
        category, _ = ProductCategory.objects.update_or_create(
            slug=slug,
            defaults={"name_tr": name_tr, "name_en": name_en, "sort_order": sort_order, "is_active": True},
        )
        category.groups.set([groups[group_slug] for group_slug in group_slugs])


class Migration(migrations.Migration):
    dependencies = [("products", "0001_initial")]
    operations = [migrations.RunPython(seed_products, migrations.RunPython.noop)]
