from django.utils import translation
from rest_framework import serializers

from apps.home.models import HomeTickerWord
from apps.home.serializers import HomeTickerWordSerializer, _absolute_media_url

from .models import (
    AkalGmbhPage,
    AkalPage,
    AlkanPage,
    Brand,
    BrandMilestone,
    BrandsPage,
    CompaniesPage,
    CompanyDetailPage,
    GlobalOperationLocation,
    GroupCompany,
    SuwPage,
)


def resolve_brand_cta_label(obj: Brand) -> str:
    """DB boşsa API'de yine de anlamlı bir hover CTA metni döndür (aktif dile göre)."""
    if not obj.show_external_link or not (obj.url or "").strip():
        return ""
    raw = (getattr(obj, "cta_label", None) or "").strip()
    if raw:
        return raw
    lang = (translation.get_language() or "tr").split("-")[0]
    return "Discover >" if lang == "en" else "Markayı İncele >"


# ---------------------------------------------------------------------------
# Ortak alt serializer'lar
# ---------------------------------------------------------------------------
class BrandSerializer(serializers.ModelSerializer):
    url = serializers.SerializerMethodField()
    cta_label = serializers.SerializerMethodField()

    class Meta:
        model = Brand
        fields = [
            "id", "name", "slug", "subtitle",
            "logo", "card_image",
            "description", "url", "cta_label",
        ]

    def get_url(self, obj: Brand) -> str:
        if not obj.show_external_link:
            return ""
        return obj.url or ""

    def get_cta_label(self, obj: Brand) -> str:
        return resolve_brand_cta_label(obj)


class GroupCompanySerializer(serializers.ModelSerializer):
    detail_page_active = serializers.SerializerMethodField()

    class Meta:
        model = GroupCompany
        fields = [
            "id", "name", "slug", "logo",
            "description", "founded_year", "detail_key",
            "detail_page_active",
        ]

    def get_detail_page_active(self, obj: GroupCompany) -> bool:
        try:
            return obj.detail_page.is_active
        except Exception:
            return False


class BrandMilestoneSerializer(serializers.ModelSerializer):
    class Meta:
        model = BrandMilestone
        fields = ["id", "year", "description"]


class GlobalOperationLocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = GlobalOperationLocation
        fields = ["id", "page_scope", "country_name", "latitude", "longitude"]


# ---------------------------------------------------------------------------
# Markalar (listeleme) sayfası
# ---------------------------------------------------------------------------
class BrandsPageSerializer(serializers.ModelSerializer):
    brands = BrandSerializer(many=True, read_only=True)
    companies = GroupCompanySerializer(many=True, read_only=True)
    milestones = serializers.SerializerMethodField()
    locations = GlobalOperationLocationSerializer(many=True, read_only=True)
    ticker_words = HomeTickerWordSerializer(many=True, read_only=True)
    hero_image = serializers.SerializerMethodField()
    video_file = serializers.SerializerMethodField()
    video_image = serializers.SerializerMethodField()
    global_map_image = serializers.SerializerMethodField()

    class Meta:
        model = BrandsPage
        fields = [
            "hero_title", "hero_subtitle", "hero_image",
            "video_file", "video_image",
            "intro_label", "intro_text",
            "brands",
            "ticker_words", "ticker_description",
            "use_custom_timeline",
            "milestones_title", "milestones_button_text",
            "milestones_button_url", "milestones_year_suffix", "milestones",
            "companies_title", "companies_description", "companies",
            "global_title", "global_description", "global_map_image",
            "countries_text", "locations",
            "meta_title", "meta_description",
        ]

    def get_milestones(self, obj: BrandsPage):
        if obj.use_custom_timeline:
            qs = BrandMilestone.objects.order_by("order")
            return [{"id": item.id, "year": item.year, "description": item.description} for item in qs]
        from apps.corporate.models import CorporateHistoryItem
        qs = CorporateHistoryItem.objects.order_by("order")
        return [{"id": item.id, "year": item.year, "description": item.description} for item in qs]

    def get_hero_image(self, obj: BrandsPage):
        return _absolute_media_url(self.context.get("request"), obj.video_image)

    def get_video_image(self, obj: BrandsPage):
        return _absolute_media_url(self.context.get("request"), obj.video_image)

    def get_video_file(self, obj: BrandsPage):
        return _absolute_media_url(self.context.get("request"), obj.video_file)

    def get_global_map_image(self, obj: BrandsPage):
        return _absolute_media_url(self.context.get("request"), obj.global_map_image)


