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
      <div className="min-w-0 rounded-2xl sm:rounded-3xl bg-[linear-gradient(145deg,#064e3b_0%,#065f46_40%,#047857_100%)] px-4 py-8 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.08)] ring-2 ring-emerald-900/30 sm:px-6 sm:py-10 md:px-10 md:py-12">
        <div className="grid min-w-0 items-start gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center md:gap-10">
          <div className="min-w-0 space-y-5 sm:space-y-6">
            <div className="max-w-3xl space-y-2 sm:space-y-3">
              <h2 className="text-2xl font-bold text-emerald-50 sm:text-3xl md:text-4xl">
                Síntomas que requieren evaluación
              </h2>
              <p className="text-sm leading-relaxed text-emerald-100/90 sm:text-base md:text-lg">
                La neuropatía diabética suele iniciar de forma silenciosa. Reconocer
                estos síntomas puede ayudarte a actuar antes de que haya daño
                avanzado.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
              {symptoms.map((symptom) => (
                <Card
                  key={symptom}
                  className="w-full border-emerald-200/60 bg-white/95 sm:border-emerald-100/80"
                >
                  <CardContent className="p-4 sm:p-5">
                    <div className="flex min-w-0 items-start gap-3">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-emerald-500 shadow-sm" />
                      <p className="min-w-0 break-words text-sm font-medium text-emerald-900 leading-snug sm:text-base">
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
              className="h-[320px] w-full max-h-[360px] rounded-2xl object-cover opacity-95 ring-1 ring-white/15 lg:h-[380px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
