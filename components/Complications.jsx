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
          <p className="text-lg text-emerald-900/80">
            La neuropatía diabética requiere un enfoque preventivo. Una
            evaluación oportuna puede evitar consecuencias severas en la calidad
            de vida.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {items.map((item) => (
            <Card key={item.title} className="bg-white/90 hover:shadow-md">
              <CardContent className="p-6">
                <div className="overflow-hidden rounded-xl">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={640}
                    height={420}
                    className="w-full h-44 object-cover object-center rounded-xl mb-4 bg-emerald-50/60"
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
