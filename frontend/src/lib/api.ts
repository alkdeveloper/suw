import axios, { AxiosError, type AxiosInstance, type AxiosRequestConfig } from "axios";
import { notFound } from "next/navigation";

import { resolveCmsMediaUrls } from "@/src/lib/assets";

const forceLocalFallback = process.env.NEXT_PUBLIC_FORCE_LOCAL_FALLBACK === "true";
const clientApiBaseUrl =
  process.env.NEXT_PUBLIC_API_URL ??
  (forceLocalFallback ? "/api/" : "http://localhost:8000/api/");

/** Per-call check — do not cache at module load (Next server/client bundles). */
function isServerSide() {
  return typeof window === "undefined";
}

function resolveApiBaseUrl(): string {
  if (isServerSide()) {
    // Docker/server ortamında internal URL kullan (container ağı)
    return process.env.API_INTERNAL_URL ?? clientApiBaseUrl;
  }
  return clientApiBaseUrl;
}

/**
 * AxiosError is not serializable across the RSC boundary (config has functions, AxiosHeaders, etc.).
 * Reject/throw this from server-side interceptors instead.
 */
function toPlainApiError(error: AxiosError): Error {
  const method = (error.config?.method ?? "get").toUpperCase();
  const path = error.config?.url ?? "";
  const base = error.config?.baseURL ?? "";

  if (error.response) {
    return new Error(`API ${error.response.status} ${method} ${base}${path}`);
  }

  return new Error(`API request failed: ${error.code ?? "NETWORK"} ${error.message} (${base}${path})`);
}

function serverLog(step: string, payload?: Record<string, unknown>) {
  if (!isServerSide()) {
    return;
  }
  if (payload !== undefined) {
    console.log(`[api] ${step}`, payload);
  } else {
    console.log(`[api] ${step}`);
  }
}

export function getApiBaseUrl() {
  const resolved = resolveApiBaseUrl();
  serverLog("getApiBaseUrl", { resolved, isServer: isServerSide() });
  return resolved;
}

export function createAPI(locale = "en", config?: AxiosRequestConfig): AxiosInstance {
  if (forceLocalFallback) {
    throw new Error("Remote API is disabled for this static fallback build.");
  }

  const baseURL = getApiBaseUrl();

  serverLog("createAPI: creating axios instance", {
    baseURL,
    locale,
    timeoutMs: 10_000,
    extraConfigKeys: config ? Object.keys(config) : [],
  });

  const instance = axios.create({
    baseURL,
    timeout: 10_000,
    headers: {
      Accept: "application/json",
      "Accept-Language": locale,
    },
    ...config,
  });

  if (isServerSide()) {
    instance.interceptors.request.use(
      (reqConfig) => {
        const path = reqConfig.url ?? "";
        const fullUrl = `${reqConfig.baseURL ?? ""}${path}`;
        serverLog("request: outgoing", {
          method: (reqConfig.method ?? "get").toUpperCase(),
          path,
          fullUrl,
          acceptLanguage: reqConfig.headers?.["Accept-Language"],
        });
        return reqConfig;
      },
      (error) => {
        serverLog("request: interceptor error", {
          message: error instanceof Error ? error.message : String(error),
        });
        return Promise.reject(error instanceof Error ? error : new Error(String(error)));
      },
    );
  }

  instance.interceptors.response.use(
    (response) => {
      response.data = resolveCmsMediaUrls(response.data);

      if (isServerSide()) {
        const reqConfig = response.config;
        serverLog("response: success", {
          status: response.status,
          path: reqConfig.url ?? "",
          method: (reqConfig.method ?? "get").toUpperCase(),
        });
      }
      return response;
    },
    (error: AxiosError) => {
      const status = error.response?.status;

      if (isServerSide()) {
        serverLog("response: error (interceptor)", {
          isAxiosError: axios.isAxiosError(error),
          code: error.code,
          message: error.message,
          status,
          path: error.config?.url ?? "",
          method: (error.config?.method ?? "get").toUpperCase(),
        });
      }

      if (isServerSide()) {
        if (status === 404) {
          serverLog("response: triggering notFound()");
          notFound();
        }

        serverLog("response: rejecting plain Error (RSC-safe)");
        return Promise.reject(toPlainApiError(error));
      }

      return Promise.reject(error);
    },
  );

  serverLog("createAPI: instance ready");

  return instance;
}

export function getApiErrorMessage(error: unknown, fallback: string) {
  serverLog("getApiErrorMessage: start", {
    isAxiosError: axios.isAxiosError(error),
  });

  if (!axios.isAxiosError(error)) {
    serverLog("getApiErrorMessage: not axios error, using fallback");
    return fallback;
  }

  if (!error.response) {
    serverLog("getApiErrorMessage: no response (network / refused?)", {
      code: error.code,
      message: error.message,
    });
    return "Form servisine ulaşılamadı. Sunucu bağlantısını kontrol edin.";
  }

  const { data } = error.response;

  if (typeof data === "string" && data.trim()) {
    serverLog("getApiErrorMessage: using string body");
    return data;
  }

  if (Array.isArray(data) && typeof data[0] === "string" && data[0].trim()) {
    serverLog("getApiErrorMessage: using first string in array body");
    return data[0];
  }

  if (data && typeof data === "object") {
    for (const value of Object.values(data)) {
      if (typeof value === "string" && value.trim()) {
        serverLog("getApiErrorMessage: using string field from object body");
        return value;
      }

      if (Array.isArray(value) && typeof value[0] === "string" && value[0].trim()) {
        serverLog("getApiErrorMessage: using first string from nested array");
        return value[0];
      }
    }
  }

  serverLog("getApiErrorMessage: using fallback");
  return fallback;
}
