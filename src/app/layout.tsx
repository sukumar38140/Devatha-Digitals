import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Devatha Digitals | Trusted Electronics Showroom since 2005 | Madanapalle",
  description: "Devatha Digitals is Madanapalle's leading premium electronics retail store. Serving customers for over 21 years with top brands of Smartphones, Smart TVs, ACs, Refrigerators, and Appliances. Experience trust and premium service above HDFC Bank, CTM Road.",
  keywords: ["Devatha Digitals", "Madanapalle Electronics", "Mobile showroom Madanapalle", "Smart TV Madanapalle", "AC showroom CTM Road", "Devatha Madanapalle", "D Babu electronics", "Samsung Plaza Madanapalle"],
  authors: [{ name: "D Babu" }],
  openGraph: {
    title: "Devatha Digitals | Trusted Electronics Showroom since 2005 | Madanapalle",
    description: "Madanapalle's leading premium electronics retail store. Serving customers for over 21 years with top brands of Smartphones, Smart TVs, ACs, Refrigerators, and Appliances.",
    url: "https://devathadigitals.com",
    siteName: "Devatha Digitals",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
    "url": "https://devathadigitals.com",
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
      lang="en"
      className={`${poppins.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}
        />
      </head>
      <body className="min-h-full bg-brand-bg text-text-primary flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}

