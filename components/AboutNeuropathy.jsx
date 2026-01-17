import { Card, CardContent } from "./ui/card";

export default function AboutNeuropathy() {
  return (
    <section id="que-es" className="section">
      <div className="rounded-3xl bg-gradient-to-br from-emerald-50 via-teal-50 to-sky-50 p-8 shadow-sm ring-1 ring-emerald-100/70 sm:p-10">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-5">
            <h2 className="text-3xl font-semibold text-emerald-900 sm:text-4xl">
              ¿Qué es la neuropatía diabética?
            </h2>
            <p className="text-base text-emerald-900/80 sm:text-lg">
              Es una lesión progresiva de los nervios causada por niveles altos de
              glucosa sostenidos en el tiempo. Puede afectar la sensibilidad,
              generar dolor y disminuir la movilidad.
            </p>
            <p className="text-base text-emerald-900/80 sm:text-lg">
              Una valoración médica permite determinar el grado de afectación y
              establecer un plan para controlar el dolor y prevenir lesiones.
            </p>
          </div>
          <Card className="bg-white/95">
            <CardContent className="p-6">
              <h3 className="text-2xl font-semibold text-emerald-900">
                En la consulta revisamos
              </h3>
              <ul className="mt-4 space-y-3 text-base text-emerald-900/80">
                {[
                  "Historia clínica y control metabólico",
                  "Exploración de sensibilidad y reflejos",
                  "Evaluación de pies y calzado",
                  "Recomendaciones de cuidado diario",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-emerald-400" />
                    <span>{item}</span>
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
