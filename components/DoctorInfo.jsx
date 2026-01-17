import Image from "next/image";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import WhatsAppLink from "./WhatsAppLink";

const doctorHighlights = [
  "Años de experiencia clínica en casos altamente complejos.",
  "Atención centrada en el paciente y su familia.",
  "Especialista en diabetes y sus complicaciones.",
];

const mapHref = "https://maps.app.goo.gl/7J8v9V9RJHfxADfz7";
const mapEmbedSrc =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4153.625652300999!2d-78.48676963936665!3d-0.22142769279970304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59c665fcd2a59%3A0xcd0dd92d47bb41f2!2sHospital%20de%20Especialidades%20de%20la%20Ciudad!5e0!3m2!1ses!2sec!4v1705601078997!5m2!1ses!2sec";

function DoctorHighlightsList() {
  return (
    <ul className="space-y-3 text-sm text-emerald-900/70">
      {doctorHighlights.map((item) => (
        <li key={item} className="flex items-start gap-2">
          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-400" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function ConsultationDetails({ tone = "dark", compact = false }) {
  const isDark = tone === "dark";
  const wrapperClass = compact ? "space-y-4" : "space-y-5";
  const headingSize = compact ? "text-xl sm:text-2xl" : "text-2xl";
  const headingClass = isDark ? "text-emerald-50" : "text-emerald-900";
  const bodyClass = isDark
    ? compact
      ? "text-sm text-emerald-50/80 sm:text-base"
      : "text-base text-emerald-50/80 sm:text-lg"
    : compact
      ? "text-sm text-emerald-900/80 sm:text-base"
      : "text-base text-emerald-900/80 sm:text-lg";
  const mapButtonClass = isDark
    ? "w-full rounded-xl border-emerald-100 text-emerald-50 hover:bg-emerald-800 sm:w-fit"
    : "w-full rounded-xl border-emerald-100 text-emerald-900 hover:bg-emerald-50 sm:w-fit";
  const locationCardPadding = compact ? "p-4" : "p-5";
  const mapHeightClass = compact ? "h-[160px] sm:h-[200px]" : "h-[200px] sm:h-[220px]";
  const ctaButtonClass = compact ? "w-full sm:w-fit" : "w-fit";

  return (
    <div className={wrapperClass}>
      <h3 className={`${headingSize} font-semibold ${headingClass}`}>
        INFORMACION DE LA CONSULTA
      </h3>
      <p className={bodyClass}>
        Evaluamos tus síntomas, realizamos pruebas clínicas de sensibilidad
        y brindamos recomendaciones claras para mejorar tu calidad de vida.
      </p>
      <Card className="bg-emerald-50/95">
        <CardContent className={locationCardPadding}>
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
      <a href={mapHref} target="_blank" rel="noopener noreferrer" className="block">
        <div
          className={`relative w-full overflow-hidden rounded-xl border border-emerald-100/80 bg-white ${mapHeightClass}`}
        >
          <iframe
            src={mapEmbedSrc}
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
      <Button variant="outline" className={mapButtonClass} asChild>
        <a href={mapHref} target="_blank" rel="noreferrer">
          📍 Cómo llegar al consultorio
        </a>
      </Button>
      <Button
        size="lg"
        className={`${ctaButtonClass} rounded-full bg-emerald-500 text-white shadow-soft hover:bg-emerald-600`}
        asChild
      >
        <WhatsAppLink
          target="_blank"
          rel="noreferrer"
          data-analytics-event="whatsapp_click"
          data-analytics-label="doctor_cta"
        >
          Hablar con el médico
        </WhatsAppLink>
      </Button>
    </div>
  );
}

export default function DoctorInfo() {
  return (
    <section id="medico" className="section">
      <div className="rounded-3xl bg-teal-900/95 px-6 py-12 shadow-sm sm:px-10">
        <div className="space-y-6 md:hidden">
          <Card className="bg-white/95 shadow-lg ring-1 ring-black/5">
            <CardContent className="space-y-6 p-6">
              <div className="flex items-center gap-4">
                <div className="h-20 w-20 max-h-24 max-w-24 overflow-hidden rounded-full ring-1 ring-emerald-100/80">
                  <Image
                    src="/doctor/dr-david-guzman.webp"
                    alt="Dr. David Guzmán"
                    width={200}
                    height={240}
                    className="h-full w-full max-h-24 object-cover object-top"
                  />
                </div>
                <div className="space-y-1">
                  <Badge className="rounded-full border border-emerald-100/70 bg-emerald-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-emerald-700">
                    MÉDICO ESPECIALISTA
                  </Badge>
                  <h2 className="text-2xl font-semibold tracking-tight text-emerald-900">
                    Dr. David Guzmán P.
                  </h2>
                  <p className="text-xs font-semibold text-emerald-700/80">
                    Atención centrada en el alivio del dolor neuropático
                  </p>
                  <p className="text-sm text-emerald-900/70">
                    Endocrinología clínica - Especialista en Diabetes
                  </p>
                </div>
              </div>
              <p className="text-sm text-emerald-900/70">
                Protocolos actualizados de manejo del dolor neuropático.
              </p>
              <Accordion
                type="single"
                collapsible
                className="rounded-xl border border-emerald-100/80 px-4"
              >
                <AccordionItem value="perfil" className="border-emerald-100/80">
                  <AccordionTrigger className="text-emerald-900">
                    Ver perfil profesional
                  </AccordionTrigger>
                  <AccordionContent className="pt-2">
                    <DoctorHighlightsList />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Button
                size="lg"
                className="w-full rounded-full bg-emerald-500 text-white shadow-soft hover:bg-emerald-600"
                asChild
              >
                <WhatsAppLink
                  target="_blank"
                  rel="noreferrer"
                  data-analytics-event="whatsapp_click"
                  data-analytics-label="doctor_mobile_cta"
                >
                  Hablar con el médico
                </WhatsAppLink>
              </Button>
            </CardContent>
          </Card>
          <Card className="bg-white/95 shadow-lg ring-1 ring-black/5">
            <CardContent className="p-6">
              <ConsultationDetails tone="light" compact />
            </CardContent>
          </Card>
        </div>
        <div className="hidden md:block">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <Card className="bg-white/95 shadow-lg ring-1 ring-black/5">
              <CardContent className="p-8">
                <div className="mb-6 h-[260px] w-full max-h-[340px] overflow-hidden rounded-t-xl sm:h-[300px] lg:h-[340px]">
                  <Image
                    src="/doctor/dr-david-guzman.webp"
                    alt="Dr. David Guzmán"
                    width={400}
                    height={500}
                    className="h-full w-full max-h-[340px] object-cover object-top"
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
                  <DoctorHighlightsList />
                  <p className="text-xs text-emerald-900/60">
                    Protocolos actualizados de manejo del dolor neuropático.
                  </p>
                </div>
              </CardContent>
            </Card>
            <ConsultationDetails />
          </div>
        </div>
      </div>
    </section>
  );
}
