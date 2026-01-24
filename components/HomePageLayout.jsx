"use client";

import { useEffect, useState } from "react";
import AboutNeuropathy from "./AboutNeuropathy";
import Complications from "./Complications";
import DoctorInfo from "./DoctorInfo";
import Hero from "./Hero";
import NeuropathyTest from "./NeuropathyTest";
import Pricing from "./Pricing";
import SuccessCases from "./SuccessCases";
import Symptoms from "./Symptoms";
import { Separator } from "./ui/separator";

const MOBILE_MEDIA_QUERY = "(max-width: 767px)";

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const mediaQuery = window.matchMedia(MOBILE_MEDIA_QUERY);
    const update = () => setIsMobile(mediaQuery.matches);

    update();
    mediaQuery.addEventListener("change", update);
    return () => mediaQuery.removeEventListener("change", update);
  }, []);

  return isMobile;
}

export default function HomePageLayout() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="flex min-w-0 flex-col">
        <Hero />
        <NeuropathyTest />
        <Symptoms />
        <AboutNeuropathy />
        <Complications />
        <SuccessCases />
        <span id="precio" className="sr-only" />
        <Pricing />
        <span id="ubicacion" className="sr-only" />
        <DoctorInfo />
      </div>
    );
  }

  return (
    <div className="flex min-w-0 flex-col">
      <Hero />
      <div className="py-8 sm:py-10">
        <Separator />
      </div>
      <Symptoms />
      <div className="py-8 sm:py-10">
        <Separator />
      </div>
      <AboutNeuropathy />
      <Complications />
      <div className="py-8 sm:py-10">
        <Separator />
      </div>
      <SuccessCases />
      <div className="py-8 sm:py-10">
        <Separator />
      </div>
      <NeuropathyTest />
      <span id="precio" className="sr-only" />
      <Pricing />
      <div className="py-8 sm:py-10">
        <Separator />
      </div>
      <span id="ubicacion" className="sr-only" />
      <DoctorInfo />
    </div>
  );
}
