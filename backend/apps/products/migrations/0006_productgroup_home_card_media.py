import common.utils
from django.conf import settings
from django.core.validators import FileExtensionValidator
from django.db import migrations, models
import django.db.models.deletion
from pathlib import Path
import shutil


def connect_home_groups(apps, schema_editor):
    HomePage = apps.get_model("home", "HomePage")
    ProductGroup = apps.get_model("products", "ProductGroup")
    home, _ = HomePage.objects.get_or_create(pk=1)
    seed_content = {
        "summer": "products/groups/summer.jpg",
        "winter": "products/groups/winter.jpg",
        "bags": "products/groups/bags.jpg",
        "accessories": "products/groups/accessories.jpg",
    }
    source_dir = Path(__file__).resolve().parent.parent / "seed_assets"
    target_dir = Path(settings.MEDIA_ROOT) / "products" / "groups"
    target_dir.mkdir(parents=True, exist_ok=True)
    for slug, image in seed_content.items():
        source = source_dir / f"{slug}.jpg"
        target = Path(settings.MEDIA_ROOT) / image
        if source.exists() and not target.exists():
            shutil.copy2(source, target)
        group = ProductGroup.objects.filter(slug=slug).first()
        if not group:
            continue
        group.home_page = home
        if not group.image:
            group.image = image
        group.save(update_fields=["home_page", "image"])


class Migration(migrations.Migration):
    dependencies = [("home", "0023_seed_home_process_steps"), ("products", "0005_product_sizes")]
    operations = [
        migrations.AddField(
            model_name="productgroup",
            name="home_page",
            field=models.ForeignKey(blank=True, editable=False, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name="product_groups", to="home.homepage"),
        ),
        migrations.AddField(
            model_name="productgroup",
            name="image_mobile",
            field=models.ImageField(blank=True, upload_to=common.utils.UniqueUploadTo("products/groups/mobile/"), validators=[FileExtensionValidator(["jpg", "jpeg", "png", "webp"])]),
        ),
        migrations.RunPython(connect_home_groups, migrations.RunPython.noop),
    ]
