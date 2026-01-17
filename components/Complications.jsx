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
      <div className="space-y-6">
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
        <div className="flex gap-4 overflow-x-auto px-4 pb-4 snap-x snap-mandatory -mx-4 md:mx-0 md:grid md:grid-cols-2 md:overflow-visible md:px-0 md:pb-0 md:snap-none">
          {items.map((item) => (
            <Card
              key={item.title}
              className="min-w-[75%] shrink-0 snap-center bg-white/90 sm:min-w-[65%] md:min-w-0 md:snap-none"
            >
              <CardContent className="p-5 sm:p-6">
                <div className="overflow-hidden rounded-xl">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={640}
                    height={420}
                    className="mb-4 h-36 w-full max-h-52 rounded-xl object-cover object-center bg-emerald-50/60 sm:h-44 sm:max-h-48"
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
      </div>
    </section>
  );
}
