"use client";

import Image from "next/image";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import WhatsAppLink from "./WhatsAppLink";

export default function Hero() {
  const scrollToSection = (ids) => {
    if (typeof document === "undefined") {
      return;
    }

    const targets = Array.isArray(ids) ? ids : [ids];
    for (const id of targets) {
      const target = document.getElementById(id);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
        break;
      }
    }
  };

  return (
    <section id="inicio" className="section">
      <div className="rounded-3xl bg-[radial-gradient(900px_circle_at_15%_0%,rgba(255,255,255,0.12),transparent_45%),linear-gradient(135deg,#0b3f3d_0%,#0f4f4a_48%,#0a3a39_100%)] p-8 shadow-sm ring-1 ring-emerald-900/30 sm:p-10">
        <div className="space-y-5 md:hidden">
          <Badge className="gap-2 rounded-full border border-emerald-200/40 bg-white/10 px-4 py-2 text-xs font-semibold text-emerald-50">
            NEUROPATIA DIABETICA
          </Badge>
          <h1 className="text-3xl font-semibold text-emerald-50">
            Dolor, ardor u hormigueo en los pies no es normal.
          </h1>
          <p className="text-sm text-emerald-50/80">
            Evaluamos neuropatía diabética con enfoque preventivo para aliviar el dolor y evitar complicaciones.
          </p>
          <Button
            size="lg"
            className="w-full rounded-full bg-emerald-400 text-emerald-950 shadow-soft hover:bg-emerald-300"
            type="button"
            onClick={() => scrollToSection("test")}
          >
            Hacer test gratuito (1 minuto)
          </Button>
          <button
            type="button"
            onClick={() => scrollToSection(["precio", "precios", "ubicacion"])}
            className="text-left text-sm font-semibold text-emerald-50/80 underline"
          >
            Ver precio y ubicación
          </button>
          <div className="overflow-hidden rounded-2xl ring-1 ring-white/10 shadow-soft">
            <Image
              src="/hero/neuropatia-hero-medico.webp"
              alt="Evaluación médica de neuropatía diabética"
              width={900}
              height={1200}
              className="h-44 w-full object-cover object-center"
            />
          </div>
        </div>

        <div className="hidden items-center gap-12 md:grid lg:grid-cols-2 lg:gap-16">
          <div className="space-y-6">
            <Badge className="gap-2 rounded-full border border-emerald-200/40 bg-white/10 px-4 py-2 text-sm font-semibold text-emerald-50">
              NEUROPATIA DIABETICA
            </Badge>
            <h1 className="text-4xl font-semibold text-emerald-50 sm:text-5xl">
              Dolor, ardor u hormigueo en los pies no es normal.
            </h1>
            <p className="text-base text-emerald-50/80 sm:text-lg">
              Evaluamos neuropatía diabética con enfoque preventivo y acompañamiento
              clínico cercano. Si ya presentas molestias, una valoración temprana
              puede ayudarte a evitar complicaciones.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                size="lg"
                className="rounded-full bg-emerald-400 text-emerald-950 shadow-soft hover:bg-emerald-300"
                asChild
              >
                <WhatsAppLink
                  target="_blank"
                  rel="noreferrer"
                  location="hero"
                  data-analytics-event="whatsapp_click"
                  data-analytics-label="hero_cta"
                >
                  Agendar por WhatsApp
                </WhatsAppLink>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-emerald-200/60 text-emerald-50 hover:bg-white/10"
                asChild
              >
                <a href="#sintomas">Ver síntomas</a>
              </Button>
            </div>
            <div className="flex flex-wrap gap-3 text-sm">
              <Badge className="rounded-full border border-emerald-200/40 bg-white/10 px-3 py-1 text-emerald-50">
                Atención prioritaria disponible
              </Badge>
              <Badge className="rounded-full border border-emerald-200/40 bg-white/10 px-3 py-1 text-emerald-50">
                Consulta clara y sin prisas
              </Badge>
            </div>
          </div>
          <div className="hidden md:flex items-center justify-center">
            <Image
              src="/hero/neuropatia-hero-medico.webp"
              alt="Evaluación médica de neuropatía diabética"
              width={900}
              height={1200}
              priority
              className="h-[420px] w-full max-h-[520px] rounded-2xl object-cover drop-shadow-sm lg:h-[520px]"
            />
          </div>
          <div className="space-y-6 lg:col-span-2">
            <a href="#precios" className="block">
              <Card className="border-emerald-100/80 bg-white/95">
                <CardContent className="p-6">
                  <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
                    Prioridad en agenda
                  </p>
                  <p className="mt-2 text-xl font-semibold text-emerald-900">
                    Valoración prioritaria desde $45
                  </p>
                  <p className="mt-2 text-sm text-emerald-900/80">
                    Cupos limitados cada semana para pacientes con síntomas activos.
                  </p>
                </CardContent>
              </Card>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
