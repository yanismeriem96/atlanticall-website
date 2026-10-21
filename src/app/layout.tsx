import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AtlantiCall - Centre d'appels professionnel",
  description:
    "AtlantiCall, votre partenaire call center en Algérie : réception d'appels, prise de rendez-vous, téléprospection et conversion de leads.",
  keywords: [
    "call center Algérie",
    "centre d'appels",
    "téléprospection",
    "prise de rendez-vous",
    "relation client Algérie",
  ],
  openGraph: {
    title: "AtlantiCall - Centre d'appels professionnel",
    description:
      "Votre partenaire call center en Algérie : conversion de leads, prise de rendez-vous, téléprospection.",
    url: "https://atlanticall-dz.com",
    siteName: "Atlanticall",
    locale: "fr_FR",
    type: "website",
  },
  icons: {
    icon: "/images/logo-icon.svg",
    shortcut: "/images/logo-icon.svg",
    apple: "/images/logo-icon.svg",
  },
  metadataBase: new URL("https://atlanticall-dz.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
  className={`${poppins.variable} ${inter.variable} antialiased`}
  suppressHydrationWarning
>
        {children}
      </body>
    </html>
  );
}