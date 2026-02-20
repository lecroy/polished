import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "Polished — Your idea, built.",
  description:
    "AI-built. Human-designed. A working web app, flat rate, with a clean handoff. From a product designer with 20 years of experience.",
  openGraph: {
    title: "Polished — Your idea, built.",
    description:
      "AI-built. Human-designed. A working web app, flat rate, with a clean handoff.",
    url: "https://getpolished.com",
    siteName: "Polished",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${instrumentSerif.variable}`}>
      <body className="bg-[#F9F7F3] text-[#1A1A18] font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
