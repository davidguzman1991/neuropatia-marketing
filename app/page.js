import Footer from "../components/Footer";
import HomePageLayout from "../components/HomePageLayout";
import WhatsAppButton from "../components/WhatsAppButton";

export default function HomePage() {
  return (
    <div className="page-bg min-h-screen overflow-x-hidden">
      <main className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8">
        <HomePageLayout />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
