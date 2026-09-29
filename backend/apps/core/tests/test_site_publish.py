from io import BytesIO
from unittest.mock import patch
from urllib.error import HTTPError, URLError

from django.contrib.auth.models import User
from django.test import Client, TestCase, override_settings
from django.urls import reverse
from django.utils import timezone

from apps.core.models import SiteSettings
from apps.core.services.github_publish import (
    PublishRequestError,
    dispatch_publish_workflow,
)


class SitePublishAdminTests(TestCase):
    def setUp(self):
        self.url = reverse("admin-site-publish")
        self.superuser = User.objects.create_superuser("root", "root@example.com", "password")
        self.staff = User.objects.create_user("staff", password="password", is_staff=True)

    def test_anonymous_user_cannot_publish(self):
        response = self.client.post(self.url)
        self.assertEqual(response.status_code, 302)
        self.assertIn("/admin/login/", response.url)

    def test_staff_user_cannot_publish(self):
        self.client.force_login(self.staff)
        response = self.client.post(self.url)
        self.assertEqual(response.status_code, 403)

    def test_get_does_not_publish(self):
        self.client.force_login(self.superuser)
        with patch("apps.core.admin_views.dispatch_publish_workflow") as dispatch:
            response = self.client.get(self.url)
        self.assertEqual(response.status_code, 405)
        dispatch.assert_not_called()

    def test_csrf_is_required(self):
        client = Client(enforce_csrf_checks=True)
        client.force_login(self.superuser)
        response = client.post(self.url)
        self.assertEqual(response.status_code, 403)

    def test_publish_button_is_only_visible_to_superuser(self):
        self.client.force_login(self.superuser)
        response = self.client.get(reverse("admin:index"))
        self.assertContains(response, "SİTEYİ YAYINLA")

        self.client.force_login(self.staff)
        response = self.client.get(reverse("admin:index"))
        self.assertNotContains(response, "SİTEYİ YAYINLA")

    @patch("apps.core.admin_views.dispatch_publish_workflow")
    def test_superuser_can_publish(self, dispatch):
        self.client.force_login(self.superuser)
        response = self.client.post(self.url, follow=True)
        self.assertEqual(response.status_code, 200)
        dispatch.assert_called_once_with()
        self.assertContains(response, "Site yayını başlatıldı")
        self.assertIsNotNone(SiteSettings.get_solo().last_publish_requested_at)

    @patch("apps.core.admin_views.dispatch_publish_workflow")
    def test_second_request_inside_cooldown_is_not_dispatched(self, dispatch):
        settings = SiteSettings.get_solo()
        settings.last_publish_requested_at = timezone.now()
        settings.save(update_fields=["last_publish_requested_at"])
        self.client.force_login(self.superuser)
        response = self.client.post(self.url, follow=True)
        dispatch.assert_not_called()
        self.assertContains(response, "kısa süre önce başlatıldı")

    @override_settings(GITHUB_PUBLISH_TOKEN="")
    def test_missing_token_returns_safe_error(self):
        self.client.force_login(self.superuser)
        response = self.client.post(self.url, follow=True)
        self.assertContains(response, "entegrasyonu yapılandırılmamış")
        self.assertNotContains(response, "GITHUB_PUBLISH_TOKEN")

    @patch(
        "apps.core.admin_views.dispatch_publish_workflow",
        side_effect=PublishRequestError("GitHub returned HTTP 401"),
    )
    def test_github_auth_error_is_safe(self, dispatch):
        self.client.force_login(self.superuser)
        response = self.client.post(self.url, follow=True)
        self.assertContains(response, "GitHub bağlantısını kontrol edin")
        self.assertNotContains(response, "401")

    @patch(
        "apps.core.admin_views.dispatch_publish_workflow",
        side_effect=PublishRequestError("GitHub publish request failed"),
    )
    def test_github_timeout_is_safe(self, dispatch):
        self.client.force_login(self.superuser)
        response = self.client.post(self.url, follow=True)
        self.assertContains(response, "GitHub bağlantısını kontrol edin")


@override_settings(
    GITHUB_PUBLISH_TOKEN="test-token-never-logged",
    GITHUB_PUBLISH_REPO="alkdeveloper/suw",
    GITHUB_PUBLISH_WORKFLOW="nextjs.yml",
    GITHUB_PUBLISH_REF="main",
)
class GithubPublishServiceTests(TestCase):
    @patch("apps.core.services.github_publish.urlopen")
    def test_http_204_is_success(self, urlopen):
        response = urlopen.return_value.__enter__.return_value
        response.status = 204
        dispatch_publish_workflow()
        request = urlopen.call_args.args[0]
        self.assertEqual(request.method, "POST")
        self.assertNotIn("test-token-never-logged", request.full_url)

    @patch("apps.core.services.github_publish.urlopen")
    def test_http_401_is_safe_error(self, urlopen):
        urlopen.side_effect = HTTPError(
            "https://api.github.com/",
            401,
            "Unauthorized",
            {},
            BytesIO(b'{"message":"Bad credentials"}'),
        )
        with self.assertRaisesMessage(PublishRequestError, "GitHub returned HTTP 401"):
            dispatch_publish_workflow()

    @patch("apps.core.services.github_publish.urlopen")
    def test_timeout_is_safe_error(self, urlopen):
        urlopen.side_effect = URLError(TimeoutError("timed out"))
        with self.assertRaisesMessage(PublishRequestError, "GitHub publish request failed"):
            dispatch_publish_workflow()
