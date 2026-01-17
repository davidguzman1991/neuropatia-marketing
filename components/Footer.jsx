export default function Footer() {
  return (
    <footer className="border-t border-emerald-100/80 bg-emerald-50/60">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-8 text-sm text-emerald-900/80 sm:px-6">
        <p>
          Aviso médico: La información de este sitio es educativa y no sustituye
          una consulta profesional. Ante síntomas persistentes, consulta con tu
          médico.
        </p>
        <p className="text-xs text-emerald-900/60">
          Neuropatía diabética · Información para pacientes · 2026
        </p>
      </div>
    </footer>
  );
}
