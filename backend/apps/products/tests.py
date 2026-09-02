from django.test import TestCase
from rest_framework.test import APIClient

from .models import Product, ProductCategory, ProductGroup, ProductPageSettings
from .admin import ProductAdmin, ProductCategoryAdmin, ProductGroupAdmin, ProductImageInline, ProductPageSettingsAdmin
from django.contrib import admin


class ProductsApiTests(TestCase):
    def setUp(self):
        self.group = ProductGroup.objects.get(slug="summer")
        self.category = ProductCategory.objects.get(slug="t-shirt")
        self.product = Product.objects.create(name_tr="İş Tişörtü", name_en="Work T-Shirt", slug="work-tshirt", product_code="SUW-001", category=self.category, sizes_tr="S\\nM\\nL", sizes_en="S\nM\nL", is_featured=True)
        self.product.groups.add(self.group)
        self.client = APIClient()

    def test_localized_groups(self):
        response = self.client.get("/api/products/groups/", HTTP_ACCEPT_LANGUAGE="en")
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.data[0]["name"], "Summer")

    def test_product_filters(self):
        response = self.client.get("/api/products/products/?group=summer&category=t-shirt&featured=true")
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.data[0]["product_code"], "SUW-001")
        self.assertEqual(response.data[0]["sizes"], "S\\nM\\nL")

    def test_product_page_settings_are_localized(self):
        settings = ProductPageSettings.get_solo()
        settings.title_tr = "İş İçin Geliştirildi"
        settings.title_en = "Built for the Job"
        settings.save()
        response = self.client.get("/api/products/page/", HTTP_ACCEPT_LANGUAGE="en")
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.data["title"], "Built for the Job")

    def test_group_hero_is_localized(self):
        self.group.hero_title_tr = "Yazlık İş Giyimi"
        self.group.hero_title_en = "Summer Workwear"
        self.group.save()
        response = self.client.get("/api/products/groups/summer/", HTTP_ACCEPT_LANGUAGE="tr")
        self.assertEqual(response.data["hero_title"], "Yazlık İş Giyimi")

    def test_category_page_fields_are_localized(self):
        self.category.seo_title_tr = "Tişörtler"
        self.category.seo_title_en = "T-Shirts"
        self.category.save()
        response = self.client.get("/api/products/categories/", HTTP_ACCEPT_LANGUAGE="en")
        category = next(item for item in response.data if item["slug"] == "t-shirt")
        self.assertEqual(category["seo_title"], "T-Shirts")
        self.assertIn("header_image", category)

    def test_admin_configuration(self):
        self.assertIsInstance(admin.site._registry[Product], ProductAdmin)
        self.assertIsInstance(admin.site._registry[ProductCategory], ProductCategoryAdmin)
        self.assertIsInstance(admin.site._registry[ProductGroup], ProductGroupAdmin)
        self.assertIsInstance(admin.site._registry[ProductPageSettings], ProductPageSettingsAdmin)
        self.assertIn(ProductImageInline, ProductAdmin.inlines)
        self.assertIn("product_code", ProductAdmin.search_fields)
        self.assertIn("groups", ProductAdmin.list_filter)
