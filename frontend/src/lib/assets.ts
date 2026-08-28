const publicBasePath = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/$/, "");
const publicApiUrl = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000/api/";

function isAbsoluteUrl(value: string) {
  return /^(?:[a-z]+:)?\/\//i.test(value) || value.startsWith("data:") || value.startsWith("blob:");
}

function getPublicApiOrigin() {
  try {
    return new URL(publicApiUrl).origin;
  } catch {
    return "";
  }
}

function isLocalHostname(hostname: string) {
  return hostname === "localhost" || hostname === "127.0.0.1";
}

export function resolvePublicAssetPath(path: string) {
  if (!path || isAbsoluteUrl(path) || !path.startsWith("/")) {
    return path;
  }

  if (!publicBasePath || path === publicBasePath || path.startsWith(`${publicBasePath}/`)) {
    return path;
  }

  return `${publicBasePath}${path}`;
}

export function resolveCmsMediaUrl(value: string | null | undefined) {
  if (!value) {
    return undefined;
  }

  const apiOrigin = getPublicApiOrigin();

  if (isAbsoluteUrl(value)) {
    try {
      const mediaUrl = new URL(value);
      const apiUrl = apiOrigin ? new URL(apiOrigin) : null;

      if (
        apiUrl &&
        !isLocalHostname(apiUrl.hostname) &&
        isLocalHostname(mediaUrl.hostname) &&
        mediaUrl.pathname.startsWith("/media/")
      ) {
        return new URL(`${mediaUrl.pathname}${mediaUrl.search}${mediaUrl.hash}`, apiOrigin).toString();
      }
    } catch {
      return value;
    }

    return value;
  }

  const normalized = value.startsWith("/") ? value : `/${value}`;

  if (normalized.startsWith("/media/") && apiOrigin) {
    return new URL(normalized, apiOrigin).toString();
  }

  return resolvePublicAssetPath(normalized);
}

export function resolveAssetUrl(value: string) {
  return resolveCmsMediaUrl(value) ?? value;
}

export function resolveCmsMediaUrls<T>(value: T): T {
  if (typeof value === "string") {
    if (
      value.startsWith("/media/") ||
      value.startsWith("media/") ||
      /^https?:\/\/(?:localhost|127\.0\.0\.1)(?::\d+)?\/media\//i.test(value)
    ) {
      return resolveCmsMediaUrl(value) as T;
    }

    return value;
  }

  if (Array.isArray(value)) {
    return value.map((item) => resolveCmsMediaUrls(item)) as T;
  }

  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([key, item]) => [key, resolveCmsMediaUrls(item)]),
    ) as T;
  }

  return value;
}
