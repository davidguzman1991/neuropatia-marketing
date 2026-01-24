import WhatsAppLink from "./WhatsAppLink";

export default function WhatsAppButton() {
  return (
    <WhatsAppLink
      target="_blank"
      rel="noreferrer"
      location="floating"
      data-analytics-event="whatsapp_click"
      data-analytics-label="floating_button"
      className="fixed bottom-4 right-4 z-50 flex min-h-[48px] min-w-[48px] items-center gap-2 rounded-xl bg-[linear-gradient(180deg,#059669_0%,#047857_50%,#065f46_100%)] px-4 py-3 text-sm font-bold text-white shadow-[0_4px_20px_-4px_rgba(5,150,105,0.5),inset_0_1px_0_rgba(255,255,255,0.2)] ring-2 ring-emerald-900/30 transition-all duration-200 ease-out hover:bg-emerald-600 active:scale-[0.97] sm:bottom-6 sm:right-6 sm:gap-3 sm:rounded-full sm:px-5 sm:py-3 md:hover:shadow-lg motion-safe:animate-soft-pulse"
      aria-label="Abrir WhatsApp para agendar una valoración"
    >
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/25 text-sm font-bold text-white sm:h-8 sm:w-8 sm:bg-emerald-50 sm:text-emerald-700">
        WA
      </span>
      <span className="hidden sm:inline">WhatsApp</span>
    </WhatsAppLink>
  );
}
