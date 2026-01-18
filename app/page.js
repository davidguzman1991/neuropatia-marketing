import AboutNeuropathy from "../components/AboutNeuropathy";
import Complications from "../components/Complications";
import DoctorInfo from "../components/DoctorInfo";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import NeuropathyTest from "../components/NeuropathyTest";
import Pricing from "../components/Pricing";
import SuccessCases from "../components/SuccessCases";
import { Separator } from "../components/ui/separator";
import Symptoms from "../components/Symptoms";
import WhatsAppButton from "../components/WhatsAppButton";

export default function HomePage() {
  return (
    <div className="page-bg min-h-screen">
      <main className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col">
          <div className="order-1 md:order-1">
            <Hero />
          </div>
          <div className="hidden py-8 sm:py-10 md:block md:order-2">
            <Separator />
          </div>
          <div className="order-3 md:order-3">
            <Symptoms />
          </div>
          <div className="hidden py-8 sm:py-10 md:block md:order-4">
            <Separator />
          </div>
          <div className="order-4 md:order-5">
            <AboutNeuropathy />
          </div>
          <div className="order-5 md:order-6">
            <Complications />
          </div>
          <div className="hidden py-8 sm:py-10 md:block md:order-7">
            <Separator />
          </div>
          <div className="order-6 md:order-8">
            <SuccessCases />
          </div>
          <div className="hidden py-8 sm:py-10 md:block md:order-9">
            <Separator />
          </div>
          <div className="order-2 md:order-10">
            <NeuropathyTest />
          </div>
          <div className="order-7 md:order-11">
            <span id="precio" className="sr-only" />
            <Pricing />
          </div>
          <div className="hidden py-8 sm:py-10 md:block md:order-12">
            <Separator />
          </div>
          <div className="order-8 md:order-13">
            <span id="ubicacion" className="sr-only" />
            <DoctorInfo />
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
