export const GOOGLE_ADS_ID = "AW-18394539955";
export const GOOGLE_ADS_PHONE_CONVERSION_SEND_TO =
  "AW-18394539955/A3fDCK6VzZYdELPPmcNE";

type GoogleTagFunction = (
  command: "event",
  eventName: "conversion",
  parameters: {
    event_callback: () => void;
    send_to: string;
  },
) => void;

function isProductionHost(hostname: string) {
  return hostname === "suw.com.tr" || hostname === "www.suw.com.tr";
}

export function sendPhoneConversion(onComplete: () => void): boolean {
  if (typeof window === "undefined" || !isProductionHost(window.location.hostname)) {
    return false;
  }

  const gtag = (window as Window & { gtag?: GoogleTagFunction }).gtag;

  if (!gtag) {
    return false;
  }

  let completed = false;
  let timeoutId: number | undefined;
  const completeOnce = () => {
    if (completed) {
      return;
    }

    completed = true;
    if (timeoutId !== undefined) {
      window.clearTimeout(timeoutId);
    }
    onComplete();
  };

  timeoutId = window.setTimeout(completeOnce, 800);
  gtag("event", "conversion", {
    event_callback: completeOnce,
    send_to: GOOGLE_ADS_PHONE_CONVERSION_SEND_TO,
  });

  return true;
}
