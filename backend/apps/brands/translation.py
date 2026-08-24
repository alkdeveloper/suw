from modeltranslation.translator import TranslationOptions, register
from .models import (
    BrandsPage,
    CompaniesPage,
    Brand,
    GroupCompany,
    BrandMilestone,
    GlobalOperationLocation,
    BrandsOperationLocation,
    CompaniesOperationLocation,
    AkalPage,
    AlkanPage,
    AkalGmbhPage,
    SuwPage,
    CompanyDetailPage,
)


@register(BrandsPage)
class BrandsPageTranslationOptions(TranslationOptions):
    fields = (
        "hero_title", "hero_subtitle",
        "intro_label", "intro_text",
        "ticker_description",
        "milestones_title", "milestones_button_text", "milestones_button_url", "milestones_year_suffix",
        "companies_title", "companies_description",
        "global_title", "global_description", "countries_text",
        "meta_title", "meta_description",
    )


@register(CompaniesPage)
class CompaniesPageTranslationOptions(TranslationOptions):
    fields = (
        "companies_title",
        "intro_label", "intro_text",
        "ticker_description",
        "milestones_title", "milestones_button_text", "milestones_button_url", "milestones_year_suffix",
        "global_title", "global_description", "countries_text",
        "meta_title", "meta_description",
    )


@register(Brand)
class BrandTranslationOptions(TranslationOptions):
    fields = (
        "name", "subtitle", "description", "cta_label",
        "meta_title", "meta_description",
    )


@register(GroupCompany)
class GroupCompanyTranslationOptions(TranslationOptions):
    fields = ("name", "description")


@register(BrandMilestone)
class BrandMilestoneTranslationOptions(TranslationOptions):
    fields = ("description",)


@register(GlobalOperationLocation)
class GlobalOperationLocationTranslationOptions(TranslationOptions):
    fields = ("country_name",)


@register(BrandsOperationLocation)
class BrandsOperationLocationTranslationOptions(TranslationOptions):
    fields = ("country_name",)


@register(CompaniesOperationLocation)
class CompaniesOperationLocationTranslationOptions(TranslationOptions):
    fields = ("country_name",)


# ---------------------------------------------------------------------------
# Şirket detay sayfaları
# ---------------------------------------------------------------------------
_COMPANY_DETAIL_COMMON_FIELDS = (
    "hero_title",
    "subtitle",
    "description",
    "cta_label",
    "contact_name",
    "meta_title",
    "meta_description",
)


@register(AkalPage)
class AkalPageTranslationOptions(TranslationOptions):
    fields = _COMPANY_DETAIL_COMMON_FIELDS + (
        "sub_brands_title",
        "bottom_paragraph",
        "global_block_title",
        "global_block_description",
    )


@register(AlkanPage)
class AlkanPageTranslationOptions(TranslationOptions):
    fields = _COMPANY_DETAIL_COMMON_FIELDS + ("bottom_paragraph",)


@register(AkalGmbhPage)
class AkalGmbhPageTranslationOptions(TranslationOptions):
    fields = _COMPANY_DETAIL_COMMON_FIELDS


@register(SuwPage)
class SuwPageTranslationOptions(TranslationOptions):
    fields = _COMPANY_DETAIL_COMMON_FIELDS + ("bottom_paragraph",)


@register(CompanyDetailPage)
class CompanyDetailPageTranslationOptions(TranslationOptions):
    fields = _COMPANY_DETAIL_COMMON_FIELDS + (
        "sub_brands_title",
        "bottom_paragraph",
        "global_block_title",
        "global_block_description",
    )
