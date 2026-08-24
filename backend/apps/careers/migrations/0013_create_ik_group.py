"""
Data migration: "İK Yöneticisi" grubunu ve yetkilendirmelerini oluşturur.

Grup sadece kariyer modüllerine erişebilir:
  - CareerSettings  → view, change
  - Department      → view, add, change, delete
  - JobPosition     → view, add, change, delete
  - JobApplication  → view, change, delete  (add kapalı — sadece API'den gelir)
"""
from django.db import migrations

IK_GROUP_NAME = "İK Yöneticisi"

CAREERS_PERMISSIONS = [
    ("careersettings",  ["view", "change"]),
    ("department",      ["view", "add", "change", "delete"]),
    ("jobposition",     ["view", "add", "change", "delete"]),
    ("jobapplication",  ["view", "change", "delete"]),
]


def create_ik_group(apps, schema_editor):
    Group = apps.get_model("auth", "Group")
    Permission = apps.get_model("auth", "Permission")
    ContentType = apps.get_model("contenttypes", "ContentType")

    group, _ = Group.objects.get_or_create(name=IK_GROUP_NAME)

    for model_name, actions in CAREERS_PERMISSIONS:
        try:
            ct = ContentType.objects.get(app_label="careers", model=model_name)
        except ContentType.DoesNotExist:
            continue
        for action in actions:
            codename = f"{action}_{model_name}"
            try:
                perm = Permission.objects.get(content_type=ct, codename=codename)
                group.permissions.add(perm)
            except Permission.DoesNotExist:
                pass


def delete_ik_group(apps, schema_editor):
    Group = apps.get_model("auth", "Group")
    Group.objects.filter(name=IK_GROUP_NAME).delete()


class Migration(migrations.Migration):

    dependencies = [
        ("careers", "0012_alter_careersettings_hero_image_and_more"),
        ("auth", "0012_alter_user_first_name_max_length"),
        ("contenttypes", "0002_remove_content_type_name"),
    ]

    operations = [
        migrations.RunPython(create_ik_group, delete_ik_group),
    ]
