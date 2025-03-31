import type { Metadata, Viewport } from "next";
import { twMerge } from "tailwind-merge";
import { GoogleAnalytics } from '@next/third-parties/google'

import { Calistoga, Inter } from "next/font/google";
import "./globals.css";
import Starfield from "@/components/StarField";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Venkatram's Portfolio",
  description:
    'Next.js developer portfolio',
};

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "contain",
  userScalable: false,
  height: "device-height",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="google-site-verification" content="74G8nRsYV1eK2nl0oqIzCxDLPhzDE2GrUC-JUBQc0qg" />
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <body
        className={twMerge(
          inter.variable,
          calistoga.variable,
          "no-scrollbar overflow-y-auto overflow-x-hidden bg-custom-dark font-sans text-white antialiased",
        )}
      >
        <Starfield
          starCount={1000}
          starColor={[255, 255, 255]}
          speedFactor={0.05}
          backgroundColor="black"
        />
        {children}
        <ScrollToTop />
      </body>
      <GoogleAnalytics gaId="G-KS4J88K0DK" />
    </html>
  );
}
