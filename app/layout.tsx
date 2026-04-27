import type { Metadata, Viewport } from "next";
import { SITE } from "@/lib/config";
import "./globals.css";

export const metadata: Metadata = {
  title: `${SITE.name} — ${SITE.tagline}`,
  description:
    "Servicio de instalación profesional de porcelanato y cerámico. No vendemos pisos: nos enfocamos en colocarlos correctamente.",
  metadataBase: new URL(`https://${SITE.domain}`),
  openGraph: {
    title: `${SITE.name} — ${SITE.tagline}`,
    description:
      "Instalación profesional de porcelanato y cerámico. Cotización clara por WhatsApp.",
    url: `https://${SITE.domain}`,
    siteName: SITE.name,
    locale: "es_MX",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
