import WhatsAppLink from "./WhatsAppLink";

export default function WhatsAppButton() {
  return (
    <WhatsAppLink
      target="_blank"
      rel="noreferrer"
      data-analytics-event="whatsapp_click"
      data-analytics-label="floating_button"
      className="fixed bottom-4 right-4 z-50 inline-flex items-center gap-3 rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-soft transition-all duration-200 ease-in-out hover:bg-emerald-700 active:scale-[0.98] sm:bottom-6 sm:right-6 md:hover:shadow-lg motion-safe:animate-soft-pulse"
      aria-label="Abrir WhatsApp para agendar una valoración"
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-50 text-emerald-700">
        WA
      </span>
      WhatsApp
    </WhatsAppLink>
  );
}