# ---------------------------------------------------------------------------
# Şirketler listesi sayfası
# ---------------------------------------------------------------------------
class CompaniesPageSerializer(serializers.ModelSerializer):
    companies = GroupCompanySerializer(many=True, read_only=True)
    milestones = BrandMilestoneSerializer(many=True, read_only=True)
    locations = GlobalOperationLocationSerializer(many=True, read_only=True)
    ticker_words = HomeTickerWordSerializer(many=True, read_only=True)
    hero_image = serializers.SerializerMethodField()
    video_file = serializers.SerializerMethodField()
    video_image = serializers.SerializerMethodField()
    global_map_image = serializers.SerializerMethodField()

    class Meta:
        model = CompaniesPage
        fields = [
            "companies_title",
            "hero_image", "video_file", "video_image",
            "intro_label", "intro_text",
            "ticker_words", "ticker_description",
            "milestones_title", "milestones_button_text",
            "milestones_button_url", "milestones_year_suffix", "milestones",
            "global_title", "global_description", "global_map_image",
            "countries_text", "locations",
            "companies",
            "meta_title", "meta_description",
        ]

    def get_hero_image(self, obj: CompaniesPage):
        return _absolute_media_url(self.context.get("request"), obj.video_image)

    def get_video_image(self, obj: CompaniesPage):
        return _absolute_media_url(self.context.get("request"), obj.video_image)

    def get_video_file(self, obj: CompaniesPage):
        return _absolute_media_url(self.context.get("request"), obj.video_file)

    def get_global_map_image(self, obj: CompaniesPage):
        return _absolute_media_url(self.context.get("request"), obj.global_map_image)


