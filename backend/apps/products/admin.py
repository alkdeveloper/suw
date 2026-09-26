from django import forms
from django.contrib import admin
from django.urls import reverse
from django.utils.html import format_html
from solo.admin import SingletonModelAdmin
from unfold.admin import ModelAdmin, TabularInline

from .models import Product, ProductCategory, ProductGroup, ProductImage, ProductPageSettings


PRODUCT_SIZE_CHOICES = (
    ("XS", "XS"),
    ("S", "S"),
    ("M", "M"),
    ("L", "L"),
    ("XL", "XL"),
    ("XXL", "XXL"),
    ("3XL", "3XL"),
    ("4XL", "4XL"),
    ("5XL", "5XL"),
    ("ONE_SIZE", "Tek Beden / One Size"),
)


def parse_product_sizes(*values):
    selected = []
    one_size_values = {"Tek Beden", "One Size", "ONE_SIZE"}
    for value in values:
        for item in (value or "").replace("\\n", "\n").splitlines():
            size = item.strip()
            if not size:
                continue
            normalized = "ONE_SIZE" if size in one_size_values else size
            if normalized not in selected:
                selected.append(normalized)
    return selected


def preview(field):
    return format_html('<img src="{}" style="width:72px;height:48px;object-fit:cover;border-radius:4px" />', field.url) if field else "—"


class ProductImageInline(TabularInline):
    model = ProductImage
    extra = 0
    fields = ["image", "image_preview", "alt_tr", "alt_en", "sort_order"]
    readonly_fields = ["image_preview"]

    def image_preview(self, obj):
        return preview(obj.image) if obj.pk else "—"


class ProductAdminForm(forms.ModelForm):
    size_options = forms.MultipleChoiceField(
        label="Bedenler",
        choices=PRODUCT_SIZE_CHOICES,
        required=False,
        widget=forms.CheckboxSelectMultiple,
        help_text="Üründe gösterilecek bedenleri seçin. Hiçbir seçim yapılmazsa beden bilgisi gösterilmez.",
    )

    class Meta:
        model = Product
        fields = "__all__"

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        selected = parse_product_sizes(self.instance.sizes_tr, self.instance.sizes_en)
        standard_values = {value for value, _label in PRODUCT_SIZE_CHOICES}
        custom_choices = [(value, value) for value in selected if value not in standard_values]
        self.fields["size_options"].choices = (*PRODUCT_SIZE_CHOICES, *custom_choices)
        self.initial["size_options"] = selected

    def save(self, commit=True):
        instance = super().save(commit=False)
        selected = self.cleaned_data.get("size_options", [])
        instance.sizes_tr = "\n".join("Tek Beden" if size == "ONE_SIZE" else size for size in selected)
        instance.sizes_en = "\n".join("One Size" if size == "ONE_SIZE" else size for size in selected)
        if commit:
            instance.save()
            self.save_m2m()
        return instance


@admin.register(ProductPageSettings)
class ProductPageSettingsAdmin(SingletonModelAdmin, ModelAdmin):
    fieldsets = (
        ("Türkçe İçerik", {"fields": ("title_tr", "description_tr")} ),
        ("İngilizce İçerik", {"fields": ("title_en", "description_en")} ),
        ("Hero Görselleri", {"fields": ("hero_image", "hero_image_preview", "hero_image_mobile", "hero_image_mobile_preview")} ),
        ("Türkçe SEO", {"fields": ("seo_title_tr", "seo_description_tr")} ),
        ("İngilizce SEO", {"fields": ("seo_title_en", "seo_description_en")} ),
    )
    readonly_fields = ["hero_image_preview", "hero_image_mobile_preview"]

    def hero_image_preview(self, obj): return preview(obj.hero_image)
    def hero_image_mobile_preview(self, obj): return preview(obj.hero_image_mobile)


