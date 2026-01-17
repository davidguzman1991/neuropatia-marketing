import Image from "next/image";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { WHATSAPP_HREF } from "./WhatsAppButton";

export default function DoctorInfo() {
  return (
    <section id="medico" className="section">
      <div className="rounded-3xl bg-teal-900/95 px-6 py-12 shadow-sm sm:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Card className="bg-white/95 shadow-lg ring-1 ring-black/5">
            <CardContent className="p-8">
              <div className="w-full h-[340px] overflow-hidden rounded-t-xl mb-6">
                <Image
                  src="/doctor/dr-david-guzman.webp"
                  alt="Dr. David Guzmán"
                  width={400}
                  height={500}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="space-y-4">
                <div>
                  <Badge className="rounded-full border border-emerald-100/70 bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-700">
                    MÉDICO ESPECIALISTA
                  </Badge>
                  <h2 className="mt-3 text-3xl font-semibold text-emerald-900">
                    Dr. David Guzmán P.
                  </h2>
                  <div className="my-4 h-px w-full bg-gradient-to-r from-transparent via-emerald-200/80 to-transparent" />
                  <p className="text-sm text-emerald-900/70">
                    Endocrinología clínica - Especialista en Diabetes
                  </p>
                </div>
                <ul className="space-y-2 text-sm text-emerald-900/70">
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    <span>Años de experiencia clínica en casos altamente complejos.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    <span>Atención centrada en el paciente y su familia.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    <span>Especialista en diabetes y sus complicaciones.</span>
                  </li>
                </ul>
                <p className="text-xs text-emerald-900/60">
                  Protocolos actualizados de manejo del dolor neuropático.
                </p>
              </div>
            </CardContent>
          </Card>
          <div className="space-y-5">
            <h3 className="text-2xl font-semibold text-emerald-50">
              INFORMACION DE LA CONSULTA
            </h3>
            <p className="text-lg text-emerald-50/80">
              Evaluamos tus síntomas, realizamos pruebas clínicas de sensibilidad
              y brindamos recomendaciones claras para mejorar tu calidad de vida.
            </p>
            <Card className="bg-emerald-50/95">
              <CardContent className="p-5">
                <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
                  Ubicación
                </p>
                <p className="mt-2 text-base text-emerald-900/80">
                  Hospital de Especialidades de la Ciudad · Torre Sur . Consultorio 204
                </p>
                <p className="text-base text-emerald-900/80">
                  Lunes a sábado · 8:00 - 18:00 ATENCION PREVIA CITA
                </p>
              </CardContent>
            </Card>
            <a
              href="https://maps.app.goo.gl/7J8v9V9RJHfxADfz7"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="relative w-full h-[220px] rounded-xl border border-emerald-100/80 overflow-hidden bg-white">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4153.625652300999!2d-78.48676963936665!3d-0.22142769279970304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59c665fcd2a59%3A0xcd0dd92d47bb41f2!2sHospital%20de%20Especialidades%20de%20la%20Ciudad!5e0!3m2!1ses!2sec!4v1705601078997!5m2!1ses!2sec"
                  width="100%"
                  height="100%"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa del Hospital de Especialidades de la Ciudad"
                />
                <div className="absolute inset-0" aria-hidden="true" />
              </div>
            </a>
            <Button
              variant="outline"
              className="w-fit rounded-xl border-emerald-100 text-emerald-50 hover:bg-emerald-800"
              asChild
            >
              <a
                href="https://maps.app.goo.gl/7J8v9V9RJHfxADfz7"
                target="_blank"
                rel="noreferrer"
              >
                📍 Cómo llegar al consultorio
              </a>
            </Button>
            <Button
              size="lg"
              className="w-fit rounded-full bg-emerald-500 text-white shadow-soft hover:bg-emerald-600"
              asChild
            >
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noreferrer"
                data-analytics-event="whatsapp_click"
                data-analytics-label="doctor_cta"
              >
                Hablar con el médico
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