# ---------------------------------------------------------------------------
# Şirket detay sayfaları için ortak taban
# ---------------------------------------------------------------------------
class _CompanyDetailBaseSerializer(serializers.ModelSerializer):
    """BrandDetailResponse şekline uyumlu ortak taban."""

    # Frontend BrandDetailResponse alanları
    id = serializers.SerializerMethodField()
    name = serializers.SerializerMethodField()
    slug = serializers.SerializerMethodField()
    card_image = serializers.SerializerMethodField()
    content = serializers.SerializerMethodField()
    url = serializers.SerializerMethodField()
    gallery_images = serializers.SerializerMethodField()
    brands = serializers.SerializerMethodField()
    has_global_block = serializers.SerializerMethodField()
    global_block_title = serializers.SerializerMethodField()
    global_block_text = serializers.SerializerMethodField()
    global_map_image = serializers.SerializerMethodField()
    companies = serializers.SerializerMethodField()
    ticker_words = serializers.SerializerMethodField()
    brand_detail_cta_text = serializers.SerializerMethodField()
    page_hero_title = serializers.SerializerMethodField()
    page_hero_image = serializers.SerializerMethodField()
    page_video_file = serializers.SerializerMethodField()
    logo = serializers.SerializerMethodField()
    secondary_logo = serializers.SerializerMethodField()

    # Subclass'lar override eder
    PAGE_ID: int = 1
    PAGE_NAME: str = ""
    PAGE_SLUG: str = ""

    def _brands_page(self):
        if not hasattr(self, "_cached_brands_page"):
            self._cached_brands_page = BrandsPage.get_solo()
        return self._cached_brands_page

    def _abs(self, field):
        return _absolute_media_url(self.context.get("request"), field)

    def get_id(self, obj) -> int:
        return self.PAGE_ID

    def get_name(self, obj) -> str:
        return self.PAGE_NAME

    def get_slug(self, obj) -> str:
        return self.PAGE_SLUG

    def get_card_image(self, obj):
        return None

    def get_logo(self, obj):
        return self._abs(getattr(obj, "logo", None))

    def get_secondary_logo(self, obj):
        return self._abs(getattr(obj, "secondary_logo", None))

    def get_content(self, obj) -> str:
        return (getattr(obj, "bottom_paragraph", None) or "").strip()

    def get_url(self, obj) -> str:
        return getattr(obj, "contact_website", "") or getattr(obj, "cta_url", "") or ""

    def get_gallery_images(self, obj):
        items = []
        for attr in ("feature_image", "feature_image_1", "feature_image_2"):
            img = getattr(obj, attr, None)
            if img:
                items.append({
                    "id": len(items) + 1,
                    "title": "",
                    "image": self._abs(img),
                    "category": None,
                })
        return items

    def get_brands(self, obj):
        return []

    def get_has_global_block(self, obj) -> bool:
        return False

    def get_global_block_title(self, obj) -> str:
        return ""

    def get_global_block_text(self, obj) -> str:
        return ""

    def get_global_map_image(self, obj):
        return None

    def get_companies(self, obj):
        qs = GroupCompany.objects.filter(is_active=True).order_by("order")
        return GroupCompanySerializer(qs, many=True, context=self.context).data

    def get_ticker_words(self, obj):
        qs = HomeTickerWord.objects.order_by("order")
        return HomeTickerWordSerializer(qs, many=True, context=self.context).data

    def get_brand_detail_cta_text(self, obj) -> str:
        page = self._brands_page()
        return (page.companies_description or page.intro_text or "").strip()

    def get_page_hero_title(self, obj) -> str:
        return getattr(obj, "hero_title", "") or ""

    def get_page_hero_image(self, obj):
        img = getattr(obj, "hero_image", None)
        if img:
            return self._abs(img)
        return self._abs(self._brands_page().video_image)

    def get_page_video_file(self, obj):
        return self._abs(self._brands_page().video_file)


# ---------------------------------------------------------------------------
# AKAL
# ---------------------------------------------------------------------------
class AkalPageSerializer(_CompanyDetailBaseSerializer):
    PAGE_ID = 1
    PAGE_NAME = "AKAL"
    PAGE_SLUG = "akal"

    locations = serializers.SerializerMethodField()
    countries_text = serializers.SerializerMethodField()

    class Meta:
        model = AkalPage
        fields = [
            "id", "name", "slug",
            "logo", "secondary_logo", "card_image",
            "subtitle", "description", "content",
            "cta_label", "cta_url", "url",
            "gallery_images",
            "contact_name", "contact_email",
            "has_global_block", "global_block_title", "global_block_text", "global_map_image",
            "countries_text", "locations",
            "ticker_words", "brand_detail_cta_text",
            "companies", "brands",
            "page_hero_title", "page_hero_image", "page_video_file",
            "meta_title", "meta_description",
        ]

    def get_brands(self, obj):
        qs = obj.sub_brands.all()
        return BrandSerializer(qs, many=True, context=self.context).data

    def get_has_global_block(self, obj: AkalPage) -> bool:
        return bool((obj.global_block_title or "").strip() or (obj.global_block_description or "").strip())

    def get_global_block_title(self, obj: AkalPage) -> str:
        return obj.global_block_title or ""

    def get_global_block_text(self, obj: AkalPage) -> str:
        return obj.global_block_description or ""

    def get_global_map_image(self, obj):
        if self.get_has_global_block(obj):
            return self._abs(self._brands_page().global_map_image)
        return None

    def get_locations(self, obj):
        if not self.get_has_global_block(obj):
            return []
        from .models import GlobalOperationLocation
        qs = GlobalOperationLocation.objects.filter(
            page_scope=GlobalOperationLocation.PAGE_SCOPE_COMPANIES,
        ).order_by("order")
        return GlobalOperationLocationSerializer(qs, many=True).data

    def get_countries_text(self, obj):
        if not self.get_has_global_block(obj):
            return ""
        return self._brands_page().countries_text or ""


