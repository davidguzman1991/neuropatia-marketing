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
      <div className="min-w-0 space-y-5 sm:space-y-6">
        <div className="max-w-3xl space-y-2 sm:space-y-3">
          <h2 className="text-2xl font-bold text-emerald-900 sm:text-3xl md:text-4xl">
            Complicaciones que podemos prevenir
          </h2>
          <p className="text-sm leading-relaxed text-emerald-900/85 sm:text-base md:text-lg">
            La neuropatía diabética requiere un enfoque preventivo. Una
            evaluación oportuna puede evitar consecuencias severas en la calidad
            de vida.
          </p>
        </div>
        <div className="space-y-3 sm:space-y-4">
          <p className="flex items-center justify-end gap-1 text-xs font-semibold text-emerald-700/70 md:hidden">
            <span className="inline-block animate-pulse">←</span> Desliza
          </p>
          <div className="relative -mx-4 sm:mx-0 md:grid md:grid-cols-2 md:gap-4 md:overflow-visible">
            <div className="flex gap-4 overflow-x-auto px-4 pb-2 snap-x snap-mandatory scroll-smooth sm:px-0 md:grid md:grid-cols-2 md:overflow-visible md:snap-none [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {items.map((item) => (
                <Card
                  key={item.title}
                  className="w-[85%] min-w-[280px] max-w-[340px] shrink-0 snap-center border-emerald-200/70 bg-white/95 sm:w-[75%] md:w-full md:min-w-0 md:max-w-none md:snap-none"
                >
                  <CardContent className="flex min-h-0 flex-col p-4 sm:p-5 md:p-6">
                    <div className="min-h-0 overflow-hidden rounded-xl">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={640}
                        height={420}
                        className="mb-3 h-28 w-full rounded-xl object-cover object-center bg-slate-100 sm:mb-4 sm:h-36 md:h-40"
                      />
                    </div>
                    <h3 className="text-lg font-bold text-emerald-900 sm:text-xl">
                      {item.title}
                    </h3>
                    <p className="mt-2 min-w-0 flex-1 break-words text-sm text-emerald-900/85 sm:text-base">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
