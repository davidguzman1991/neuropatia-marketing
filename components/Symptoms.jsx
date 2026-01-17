import Image from "next/image";
import { Card, CardContent } from "./ui/card";

export default function Symptoms() {
  const symptoms = [
    "🔥 Ardor o quemazón en pies y piernas",
    "⚡ Hormigueo que aparece al descansar",
    "🧊 Sensación de adormecimiento",
    "⚡ Dolor punzante o eléctrico",
    "🌙 Calambres nocturnos frecuentes",
    "⚖️ Pérdida de equilibrio o torpeza",
  ];

  return (
    <section id="sintomas" className="section">
      <div className="rounded-3xl bg-emerald-800/95 px-6 py-12 shadow-sm sm:px-10">
        <div className="grid items-start gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-center">
          <div className="space-y-6">
            <div className="max-w-3xl space-y-3">
              <h2 className="text-3xl font-semibold text-emerald-50 sm:text-4xl">
                Síntomas que requieren evaluación
              </h2>
              <p className="text-lg text-emerald-50/80">
                La neuropatía diabética suele iniciar de forma silenciosa. Reconocer
                estos síntomas puede ayudarte a actuar antes de que haya daño
                avanzado.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {symptoms.map((symptom) => (
                <Card
                  key={symptom}
                  className="border-emerald-100/80 bg-emerald-50/95 shadow-sm transition hover:shadow-md"
                >
                  <CardContent className="p-5">
                    <div className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-emerald-600" />
                      <p className="text-base font-medium text-emerald-900 leading-snug">
                        {symptom}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          <div className="hidden md:flex items-center justify-center">
            <Image
              src="/symptoms/sintomas-neuropatia-diabetica.webp"
              alt="Ilustración médica de síntomas de neuropatía diabética"
              width={800}
              height={800}
              className="rounded-2xl object-contain opacity-95 ring-1 ring-white/15"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
