import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ImplementCo.AI | AI Transformation That Transforms People Too",
  description:
    "AI transformation isn't about replacing people—it's about transforming together. ImplementCo.AI is a Bumpcall × Foxbith collaboration bringing people-first AI transformation to organizations.",
  keywords: [
    "AI transformation",
    "digital transformation",
    "workforce transformation",
    "AI implementation",
    "people-first AI",
    "corporate AI",
    "Bumpcall",
    "Foxbith",
    "reskilling",
    "upskilling",
  ],
  authors: [{ name: "ImplementCo.AI" }],
  openGraph: {
    title: "ImplementCo.AI | Implement. Co-create. Transform.",
    description:
      "AI transformation isn't about replacing people—it's about transforming together. A Bumpcall × Foxbith collaboration.",
    url: "https://implementco-ai-dxp.vercel.app",
    siteName: "ImplementCo.AI",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ImplementCo.AI | Implement. Co-create. Transform.",
    description:
      "AI transformation isn't about replacing people—it's about transforming together.",
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
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
