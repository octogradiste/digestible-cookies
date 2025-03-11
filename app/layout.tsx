import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import ClassicCookieBanner from "@/src/components/banners/classic";
import SettingCookieBanner from "@/src/components/banners/setting";
import SliderCookieBanner from "@/src/components/banners/slider";
import { getRandomIntRange } from "@/src/utils";

const playfairDisplay = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
});

const lato = Lato({
  weight: ['400', '700', '900'],
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Digestible Cookies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const version = getRandomIntRange(0, 2);

  return (
    <html lang="en">
      <body
        className={`${playfairDisplay.variable} ${lato.variable} antialiased`}
      >
        { version == 0 ? <ClassicCookieBanner /> : version == 1 ? <SettingCookieBanner /> : <SliderCookieBanner /> }
        {children}
      </body>
    </html>
  );
}
