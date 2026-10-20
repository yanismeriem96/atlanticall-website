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
    "AtlantiCall, votre partenaire call center : relation client, support, téléprospection.",
  icons: {
  icon: "/images/logo-icon.svg",
  shortcut: "/images/logo-icon.svg",
  apple: "/images/logo-icon.svg",
  },
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