# ---------------------------------------------------------------------------
# ALKAN
# ---------------------------------------------------------------------------
class AlkanPageSerializer(_CompanyDetailBaseSerializer):
    PAGE_ID = 2
    PAGE_NAME = "ALKAN Promosyon"
    PAGE_SLUG = "alkan-promosyon"

    class Meta:
        model = AlkanPage
        fields = [
            "id", "name", "slug",
            "logo", "secondary_logo", "card_image",
            "subtitle", "description", "content",
            "cta_label", "cta_url", "url",
            "gallery_images",
            "contact_name", "contact_email",
            "has_global_block", "global_block_title", "global_block_text", "global_map_image",
            "ticker_words", "brand_detail_cta_text",
            "companies", "brands",
            "page_hero_title", "page_hero_image", "page_video_file",
            "meta_title", "meta_description",
        ]


# ---------------------------------------------------------------------------
# AKAL GmbH
# ---------------------------------------------------------------------------
class AkalGmbhPageSerializer(_CompanyDetailBaseSerializer):
    PAGE_ID = 3
    PAGE_NAME = "AKAL GmbH"
    PAGE_SLUG = "akal-gmbh"

    class Meta:
        model = AkalGmbhPage
        fields = [
            "id", "name", "slug",
            "logo", "secondary_logo", "card_image",
            "subtitle", "description", "content",
            "cta_label", "cta_url", "url",
            "gallery_images",
            "contact_name", "contact_email",
            "has_global_block", "global_block_title", "global_block_text", "global_map_image",
            "ticker_words", "brand_detail_cta_text",
            "companies", "brands",
            "page_hero_title", "page_hero_image", "page_video_file",
            "meta_title", "meta_description",
        ]


# ---------------------------------------------------------------------------
# SUW
# ---------------------------------------------------------------------------
class SuwPageSerializer(_CompanyDetailBaseSerializer):
    PAGE_ID = 4
    PAGE_NAME = "SUW"
    PAGE_SLUG = "suw"

    class Meta:
        model = SuwPage
        fields = [
            "id", "name", "slug",
            "logo", "secondary_logo", "card_image",
            "subtitle", "description", "content",
            "cta_label", "cta_url", "url",
            "gallery_images",
            "contact_name", "contact_email",
            "has_global_block", "global_block_title", "global_block_text", "global_map_image",
            "ticker_words", "brand_detail_cta_text",
            "companies", "brands",
            "page_hero_title", "page_hero_image", "page_video_file",
            "meta_title", "meta_description",
        ]


