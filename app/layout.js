import "./globals.css";
import Script from "next/script";
import { Inter, Source_Serif_4 } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: "Neuropatía diabética | Dr. David Guzmán",
  description:
    "Dolor, ardor u hormigueo en los pies no es normal. Evaluación médica especializada en neuropatía diabética.",
  keywords: [
    "neuropat¡a diab‚tica",
    "dolor en pies",
    "especialista en diabetes Guayaquil",
    "valoraci¢n neuropat¡a",
    "pie diab‚tico",
  ],
  openGraph: {
    title: "Dolor y ardor en los pies no es normal",
    description: "Evaluación médica especializada en neuropatía diabética.",
    url: siteUrl,
    siteName: "Neuropat¡a diab‚tica",
    locale: "es_EC",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Neuropatía diabética – Dr. David Guzmán",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Neuropatía diabética | Dr. David Guzmán",
    description:
      "Dolor, ardor u hormigueo en los pies no es normal. Evaluación médica especializada en neuropatía diabética.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalBusiness",
        name: "Atenci¢n de neuropat¡a diab‚tica - Dr. David Guzm n",
        description:
          "Valoraci¢n cl¡nica de neuropat¡a diab‚tica y dolor en pies con enfoque preventivo.",
        url: siteUrl,
        image: `${siteUrl}/hero/neuropatia-hero-medico.webp`,
        priceRange: "$45-$60",
        areaServed: "Guayaquil",
        address: {
          "@type": "PostalAddress",
          streetAddress:
            "Hospital de Especialidades de la Ciudad ú Torre Sur ú Consultorio 204",
          addressLocality: "Guayaquil",
          addressCountry: "EC",
        },
        openingHours: "Mo-Sa 08:00-18:00",
      },
      {
        "@type": "Physician",
        name: "Dr. David Guzm n P.",
        medicalSpecialty: "Endocrinolog¡a",
        areaServed: "Guayaquil",
        worksFor: {
          "@type": "MedicalBusiness",
          name: "Atenci¢n de neuropat¡a diab‚tica - Dr. David Guzm n",
        },
      },
    ],
  };
  return (
    <html lang="es" className={`${inter.variable} ${sourceSerif.variable}`}>
      <body className="min-h-screen bg-sand text-ink antialiased">
        {gaId ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${gaId}', { anonymize_ip: true });`}
            </Script>
            <Script id="analytics-events" strategy="afterInteractive">
              {`document.addEventListener('click', function(event) {
  var target = event.target.closest('[data-analytics-event]');
  if (!target || typeof window.gtag !== 'function') return;
  var eventName = target.getAttribute('data-analytics-event');
  var eventLabel = target.getAttribute('data-analytics-label') || 'unknown';
  window.gtag('event', eventName, {
    event_category: 'engagement',
    event_label: eventLabel
  });
});`}
            </Script>
          </>
        ) : null}
        <Script id="schema-medical" type="application/ld+json">
          {JSON.stringify(structuredData)}
        </Script>
        {children}
      </body>
    </html>
  );
}
