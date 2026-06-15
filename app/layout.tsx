import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { JetBrains_Mono } from "next/font/google";
import { ReactLenis } from "lenis/react";
import SmoothScrollLinks from "@/components/smoothscrolllinks";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Joelle Voogt",
  description:
    "My portfolio build with VSCode and Next.js that contains a selection of things I've built.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ReactLenis root>
          <SmoothScrollLinks />
          {children}
        </ReactLenis>
        <div
          className="fixed inset-0 z-40 pointer-events-none"
          style={{
            background: `
    radial-gradient(ellipse at center, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 0%, rgba(0,0,0,0.40) 100%),
    repeating-linear-gradient(
      0deg,
      rgba(0,0,0,0.10) 0px,
      rgba(0,0,0,0.10) 1px,
      transparent 1px,
      transparent 2px
    )
  `,
          }}
        />
      </body>
    </html>
  );
}
