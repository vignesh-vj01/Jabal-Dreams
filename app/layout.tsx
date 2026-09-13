import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat, El_Messiri, Cairo } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { LanguageProvider } from "./components/lang-context";
import { company } from "./lib/site";
import "./globals.css";

const siteUrl = "https://jabaldreams.com";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

// Arabic display + body faces (applied automatically in RTL via CSS var swap)
const elMessiri = El_Messiri({
  variable: "--font-elmessiri",
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Jabal Dreams | Architectural Art, Sculptures & Heritage Restoration in Oman",
    template: "%s | Jabal Dreams",
  },
  description:
    "Jabal Dreams (JD) is a specialized creative fabrication, architectural enhancement, and heritage restoration company based in Muscat, Oman — crafting sculptural art, textured finishes, water features, and scale models. Preserving the Past, Crafting the Future.",
  keywords: [
    "Jabal Dreams",
    "JD Events Oman",
    "architectural art Oman",
    "heritage restoration Oman",
    "sculptural wall art",
    "creative fabrication Muscat",
    "3D architectural features",
    "texture murals",
    "scale modeling",
    "interior fabrication Oman",
  ],
  applicationName: "Jabal Dreams",
  authors: [{ name: "Jabal Dreams Intl. LLC" }],
  creator: "Jabal Dreams Intl. LLC",
  publisher: "Jabal Dreams Intl. LLC",
  openGraph: {
    title: "Jabal Dreams | Preserving Heritage, Creating Landmarks",
    description:
      "Specialized creative fabrication, architectural art, and heritage restoration crafted across the Sultanate of Oman.",
    type: "website",
    siteName: "Jabal Dreams",
    locale: "en_US",
    url: "/",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Jabal Dreams architectural art, sculpture, and heritage restoration",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jabal Dreams | Architectural Art & Heritage Restoration in Oman",
    description:
      "Sculptural art, heritage restoration, and creative fabrication based in Muscat, Oman.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: company.legalName,
  alternateName: company.brand,
  url: siteUrl,
  image: `${siteUrl}/opengraph-image`,
  email: company.email,
  telephone: company.phones,
  address: {
    "@type": "PostalAddress",
    streetAddress: company.street,
    addressLocality: "Muscat",
    postalCode: company.pc,
    postOfficeBoxNumber: company.poBox,
    addressCountry: "OM",
  },
  areaServed: "Sultanate of Oman",
  description: company.intro,
};

const languageBootScript = `
try {
  var saved = localStorage.getItem("jd-lang");
  if (saved === "ar" || saved === "en") {
    document.documentElement.lang = saved;
    document.documentElement.dir = saved === "ar" ? "rtl" : "ltr";
  }
} catch (e) {}
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${cormorant.variable} ${montserrat.variable} ${elMessiri.variable} ${cairo.variable} h-full antialiased`}
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col">
        <script dangerouslySetInnerHTML={{ __html: languageBootScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <LanguageProvider>{children}</LanguageProvider>
        <Analytics />
      </body>
    </html>
  );
}
