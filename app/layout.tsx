import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Doto } from "next/font/google";
import ClientProviders from "@/components/client-providers";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { getSiteUrl } from "@/lib/site-url";
import "./globals.css";

const doto = Doto({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-doto",
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: "Rakesh • Full‑stack Developer",
    template: "%s • Rakesh",
  },
  description:
    "Full‑stack developer portfolio featuring projects, skills, and experience building modern web apps.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "Rakesh • Full‑stack Developer",
    description:
      "Full‑stack developer portfolio featuring projects, skills, and experience building modern web apps.",
    siteName: "Rakesh",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rakesh • Full‑stack Developer",
    description:
      "Full‑stack developer portfolio featuring projects, skills, and experience building modern web apps.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      url: getSiteUrl(),
      name: "Rakesh",
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Rakesh Chaudhari",
      url: getSiteUrl(),
      sameAs: ["https://github.com/Rakesh-chaudhari"],
    },
  ];

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
  --font-doto: ${doto.variable};
}
        `}</style>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${doto.variable}`}>
        <ClientProviders>
          {children}
          <Analytics />
          <SpeedInsights />
        </ClientProviders>
      </body>
    </html>
  );
}
