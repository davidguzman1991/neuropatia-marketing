import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { WHATSAPP_HREF } from "./WhatsAppButton";

export default function SuccessCases() {
  const cases = [
    {
      title: "Pedro, 68 años – Dolor nocturno en pies",
      quoteA:
        "“Por las noches sentía una quemazón intensa que no me dejaba dormir. Fui a varios médicos. Me dijeron que era normal por la diabetes. Probé vitaminas, plantas y masajes, pero nada funcionó.”",
      quoteB:
        "“En la consulta entendí que ese dolor no era normal. Se evaluó el tipo de neuropatía y se ajustó el tratamiento.”",
      outcome: "Resultado: Hoy duermo mejor y camino con más seguridad.",
    },
    {
      title: "María, 59 años – Pérdida de sensibilidad",
      quoteA:
        "“Empecé a sentir adormecimiento y me caía con frecuencia. Me dijeron que era la edad.”",
      quoteB:
        "“Aquí revisaron mis pies y el riesgo cardiovascular. Nadie lo había hecho antes.”",
      outcome: "Resultado: Más estabilidad al caminar y mayor tranquilidad.",
    },
    {
      title: "Carlos, 62 años – Heridas que no sanaban",
      quoteA:
        "“Las heridas tardaban semanas en cerrar. Pensé que era normal.”",
      quoteB:
        "“Me explicaron el riesgo real del pie diabético y cómo prevenirlo.”",
      outcome: "Resultado: Menos lesiones y mayor control del riesgo.",
    },
  ];

  return (
    <section id="casos" className="section">
      <div className="space-y-8">
        <div className="max-w-3xl space-y-3">
          <h2 className="text-3xl font-semibold text-emerald-900 sm:text-4xl">
            Historias reales de pacientes
          </h2>
          <p className="text-lg text-emerald-900/80">
            Testimonios reales y anónimos de personas con neuropatía diabética.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cases.map((item) => (
            <Card
              key={item.title}
              className="rounded-2xl border border-teal-200 bg-white shadow-sm transition hover:shadow-md"
            >
              <CardContent className="space-y-4 p-6">
                <Badge className="w-fit rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-teal-700">
                  Historia real
                </Badge>
                <h3 className="text-lg font-semibold text-emerald-900">
                  {item.title}
                </h3>
                <div className="space-y-3 text-sm text-emerald-900/80">
                  <p>{item.quoteA}</p>
                  <p>{item.quoteB}</p>
                </div>
                <hr className="border-teal-100" />
                <p className="text-sm font-semibold text-emerald-900">
                  {item.outcome}
                </p>
                <p className="text-xs text-emerald-900/60">
                  Testimonio real anonimizado
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="space-y-4 text-center">
          <p className="text-lg text-emerald-900/80">
            ¿Te identificas con alguna de estas historias? El dolor no es normal.
            Una evaluación a tiempo puede cambiarlo.
          </p>
          <Button
            size="lg"
            className="rounded-full bg-teal-700 text-white hover:bg-teal-600"
            asChild
          >
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noreferrer"
              data-analytics-event="whatsapp_click"
              data-analytics-label="stories_cta"
            >
              Hablar con el médico por WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
