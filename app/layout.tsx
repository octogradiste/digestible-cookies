"use client"

import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import ClassicCookieBanner from "@/src/components/banners/classic";
import SettingCookieBanner from "@/src/components/banners/setting";
import SliderCookieBanner from "@/src/components/banners/slider";
import { useAppState } from "@/src/hooks/use-app-state";
import { AppState } from "@/src/models/app/app-state";
import { useMemo } from "react";
import { useCookieState } from "@/src/hooks/use-cookie-state";

const playfairDisplay = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
});

const lato = Lato({
  weight: ['400', '700', '900'],
  variable: "--font-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { state, setSurveyState } = useAppState();
  const { cookieState, addInteraction } = useCookieState();

  const cookieBanner = useMemo(() => {
    if (cookieState && state == AppState.Cookie) {
      switch (cookieState.banner) {
        case 0:
          return <ClassicCookieBanner 
            onDone={setSurveyState} 
            onInteract={addInteraction}
          />;
        case 1:
          return <SettingCookieBanner 
            onDone={setSurveyState} 
            onInteract={addInteraction}
          />;
        case 2:
          return <SliderCookieBanner 
            onDone={setSurveyState} 
            onInteract={addInteraction}
          />;
        default:
          return null;
      }
    } else {
      return null;
    }
  }, [cookieState, state]);

  return (
    <html lang="en">
      <body
        className={`${playfairDisplay.variable} ${lato.variable} antialiased`}
      >
        { cookieBanner }
        { children }
      </body>
    </html>
  );
}
