import Image from "next/image";
import { Card, CardContent } from "./ui/card";

export default function Complications() {
  const items = [
    {
      title: "Úlceras neuropáticas",
      image: "/complicaciones/ulceras-presion.webp",
      description:
        "La falta de sensibilidad facilita heridas que no se perciben a tiempo.",
    },
    {
      title: "Infecciones recurrentes",
      image: "/complicaciones/infecciones-pie.webp",
      description:
        "Las heridas abiertas pueden infectarse y requerir tratamientos prolongados.",
    },
    {
      title: "Pie de Charcot",
      image: "/complicaciones/pie-charcot.webp",
      description:
        "Inflamación y deformidad del pie por daños en huesos y articulaciones.",
    },
    {
      title: "Riesgo de amputación",
      image: "/complicaciones/riesgo-amputacion.webp",
      description:
        "El cuidado temprano reduce drásticamente la probabilidad de cirugía mayor.",
    },
  ];

  return (
    <section id="complicaciones" className="section">
      <div className="space-y-6 rounded-3xl border border-emerald-100/80 bg-white/95 p-6 shadow-sm sm:border-0 sm:bg-transparent sm:p-0 sm:shadow-none">
        <div className="max-w-3xl space-y-3">
          <h2 className="text-3xl font-semibold text-emerald-900 sm:text-4xl">
            Complicaciones que podemos prevenir
          </h2>
          <p className="text-base text-emerald-900/80 sm:text-lg">
            La neuropatía diabética requiere un enfoque preventivo. Una
            evaluación oportuna puede evitar consecuencias severas en la calidad
            de vida.
          </p>
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-end text-xs font-semibold text-emerald-700/60 md:hidden">
            Desliza &gt;
          </div>
          <div className="relative">
            <div className="flex gap-4 overflow-x-auto -mx-6 px-6 pb-4 snap-x snap-mandatory scroll-px-6 sm:mx-0 sm:px-0 md:grid md:grid-cols-2 md:overflow-visible md:pb-0 md:snap-none">
              {items.map((item) => (
                <Card
                  key={item.title}
                  className="min-w-[72%] max-w-[320px] shrink-0 snap-center bg-white/90 sm:min-w-[60%] md:min-w-0 md:max-w-none md:snap-none"
                >
                  <CardContent className="p-5 sm:p-6">
                    <div className="overflow-hidden rounded-xl">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={640}
                        height={420}
                        className="mb-4 h-32 w-full max-h-40 rounded-xl object-cover object-center bg-emerald-50/60 sm:h-40 sm:max-h-48"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-emerald-900">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-base text-emerald-900/80">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="pointer-events-none absolute right-0 top-0 h-full w-8 bg-gradient-to-l from-white to-transparent md:hidden" />
          </div>
        </div>
      </div>
    </section>
  );
}
