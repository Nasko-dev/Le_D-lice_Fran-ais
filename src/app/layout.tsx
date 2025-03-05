import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";
import CookieBanner from "./components/CookieBanner";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Le Délice Français | Restaurant Gastronomique à Paris",
  description:
    "Découvrez une expérience gastronomique authentiquement française au cœur de Paris. Menu raffiné, carte des vins exceptionnelle et ambiance élégante. Réservez votre table dès maintenant.",
  keywords: [
    "restaurant gastronomique",
    "cuisine française",
    "restaurant paris",
    "gastronomie française",
    "restaurant étoilé",
    "fine dining paris",
    "meilleur restaurant paris",
    "restaurant luxe paris",
  ],
  authors: [{ name: "Le Délice Français" }],
  creator: "Le Délice Français",
  publisher: "Le Délice Français",
  formatDetection: {
    email: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.delice-francais.fr"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Le Délice Français | Restaurant Gastronomique à Paris",
    description:
      "Découvrez une expérience gastronomique authentiquement française au cœur de Paris. Menu raffiné, carte des vins exceptionnelle et ambiance élégante.",
    url: "https://www.delice-francais.fr",
    siteName: "Le Délice Français",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Le Délice Français - Restaurant Gastronomique à Paris",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Le Délice Français | Restaurant Gastronomique à Paris",
    description:
      "Découvrez une expérience gastronomique authentiquement française au cœur de Paris.",
    images: ["/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "votre-code-verification-google",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#171717" />
      </head>
      <body
        className={`${playfair.variable} ${montserrat.variable} font-sans antialiased`}
      >
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
