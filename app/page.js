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
        <Hero />
        <div className="py-10 sm:py-12">
          <Separator />
        </div>
        <Symptoms />
        <div className="py-10 sm:py-12">
          <Separator />
        </div>
        <AboutNeuropathy />
        <Complications />
        <div className="py-10 sm:py-12">
          <Separator />
        </div>
        <SuccessCases />
        <div className="py-10 sm:py-12">
          <Separator />
        </div>
        <NeuropathyTest />
        <Pricing />
        <div className="py-10 sm:py-12">
          <Separator />
        </div>
        <DoctorInfo />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
