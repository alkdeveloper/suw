from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("news", "0006_alter_newspage_featured_button_text_en_and_more"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="news",
            name="gallery_images",
        ),
        migrations.RemoveField(
            model_name="newspage",
            name="gallery_images",
        ),
    ]
