import type { Metadata, Viewport } from "next";
import { twMerge } from "tailwind-merge";

import { Calistoga, Inter } from "next/font/google";
import "./globals.css";
import Starfield from "@/components/StarField";

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
      </body>
    </html>
  );
}
