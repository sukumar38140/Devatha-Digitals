import type { Metadata } from "next";
import { 
  Poppins, 
  Noto_Sans_Telugu, 
  Noto_Sans_Devanagari, 
  Noto_Sans_Tamil, 
  Noto_Sans_Kannada, 
  Noto_Sans_Malayalam, 
  Noto_Sans_Gujarati, 
  Noto_Sans_Bengali, 
  Noto_Sans_Gurmukhi, 
  Noto_Nastaliq_Urdu 
} from "next/font/google";
import "../globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LanguageProvider } from "@/components/LanguageProvider";
import { Language } from "@/components/translations";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const telugu = Noto_Sans_Telugu({
  variable: "--font-telugu",
  subsets: ["telugu"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const devanagari = Noto_Sans_Devanagari({
  variable: "--font-devanagari",
  subsets: ["devanagari"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const tamil = Noto_Sans_Tamil({
  variable: "--font-tamil",
  subsets: ["tamil"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const kannada = Noto_Sans_Kannada({
  variable: "--font-kannada",
  subsets: ["kannada"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const malayalam = Noto_Sans_Malayalam({
  variable: "--font-malayalam",
  subsets: ["malayalam"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const gujarati = Noto_Sans_Gujarati({
  variable: "--font-gujarati",
  subsets: ["gujarati"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const bengali = Noto_Sans_Bengali({
  variable: "--font-bengali",
  subsets: ["bengali"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const gurmukhi = Noto_Sans_Gurmukhi({
  variable: "--font-gurmukhi",
  subsets: ["gurmukhi"],
  weight: ["300", "400", "500", "600", "700"],
});

const urdu = Noto_Nastaliq_Urdu({
  variable: "--font-urdu",
  subsets: ["arabic"],
  weight: ["400", "700"],
});

export async function generateMetadata(
  { params }: { params: Promise<{ locale: string }> }
): Promise<Metadata> {
  const { locale } = await params;
  const currentLocale = (locale || "en") as Language;
  
  // Multilingual Alternate Links for SEO
  const hreflangs: Record<string, string> = {
    en: "https://devathadigitals.com/en",
    te: "https://devathadigitals.com/te",
    hi: "https://devathadigitals.com/hi",
    ta: "https://devathadigitals.com/ta",
    kn: "https://devathadigitals.com/kn",
    ml: "https://devathadigitals.com/ml",
    mr: "https://devathadigitals.com/mr",
    gu: "https://devathadigitals.com/gu",
    bn: "https://devathadigitals.com/bn",
    pa: "https://devathadigitals.com/pa",
    ur: "https://devathadigitals.com/ur"
  };

  return {
    title: "Devatha Digitals | Trusted Electronics Showroom since 2005 | Madanapalle",
    description: "Devatha Digitals is Madanapalle's leading premium electronics retail store. Serving customers for over 21 years with top brands of Smartphones, Smart TVs, ACs, Refrigerators, and Appliances. Experience trust and premium service above HDFC Bank, CTM Road.",
    keywords: ["Devatha Digitals", "Madanapalle Electronics", "Mobile showroom Madanapalle", "Smart TV Madanapalle", "AC showroom CTM Road", "Devatha Madanapalle", "D Babu electronics", "Samsung Plaza Madanapalle"],
    authors: [{ name: "D Babu" }],
    alternates: {
      canonical: `https://devathadigitals.com/${currentLocale}`,
      languages: hreflangs
    },
    openGraph: {
      title: "Devatha Digitals | Trusted Electronics Showroom since 2005 | Madanapalle",
      description: "Madanapalle's leading premium electronics retail store. Serving customers for over 21 years with top brands of Smartphones, Smart TVs, ACs, Refrigerators, and Appliances.",
      url: `https://devathadigitals.com/${currentLocale}`,
      siteName: "Devatha Digitals",
      locale: currentLocale === "en" ? "en_IN" : `${currentLocale}_IN`,
      type: "website",
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export function generateStaticParams() {
  return [
    { locale: "en" },
    { locale: "te" },
    { locale: "hi" },
    { locale: "ta" },
    { locale: "kn" },
    { locale: "ml" },
    { locale: "mr" },
    { locale: "gu" },
    { locale: "bn" },
    { locale: "pa" },
    { locale: "ur" }
  ];
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  const currentLocale = (locale || "en") as Language;
  const dir = currentLocale === "ur" ? "rtl" : "ltr";

  // Schema JSON-LD representation
  const schemaJson = {
    "@context": "https://schema.org",
    "@type": "ElectronicsStore",
    "name": "Devatha Digitals",
    "image": [
      "/images/devatha-digitals-showroom.avif",
      "/images/Devatha showroom daytime photo.jpg",
      "/images/devatha show room portfolio.png"
    ],
    "@id": "https://devathadigitals.com/#store",
    "url": `https://devathadigitals.com/${currentLocale}`,
    "telephone": "+919948020830",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Above HDFC Bank, CTM Road",
      "addressLocality": "Madanapalle",
      "addressRegion": "Andhra Pradesh",
      "postalCode": "517325",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "13.6231",
      "longitude": "78.5020"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "10:00",
      "closes": "21:00"
    },
    "sameAs": [
      "https://www.facebook.com/share/devathadigitals",
      "https://maps.google.com/?q=Devatha+Digitals,+Madanapalle"
    ]
  };

  return (
    <html
      lang={currentLocale}
      dir={dir}
      className={`${poppins.variable} ${telugu.variable} ${devanagari.variable} ${tamil.variable} ${kannada.variable} ${malayalam.variable} ${gujarati.variable} ${bengali.variable} ${gurmukhi.variable} ${urdu.variable} h-full antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}
        />
      </head>
      <body className="min-h-full bg-brand-bg text-text-primary flex flex-col font-sans">
        <ThemeProvider>
          <LanguageProvider locale={currentLocale}>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
