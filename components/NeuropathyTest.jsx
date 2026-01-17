"use client";

import { useMemo, useRef, useState } from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import WhatsAppLink from "./WhatsAppLink";

const QUESTIONS = [
  "¿Sientes adormecimiento en pies o manos?",
  "¿El dolor o ardor empeora durante la noche?",
  "¿Has notado heridas que tardan en sanar?",
  "¿Sientes calambres o debilidad al caminar?",
  "¿Has perdido sensibilidad al tacto o temperatura?",
];
const MOBILE_QUESTIONS = QUESTIONS.slice(0, 3);

export default function NeuropathyTest() {
  // Estado local para respuestas; no se guarda ni se envía.
  const [answers, setAnswers] = useState(
    Array.from({ length: QUESTIONS.length }, () => null)
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mobileAnswers, setMobileAnswers] = useState(
    Array.from({ length: MOBILE_QUESTIONS.length }, () => null)
  );
  const [mobileIndex, setMobileIndex] = useState(0);
  const advanceTimeoutRef = useRef(null);

  const yesCount = useMemo(
    () => answers.filter((answer) => answer === true).length,
    [answers]
  );

  const answeredCount = useMemo(
    () => answers.filter((answer) => answer !== null).length,
    [answers]
  );
  const mobileAnsweredCount = useMemo(
    () => mobileAnswers.filter((answer) => answer !== null).length,
    [mobileAnswers]
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

  const shareMessageEncoded = useMemo(
    () => encodeURIComponent(shareMessage),
    [shareMessage]
  );

  const isComplete = answeredCount === QUESTIONS.length;
  const isPending = !isComplete;
  const isMobileComplete = mobileAnsweredCount === MOBILE_QUESTIONS.length;

  const displayInfo = useMemo(() => {
    if (!isComplete) {
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
  }, [isComplete, riskInfo]);

  const handleAnswer = (index, value) => {
    setAnswers((current) => {
      const updated = [...current];
      updated[index] = value;
      return updated;
    });

    if (advanceTimeoutRef.current) {
      clearTimeout(advanceTimeoutRef.current);
    }

    if (index === currentIndex && index < QUESTIONS.length - 1) {
      advanceTimeoutRef.current = setTimeout(() => {
        setCurrentIndex(index + 1);
      }, 300);
    }
  };

  const handleMobileAnswer = (index, value) => {
    setMobileAnswers((current) => {
      const updated = [...current];
      updated[index] = value;
      return updated;
    });

    if (advanceTimeoutRef.current) {
      clearTimeout(advanceTimeoutRef.current);
    }

    if (index === mobileIndex && index < MOBILE_QUESTIONS.length - 1) {
      advanceTimeoutRef.current = setTimeout(() => {
        setMobileIndex(index + 1);
      }, 300);
    }
  };

  const renderQuestionCard = (question, index, activeAnswers, onAnswer) => {
    const isYesSelected = activeAnswers[index] === true;
    const isNoSelected = activeAnswers[index] === false;

    return (
      <Card key={question} className="border border-emerald-100/80 bg-emerald-50/95">
        <CardContent className="flex flex-col gap-4 p-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="min-w-0 text-base text-emerald-900/90 break-words sm:flex-1">
            {question}
          </p>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => onAnswer(index, true)}
              data-analytics-event="test_interaction"
              data-analytics-label={`answer_yes_${index + 1}`}
              className={`w-full rounded-full border-2 sm:w-auto ${
                isYesSelected
                  ? "border-emerald-600 bg-emerald-600 text-white ring-2 ring-emerald-200"
                  : "border-emerald-300 text-emerald-700 hover:bg-emerald-50"
              }`}
              aria-pressed={isYesSelected}
            >
              Sí
            </Button>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => onAnswer(index, false)}
              data-analytics-event="test_interaction"
              data-analytics-label={`answer_no_${index + 1}`}
              className={`w-full rounded-full border-2 sm:w-auto ${
                isNoSelected
                  ? "border-rose-500 bg-rose-500 text-white ring-2 ring-rose-200"
                  : "border-rose-300 text-rose-600 hover:bg-rose-50"
              }`}
              aria-pressed={isNoSelected}
            >
              No
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <section id="test" className="section">
      <div className="rounded-3xl bg-emerald-800/95 p-6 shadow-soft sm:p-8">
        <div className="space-y-6 md:hidden">
          <h2 className="text-3xl font-semibold text-emerald-50">
            Test rápido de neuropatía
          </h2>
          <p className="text-base text-emerald-50/80">
            Responde con sí o no. No guardamos tus respuestas ni compartimos
            información.
          </p>
          <div className="space-y-4">
            <div className="flex items-center justify-between text-xs text-emerald-50/70">
              <span>
                Pregunta {mobileIndex + 1} de {MOBILE_QUESTIONS.length}
              </span>
              <span>
                Progreso {mobileAnsweredCount}/{MOBILE_QUESTIONS.length}
              </span>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-emerald-900/40">
              <div
                className="h-full rounded-full bg-emerald-300/80 transition-all duration-300 ease-in-out"
                style={{
                  width: `${((mobileIndex + 1) / MOBILE_QUESTIONS.length) * 100}%`,
                }}
              />
            </div>
            {renderQuestionCard(
              MOBILE_QUESTIONS[mobileIndex],
              mobileIndex,
              mobileAnswers,
              handleMobileAnswer
            )}
          </div>
          {isMobileComplete && (
            <Button
              size="lg"
              className="w-full rounded-full bg-emerald-400 text-emerald-950 shadow-soft hover:bg-emerald-300"
              asChild
            >
              <WhatsAppLink
                target="_blank"
                rel="noreferrer"
                data-analytics-event="whatsapp_click"
                data-analytics-label="test_mobile_cta"
              >
                Agendar por WhatsApp
              </WhatsAppLink>
            </Button>
          )}
        </div>

        <div className="hidden gap-6 sm:gap-8 md:grid lg:grid-cols-[1.2fr_0.8fr]">
          <div className="min-w-0">
            <h2 className="text-3xl font-semibold text-emerald-50 sm:text-4xl">
              Test rápido de neuropatía
            </h2>
            <p className="mt-3 text-base text-emerald-50/80 sm:text-lg">
              Responde con sí o no. No guardamos tus respuestas ni compartimos
              información.
            </p>
            <div className="mt-6 space-y-6">
              <div className="space-y-5">
                {QUESTIONS.map((question, index) =>
                  renderQuestionCard(question, index, answers, handleAnswer)
                )}
              </div>
            </div>
          </div>
          <Card className="min-w-0 bg-emerald-50/90">
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
                  <WhatsAppLink
                    message={shareMessageEncoded}
                    target="_blank"
                    rel="noreferrer"
                    data-analytics-event="whatsapp_click"
                    data-analytics-label="test_share"
                  >
                    {displayInfo.cta}
                  </WhatsAppLink>
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
