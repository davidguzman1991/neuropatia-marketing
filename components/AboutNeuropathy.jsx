import { Card, CardContent } from "./ui/card";

export default function AboutNeuropathy() {
  return (
    <section id="que-es" className="section">
      <div className="min-w-0 rounded-2xl border-2 border-slate-300/70 bg-gradient-to-br from-white via-slate-50/60 to-slate-100/80 p-4 shadow-mobile-card sm:rounded-3xl sm:border-emerald-100/80 sm:border sm:p-6 sm:shadow-md md:border-0 md:bg-gradient-to-br md:from-emerald-50 md:via-teal-50 md:to-sky-50 md:p-10 md:ring-1 md:ring-emerald-100/70">
        <div className="grid min-w-0 gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
          <div className="min-w-0 space-y-4 sm:space-y-5">
            <h2 className="text-2xl font-bold text-emerald-900 sm:text-3xl md:text-4xl">
              ¿Qué es la neuropatía diabética?
            </h2>
            <p className="text-sm leading-relaxed text-emerald-900/85 sm:text-base md:text-lg">
              Es una lesión progresiva de los nervios causada por niveles altos de
              glucosa sostenidos en el tiempo. Puede afectar la sensibilidad,
              generar dolor y disminuir la movilidad.
            </p>
            <p className="text-sm leading-relaxed text-emerald-900/85 sm:text-base md:text-lg">
              Una valoración médica permite determinar el grado de afectación y
              establecer un plan para controlar el dolor y prevenir lesiones.
            </p>
          </div>
          <Card className="w-full min-w-0 border-emerald-100/80 bg-white/95 sm:border">
            <CardContent className="p-4 sm:p-5 md:p-6">
              <h3 className="text-xl font-bold text-emerald-900 sm:text-2xl">
                En la consulta revisamos
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-emerald-900/85 sm:text-base">
                {[
                  "Historia clínica y control metabólico",
                  "Exploración de sensibilidad y reflejos",
                  "Evaluación de pies y calzado",
                  "Recomendaciones de cuidado diario",
                ].map((item) => (
                  <li key={item} className="flex min-w-0 items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-emerald-500" />
                    <span className="break-words">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
