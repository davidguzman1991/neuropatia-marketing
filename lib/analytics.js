export function getDeviceType() {
  if (typeof window === "undefined") {
    return "desktop";
  }

  return window.innerWidth < 768 ? "mobile" : "desktop";
}

export function trackWhatsAppClick(location) {
  if (typeof window === "undefined") {
    return;
  }

  if (typeof window.gtag !== "function") {
    return;
  }

  window.gtag("event", "whatsapp_click", {
    location: location || "unknown",
    device: getDeviceType(),
  });
}
