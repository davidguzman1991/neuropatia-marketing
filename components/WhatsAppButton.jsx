// Mensaje editable para el enlace directo a WhatsApp.
const WHATSAPP_MESSAGE =
  "Hola doctor, estoy interesado en una valoración prioritaria por neuropatía diabética.";

export const WHATSAPP_HREF = `https://wa.me/?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_HREF}
      target="_blank"
      rel="noreferrer"
      data-analytics-event="whatsapp_click"
      data-analytics-label="floating_button"
      className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-3 rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-soft transition hover:translate-y-[-1px] hover:bg-emerald-700"
      aria-label="Abrir WhatsApp para agendar una valoración"
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-50 text-emerald-700">
        WA
      </span>
      WhatsApp
    </a>
  );
}
