from django.db import migrations, models
import django.core.validators
import common.utils


class Migration(migrations.Migration):
    dependencies = [("projects", "0001_initial")]

    operations = [
        migrations.AlterField(
            model_name="projectsector",
            name="image",
            field=models.ImageField(
                blank=True,
                upload_to=common.utils.UniqueUploadTo("projects/sectors/"),
                validators=[django.core.validators.FileExtensionValidator(["jpg", "jpeg", "png", "webp"])],
            ),
        ),
        migrations.AlterField(
            model_name="projectsector",
            name="image_mobile",
            field=models.ImageField(
                blank=True,
                upload_to=common.utils.UniqueUploadTo("projects/sectors/mobile/"),
                validators=[django.core.validators.FileExtensionValidator(["jpg", "jpeg", "png", "webp"])],
            ),
        ),
        migrations.AlterField(
            model_name="projectspagesettings",
            name="id",
            field=models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name="ID"),
        ),
    ]
