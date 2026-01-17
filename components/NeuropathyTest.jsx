"use client";

import { useMemo, useState } from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

const QUESTIONS = [
  "¿Sientes adormecimiento en pies o manos?",
  "¿El dolor o ardor empeora durante la noche?",
  "¿Has notado heridas que tardan en sanar?",
  "¿Sientes calambres o debilidad al caminar?",
  "¿Has perdido sensibilidad al tacto o temperatura?",
];

export default function NeuropathyTest() {
  // Estado local para respuestas; no se guarda ni se envía.
  const [answers, setAnswers] = useState(
    Array.from({ length: QUESTIONS.length }, () => null)
  );

  const yesCount = useMemo(
    () => answers.filter((answer) => answer === true).length,
    [answers]
  );

  const answeredCount = useMemo(
    () => answers.filter((answer) => answer !== null).length,
    [answers]
  );

  const riskInfo = useMemo(() => {
    if (yesCount <= 1) {
      return {
        level: "bajo",
        label: "Riesgo bajo",
        title: "Riesgo bajo de neuropatía diabética",
        message:
          "Por el momento no se identifican signos claros de neuropatía. Sin embargo, una evaluación preventiva permite detectar cambios tempranos y cuidar la salud de tus pies.",
        cta: "Agendar evaluación preventiva",
        badgeClass: "border-green-500 bg-green-100 text-green-700",
      };
    }
    if (yesCount <= 3) {
      return {
        level: "moderado",
        label: "Riesgo moderado",
        title: "Posibles signos de neuropatía diabética",
        message:
          "Algunos síntomas sugieren alteración de la sensibilidad. Una valoración médica puede ayudarte a prevenir complicaciones y mejorar tu calidad de vida.",
        cta: "Solicitar valoración médica",
        badgeClass: "border-orange-500 bg-orange-100 text-orange-700",
      };
    }
    return {
      level: "alto",
      label: "Riesgo alto",
      title: "Alto riesgo de neuropatía diabética",
      message:
        "Los síntomas reportados sugieren un riesgo elevado. Se recomienda una valoración médica prioritaria para evitar complicaciones mayores.",
      cta: "Agendar valoración prioritaria",
      badgeClass: "border-red-500 bg-red-100 text-red-700",
    };
  }, [yesCount]);

  const shareMessage = useMemo(() => {
    const messages = {
      bajo: [
        "Hola doctor, realicé el test de neuropatía diabética en su página.",
        "El resultado fue RIESGO BAJO.",
        "Me gustaría agendar una evaluación preventiva para cuidar la salud de mis pies.",
      ],
      moderado: [
        "Hola doctor, realicé el test de neuropatía diabética en su página.",
        "El resultado fue RIESGO MODERADO.",
        "Quisiera una valoración médica para revisar estos síntomas.",
      ],
      alto: [
        "Hola doctor, realicé el test de neuropatía diabética en su página.",
        "El resultado fue RIESGO ALTO.",
        "Quisiera agendar una valoración prioritaria.",
      ],
    };

    return messages[riskInfo.level].join("\n");
  }, [riskInfo.level]);

  const shareHref = useMemo(
    () => `https://wa.me/?text=${encodeURIComponent(shareMessage)}`,
    [shareMessage]
  );

  const isPending = answeredCount === 0;

  const displayInfo = useMemo(() => {
    if (answeredCount === 0) {
      return {
        badge: "⚪ Evaluación en proceso",
        badgeClass: "border-emerald-200/70 bg-emerald-100 text-emerald-700",
        title: "Aún no evaluable",
        message:
          "Responde las preguntas para obtener una orientación inicial sobre tus síntomas. Este test es informativo y no reemplaza una consulta médica.",
        cta: "🔒 Completa el test para continuar",
      };
    }

    return {
      badge: riskInfo.label,
      badgeClass: riskInfo.badgeClass,
      title: riskInfo.title,
      message: riskInfo.message,
      cta: riskInfo.cta,
    };
  }, [answeredCount, riskInfo]);

  const handleAnswer = (index, value) => {
    setAnswers((current) => {
      const updated = [...current];
      updated[index] = value;
      return updated;
    });
  };

  return (
    <section id="test" className="section">
      <div className="rounded-3xl bg-emerald-800/95 p-8 shadow-soft">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h2 className="text-3xl font-semibold text-emerald-50 sm:text-4xl">
              Test rápido de neuropatía
            </h2>
            <p className="mt-3 text-lg text-emerald-50/80">
              Responde con sí o no. No guardamos tus respuestas ni compartimos
              información.
            </p>
            <div className="mt-6 space-y-5">
              {QUESTIONS.map((question, index) => (
                <Card key={question} className="border border-emerald-100/80 bg-emerald-50/95">
                  <CardContent className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-base text-emerald-900/90">{question}</p>
                    <div className="flex gap-3">
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => handleAnswer(index, true)}
                        data-analytics-event="test_interaction"
                        data-analytics-label={`answer_yes_${index + 1}`}
                        className={`rounded-full ${
                          answers[index] === true
                            ? "bg-emerald-600 text-white hover:bg-emerald-700"
                            : "border-emerald-300 text-emerald-700 hover:bg-emerald-50"
                        }`}
                        aria-pressed={answers[index] === true}
                      >
                        Sí
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => handleAnswer(index, false)}
                        data-analytics-event="test_interaction"
                        data-analytics-label={`answer_no_${index + 1}`}
                        className={`rounded-full ${
                          answers[index] === false
                            ? "bg-rose-500 text-white hover:bg-rose-600 border-rose-500"
                            : "border-rose-300 text-rose-600 hover:bg-rose-50"
                        }`}
                        aria-pressed={answers[index] === false}
                      >
                        No
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          <Card className="bg-emerald-50/90">
            <CardContent className="p-6">
              <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
                Resultado orientativo
              </p>
              <Badge
                className={`mt-4 w-full justify-center rounded-2xl border-2 px-5 py-3 text-lg font-semibold sm:text-xl ${displayInfo.badgeClass}`}
              >
                {displayInfo.badge}
              </Badge>
              <h3 className="mt-4 text-xl font-semibold text-emerald-900 sm:text-2xl">
                {displayInfo.title}
              </h3>
              <p className="mt-3 text-base text-emerald-900/80 sm:text-lg">
                {displayInfo.message}
              </p>
              {!isPending && (
                <p className="mt-4 text-sm text-emerald-900/70">
                  Este test es informativo y no reemplaza una consulta médica.
                </p>
              )}
              {isPending ? (
                <Button
                  type="button"
                  size="lg"
                  className="mt-6 w-full rounded-full bg-emerald-100 text-emerald-700/60 hover:bg-emerald-100"
                  disabled
                >
                  {displayInfo.cta}
                </Button>
              ) : (
                <Button
                  type="button"
                  size="lg"
                  className="mt-6 w-full rounded-full bg-emerald-600 text-white hover:bg-emerald-700"
                  asChild
                >
                  <a
                    href={shareHref}
                    target="_blank"
                    rel="noreferrer"
                    data-analytics-event="whatsapp_click"
                    data-analytics-label="test_share"
                  >
                    {displayInfo.cta}
                  </a>
                </Button>
              )}
              <p className="mt-3 text-xs text-emerald-900/70">
                La neuropatía diabética puede ser silenciosa en etapas iniciales.
              </p>
              <p className="mt-4 text-xs text-emerald-900/70">
                Preguntas respondidas: {answeredCount}/{QUESTIONS.length}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