# ---------------------------------------------------------------------------
# Dinamik Şirket Detay Sayfası (CompanyDetailPage)
# ---------------------------------------------------------------------------
class CompanyDetailPageSerializer(serializers.ModelSerializer):
    """
    CompanyDetailPage modelini frontend BrandDetailResponse şekline uyumlu döndürür.
    """

    id = serializers.SerializerMethodField()
    name = serializers.SerializerMethodField()
    slug = serializers.SerializerMethodField()
    card_image = serializers.SerializerMethodField()
    content = serializers.SerializerMethodField()
    url = serializers.SerializerMethodField()
    gallery_images = serializers.SerializerMethodField()
    brands = serializers.SerializerMethodField()
    has_global_block = serializers.SerializerMethodField()
    global_block_text = serializers.SerializerMethodField()
    global_map_image = serializers.SerializerMethodField()
    countries_text = serializers.SerializerMethodField()
    locations = serializers.SerializerMethodField()
    companies = serializers.SerializerMethodField()
    ticker_words = serializers.SerializerMethodField()
    brand_detail_cta_text = serializers.SerializerMethodField()
    page_hero_title = serializers.SerializerMethodField()
    page_hero_image = serializers.SerializerMethodField()
    page_video_file = serializers.SerializerMethodField()
    logo = serializers.SerializerMethodField()
    secondary_logo = serializers.SerializerMethodField()

    class Meta:
        model = CompanyDetailPage
        fields = [
            "id", "name", "slug",
            "logo", "secondary_logo", "card_image",
            "subtitle", "description", "content",
            "cta_label", "cta_url", "url",
            "gallery_images",
            "contact_name", "contact_email",
            "has_global_block", "global_block_title", "global_block_text", "global_map_image",
            "countries_text", "locations",
            "ticker_words", "brand_detail_cta_text",
            "companies", "brands",
            "page_hero_title", "page_hero_image", "page_video_file",
            "meta_title", "meta_description",
        ]

    def _abs(self, field):
        return _absolute_media_url(self.context.get("request"), field)

    def _brands_page(self):
        if not hasattr(self, "_cached_brands_page"):
            self._cached_brands_page = BrandsPage.get_solo()
        return self._cached_brands_page

    def get_id(self, obj: CompanyDetailPage) -> int:
        return obj.company.pk

    def get_name(self, obj: CompanyDetailPage) -> str:
        return obj.company.name

    def get_slug(self, obj: CompanyDetailPage) -> str:
        return obj.company.slug

    def get_card_image(self, obj):
        return None

    def get_logo(self, obj):
        return self._abs(obj.logo)

    def get_secondary_logo(self, obj):
        return self._abs(obj.secondary_logo)

    def get_content(self, obj: CompanyDetailPage) -> str:
        return (obj.bottom_paragraph or "").strip()

    def get_url(self, obj: CompanyDetailPage) -> str:
        return obj.contact_website or obj.cta_url or ""

    def get_gallery_images(self, obj):
        items = []
        for attr in ("feature_image_1", "feature_image_2"):
            img = getattr(obj, attr, None)
            if img:
                items.append({
                    "id": len(items) + 1,
                    "title": "",
                    "image": self._abs(img),
                    "category": None,
                })
        return items

    def get_brands(self, obj: CompanyDetailPage):
        qs = obj.sub_brands.all()
        return BrandSerializer(qs, many=True, context=self.context).data

    def get_has_global_block(self, obj: CompanyDetailPage) -> bool:
        return bool(obj.has_global_block)

    def get_global_block_text(self, obj: CompanyDetailPage) -> str:
        return obj.global_block_description or ""

    def get_global_map_image(self, obj):
        if obj.has_global_block:
            return self._abs(self._brands_page().global_map_image)
        return None

    def get_countries_text(self, obj: CompanyDetailPage) -> str:
        if not obj.has_global_block:
            return ""
        return self._brands_page().countries_text or ""

    def get_locations(self, obj):
        if not obj.has_global_block:
            return []
        qs = GlobalOperationLocation.objects.filter(
            page_scope=GlobalOperationLocation.PAGE_SCOPE_COMPANIES,
        ).order_by("order")
        return GlobalOperationLocationSerializer(qs, many=True).data

    def get_companies(self, obj):
        qs = GroupCompany.objects.filter(is_active=True).order_by("order")
        return GroupCompanySerializer(qs, many=True, context=self.context).data

    def get_ticker_words(self, obj):
        from apps.home.models import HomeTickerWord
        qs = HomeTickerWord.objects.order_by("order")
        return HomeTickerWordSerializer(qs, many=True, context=self.context).data

    def get_brand_detail_cta_text(self, obj) -> str:
        page = self._brands_page()
        return (page.companies_description or page.intro_text or "").strip()

    def get_page_hero_title(self, obj: CompanyDetailPage) -> str:
        return obj.hero_title or ""

    def get_page_hero_image(self, obj):
        if obj.hero_image:
            return self._abs(obj.hero_image)
        return self._abs(self._brands_page().video_image)

    def get_page_video_file(self, obj):
        return self._abs(self._brands_page().video_file)

