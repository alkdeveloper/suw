"""Server-side GitHub Actions workflow dispatch client."""

import json
import logging
from urllib.error import HTTPError, URLError
from urllib.parse import quote
from urllib.request import Request, urlopen

from django.conf import settings

logger = logging.getLogger(__name__)


class PublishConfigurationError(Exception):
    """Raised when the publish integration is not configured."""


class PublishRequestError(Exception):
    """Raised when GitHub rejects or cannot receive the dispatch request."""


def dispatch_publish_workflow() -> None:
    token = settings.GITHUB_PUBLISH_TOKEN.strip()
    repo = settings.GITHUB_PUBLISH_REPO.strip()
    workflow = settings.GITHUB_PUBLISH_WORKFLOW.strip()
    ref = settings.GITHUB_PUBLISH_REF.strip()

    if not all((token, repo, workflow, ref)):
        raise PublishConfigurationError("GitHub publish integration is not configured")

    endpoint = (
        "https://api.github.com/repos/"
        f"{quote(repo, safe='/')}/actions/workflows/{quote(workflow, safe='')}/dispatches"
    )
    request = Request(
        endpoint,
        data=json.dumps({"ref": ref}).encode("utf-8"),
        method="POST",
        headers={
            "Authorization": f"Bearer {token}",
            "Accept": "application/vnd.github+json",
            "X-GitHub-Api-Version": "2022-11-28",
            "User-Agent": "SUW-CMS",
            "Content-Type": "application/json",
        },
    )

    try:
        with urlopen(request, timeout=10) as response:
            status = response.status
    except HTTPError as error:
        logger.warning("GitHub publish request rejected with HTTP %s", error.code)
        raise PublishRequestError(f"GitHub returned HTTP {error.code}") from error
    except (URLError, TimeoutError) as error:
        logger.warning("GitHub publish request failed: %s", type(error).__name__)
        raise PublishRequestError("GitHub publish request failed") from error

    if status != 204:
        logger.warning("GitHub publish request returned unexpected HTTP %s", status)
        raise PublishRequestError(f"Unexpected GitHub HTTP status {status}")
