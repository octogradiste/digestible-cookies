"use client";

import ClassicCookieBanner from "@/src/components/banners/classic";
import SettingCookieBanner from "@/src/components/banners/setting";
import SliderCookieBanner from "@/src/components/banners/slider";
import Cookie from "@/src/components/screens/cookie";
import Done from "@/src/components/screens/done";
import Survey from "@/src/components/screens/survey";
import { useAppState } from "@/src/hooks/use-app-state";
import { useCookieState } from "@/src/hooks/use-cookie-state";
import { AppState } from "@/src/models/app/app-state";
import { useMemo } from "react";

export default function Home() {
  const { state, setSurveyState, setDoneState } = useAppState();
  const { cookieState, addInteraction } = useCookieState();

  const onSurveySubmit = (results: number[]) => {
    console.log(results);
    console.log(cookieState);

    setDoneState();
  }

  const screen = useMemo(() => {
    switch (state) {
      case AppState.Cookie:
        return <Cookie />;
      case AppState.Survey:
        return <Survey onSubmit={onSurveySubmit} />;
      case AppState.Done:
        return <Done />;
      default:
        return null;
    }
  }, [state]);

  const banner = useMemo(() => {
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
    <div>
      {banner}
      {screen}
    </div>
  );
}
