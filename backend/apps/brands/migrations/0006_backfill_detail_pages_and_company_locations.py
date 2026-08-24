from django.db import migrations


def backfill_company_detail_pages_and_locations(apps, schema_editor):
    GroupCompany = apps.get_model("brands", "GroupCompany")
    CompanyDetailPage = apps.get_model("brands", "CompanyDetailPage")
    GlobalOperationLocation = apps.get_model("brands", "GlobalOperationLocation")

    for company in GroupCompany.objects.all():
        CompanyDetailPage.objects.get_or_create(
            company=company,
            defaults={"is_active": bool(company.detail_key)},
        )

    company_locations_exist = GlobalOperationLocation.objects.filter(page_scope="companies").exists()
    if company_locations_exist:
        return

    for location in GlobalOperationLocation.objects.filter(page_scope="brands").order_by("order"):
        GlobalOperationLocation.objects.create(
            page_scope="companies",
            country_name=location.country_name,
            country_name_tr=getattr(location, "country_name_tr", None),
            country_name_en=getattr(location, "country_name_en", None),
            latitude=location.latitude,
            longitude=location.longitude,
            order=location.order,
        )


class Migration(migrations.Migration):

    dependencies = [
        ("brands", "0005_brand_show_external_link_and_more"),
    ]

    operations = [
        migrations.RunPython(backfill_company_detail_pages_and_locations, migrations.RunPython.noop),
    ]