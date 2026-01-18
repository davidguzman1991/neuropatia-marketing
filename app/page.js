import Footer from "../components/Footer";
import HomePageLayout from "../components/HomePageLayout";
import WhatsAppButton from "../components/WhatsAppButton";

export default function HomePage() {
  return (
    <div className="page-bg min-h-screen">
      <main className="mx-auto max-w-7xl px-4 sm:px-6">
        <HomePageLayout />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