@admin.register(ProductGroup)
class ProductGroupAdmin(ModelAdmin):
    list_display = ["image_preview", "name_tr_link", "name_en", "slug", "is_active", "show_on_home", "sort_order"]
    list_display_links = None
    list_editable = ["is_active", "show_on_home", "sort_order"]
    search_fields = ["name_tr", "name_en", "slug"]
    prepopulated_fields = {"slug": ("name_tr",)}
    ordering = ["sort_order"]
    readonly_fields = ["image_preview", "image_mobile_preview", "hero_image_preview", "hero_image_mobile_preview"]
    fieldsets = (
        ("Temel Bilgiler", {"fields": ("name_tr", "name_en", "slug", "short_description_tr", "short_description_en")} ),
        ("Kart Görselleri", {"fields": ("image", "image_preview", "image_mobile", "image_mobile_preview")} ),
        ("Türkçe Hero", {"fields": ("hero_title_tr", "hero_description_tr")} ),
        ("İngilizce Hero", {"fields": ("hero_title_en", "hero_description_en")} ),
        ("Hero Görselleri", {"fields": ("hero_image", "hero_image_preview", "hero_image_mobile", "hero_image_mobile_preview")} ),
        ("SEO", {"fields": (("seo_title_tr", "seo_title_en"), ("seo_description_tr", "seo_description_en"))} ),
        ("Yayın", {"fields": ("sort_order", "is_active", "show_on_home")} ),
    )

    def image_preview(self, obj):
        return preview(obj.image)

    @admin.display(description="Türkçe Ad", ordering="name_tr")
    def name_tr_link(self, obj):
        url = reverse("admin:products_productgroup_change", args=[obj.pk])
        return format_html('<a href="{}">{}</a>', url, obj.name_tr)

    def image_mobile_preview(self, obj): return preview(obj.image_mobile)

    def hero_image_preview(self, obj): return preview(obj.hero_image)
    def hero_image_mobile_preview(self, obj): return preview(obj.hero_image_mobile)


@admin.register(ProductCategory)
class ProductCategoryAdmin(ModelAdmin):
    list_display = ["image_preview", "name_tr_link", "name_en", "group_names", "is_active", "sort_order"]
    list_display_links = None
    list_editable = ["is_active", "sort_order"]
    list_filter = ["groups", "is_active"]
    search_fields = ["name_tr", "name_en", "slug"]
    filter_horizontal = ["groups"]
    prepopulated_fields = {"slug": ("name_tr",)}
    ordering = ["sort_order"]
    readonly_fields = ["image_preview", "header_image_preview"]
    fieldsets = (
        ("Temel Bilgiler", {"fields": (("name_tr", "name_en"), "slug", "groups", "sort_order", "is_active")} ),
        ("Kart", {"fields": ("image", "image_preview")} ),
        ("Kategori Sayfası", {"fields": (("description_tr", "description_en"), "header_image", "header_image_preview")} ),
        ("SEO", {"fields": (("seo_title_tr", "seo_title_en"), ("seo_description_tr", "seo_description_en"))} ),
    )

    def image_preview(self, obj):
        return preview(obj.image)

    @admin.display(description="Türkçe Ad", ordering="name_tr")
    def name_tr_link(self, obj):
        url = reverse("admin:products_productcategory_change", args=[obj.pk])
        return format_html('<a href="{}">{}</a>', url, obj.name_tr)

    def header_image_preview(self, obj):
        return preview(obj.header_image)

    def group_names(self, obj):
        return ", ".join(obj.groups.values_list("name_tr", flat=True)) or "—"


@admin.register(Product)
class ProductAdmin(ModelAdmin):
    form = ProductAdminForm
    inlines = [ProductImageInline]
    list_display = ["image_preview", "product_code_link", "name_tr", "category", "group_names", "is_active", "sort_order"]
    list_display_links = None
    list_editable = ["is_active", "sort_order"]
    list_filter = ["category", "category__groups", "is_active"]
    search_fields = ["name_tr", "name_en", "product_code"]
    prepopulated_fields = {"slug": ("name_tr",)}
    ordering = ["sort_order"]
    readonly_fields = ["image_preview"]
    fieldsets = (
        ("Temel Bilgiler", {"fields": ("product_code", "slug", "category")} ),
        ("Türkçe İçerik", {"fields": ("name_tr", "short_description_tr", "description_tr", "materials_tr", "features_tr")} ),
        ("İngilizce İçerik", {"fields": ("name_en", "short_description_en", "description_en", "materials_en", "features_en")} ),
        ("Bedenler", {"fields": ("size_options",)} ),
        ("Ana Görsel", {"fields": ("main_image", "image_preview")} ),
        ("SEO", {"fields": (("seo_title_tr", "seo_title_en"), ("seo_description_tr", "seo_description_en"))} ),
        ("Yayın", {"fields": ("sort_order", "is_active")} ),
    )

    def image_preview(self, obj):
        return preview(obj.main_image)

    @admin.display(description="Product Code", ordering="product_code")
    def product_code_link(self, obj):
        url = reverse("admin:products_product_change", args=[obj.pk])
        return format_html('<a href="{}">{}</a>', url, obj.product_code)

    def group_names(self, obj):
        return ", ".join(obj.category.groups.values_list("name_tr", flat=True)) or "—"
