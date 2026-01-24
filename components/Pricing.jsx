import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import WhatsAppLink from "./WhatsAppLink";

export default function Pricing() {
  return (
    <section id="precios" className="section">
      <div className="min-w-0 space-y-5 sm:space-y-6">
        <div className="max-w-3xl space-y-2 sm:space-y-3">
          <h2 className="text-2xl font-bold text-emerald-900 sm:text-3xl md:text-4xl">
            💚 Precio especial por valoración prioritaria
          </h2>
          <p className="text-sm leading-relaxed text-emerald-900/85 sm:text-base md:text-lg">
            Agenda tu evaluación médica completa con condiciones preferenciales.
          </p>
        </div>
        <div className="grid min-w-0 grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-2 lg:gap-6">
          <Card className="h-full min-w-0 border-2 border-emerald-200/70 bg-emerald-50/80 shadow-mobile-card sm:border-emerald-100/80 sm:bg-emerald-50/70">
            <CardContent className="flex h-full min-h-0 flex-col p-4 text-emerald-900/80 sm:p-5 md:p-6">
              <h3 className="text-base font-bold text-emerald-900/90 sm:text-lg">
                Precio habitual de consulta
              </h3>
              <p className="mt-2 text-2xl font-bold text-emerald-900/60 line-through sm:text-3xl">
                $60 <span aria-hidden="true">❌</span>
              </p>
              <p className="mt-2 flex-1 text-xs text-emerald-900/70">
                Precio regular de consulta médica (no aplica en agenda prioritaria)
              </p>
            </CardContent>
          </Card>
          <Card className="card-metallic-dark h-full min-w-0 border border-white/20 text-cloud shadow-metallic-dark">
            <CardContent className="flex h-full min-h-0 flex-col p-4 sm:p-5 md:p-6">
              <div className="flex flex-wrap gap-2">
                <Badge className="rounded-full bg-white/20 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wide text-emerald-50 sm:text-xs">
                  🔥 Precio especial
                </Badge>
                <Badge className="rounded-full bg-white/20 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wide text-emerald-50 sm:text-xs">
                  ⏱️ Agenda prioritaria
                </Badge>
              </div>
              <h3 className="mt-3 text-lg font-bold sm:text-xl">Valoración prioritaria</h3>
              <p className="mt-2 text-4xl font-bold sm:text-5xl">$45</p>
              <p className="mt-2 text-sm text-emerald-50/90">
                Todo incluido en una sola consulta
              </p>
              <ul className="mt-4 min-w-0 space-y-2.5 text-sm text-emerald-50/95 sm:mt-5 sm:space-y-3">
                {[
                  "🦶 Valoración de pie diabético",
                  "🥗 Asesoría nutricional",
                  "⏱️ Consulta personalizada de 60 minutos",
                  "❤️ Electrocardiograma",
                  "🩺 Valoración de riesgo cardiovascular y renal",
                ].map((item) => (
                  <li key={item} className="flex min-w-0 items-start gap-3 break-words">
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button
                size="lg"
                className="mt-5 min-h-[48px] w-full rounded-xl bg-emerald-50 px-5 py-4 text-base font-bold text-emerald-900 shadow-mobile-card transition hover:bg-white active:scale-[0.99] sm:mt-6"
                asChild
              >
                <WhatsAppLink
                  target="_blank"
                  rel="noreferrer"
                  location="doctor"
                  data-analytics-event="reserve_consultation_click"
                  data-analytics-label="pricing_special"
                >
                  📲 Agendar por WhatsApp ahora
                </WhatsAppLink>
              </Button>
              <p className="mt-3 text-xs text-emerald-50/80">
                Cupos limitados por semana
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
