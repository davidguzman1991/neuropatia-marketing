export default function Footer() {
  return (
    <footer className="border-t-2 border-slate-300/60 bg-gradient-to-b from-slate-100 to-slate-200/80 pb-safe-bottom">
      <div className="mx-auto flex max-w-7xl min-w-0 flex-col gap-3 px-4 py-6 text-sm text-slate-800 sm:px-6 sm:py-8">
        <p className="min-w-0 break-words leading-relaxed">
          Aviso médico: La información de este sitio es educativa y no sustituye
          una consulta profesional. Ante síntomas persistentes, consulta con tu
          médico.
        </p>
        <p className="text-xs font-medium text-slate-600">
          Neuropatía diabética · Información para pacientes · 2026
        </p>
      </div>
    </footer>
  );
}
