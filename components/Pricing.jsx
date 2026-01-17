import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import WhatsAppLink from "./WhatsAppLink";

export default function Pricing() {
  return (
    <section id="precios" className="section">
      <div className="space-y-6">
        <div className="max-w-3xl space-y-3">
          <h2 className="text-3xl font-semibold text-emerald-900 sm:text-4xl">
            💚 Precio especial por valoración prioritaria
          </h2>
          <p className="text-base text-emerald-900/80 sm:text-lg">
            Agenda tu evaluación médica completa con condiciones preferenciales.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="h-full bg-emerald-50/70">
            <CardContent className="flex h-full flex-col p-6 text-emerald-900/70">
              <h3 className="text-lg font-semibold text-emerald-900/70">
              Precio habitual de consulta
              </h3>
              <p className="mt-2 text-3xl font-semibold text-emerald-900/50 line-through">
                $60 <span aria-hidden="true">❌</span>
              </p>
              <p className="mt-2 text-xs text-emerald-900/60">
                Precio regular de consulta médica (no aplica en agenda prioritaria)
              </p>
            </CardContent>
          </Card>
          <Card className="h-full bg-emerald-800 text-cloud shadow-soft">
            <CardContent className="flex h-full flex-col p-6">
            <div className="flex flex-wrap gap-2">
              <Badge className="rounded-full bg-emerald-700/40 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-50">
                🔥 Precio especial
              </Badge>
              <Badge className="rounded-full bg-emerald-700/40 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-50">
                ⏱️ Agenda prioritaria
              </Badge>
            </div>
            <h3 className="mt-3 text-xl font-semibold">Valoración prioritaria</h3>
            <p className="mt-2 text-5xl font-semibold">$45</p>
            <p className="mt-2 text-sm text-emerald-50/80">
              Todo incluido en una sola consulta
            </p>
            <ul className="mt-5 space-y-3 text-sm text-emerald-50/90">
              {[
                "🦶 Valoración de pie diabético",
                "🥗 Asesoría nutricional",
                "⏱️ Consulta personalizada de 60 minutos",
                "❤️ Electrocardiograma",
                "🩺 Valoración de riesgo cardiovascular y renal",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Button
              size="lg"
              className="mt-6 w-full rounded-full bg-emerald-50 px-5 py-3 text-base font-semibold text-emerald-900 transition hover:bg-white"
              asChild
            >
              <WhatsAppLink
                target="_blank"
                rel="noreferrer"
                data-analytics-event="reserve_consultation_click"
                data-analytics-label="pricing_special"
              >
                📲 Agendar por WhatsApp ahora
              </WhatsAppLink>
            </Button>
            <p className="mt-3 text-xs text-emerald-50/70">
              Cupos limitados por semana
            </p>
          </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
