"use client";

import ClassicCookieBanner from "@/src/components/banners/classic";
import SettingCookieBanner from "@/src/components/banners/setting";
import SliderCookieBanner from "@/src/components/banners/slider";
import Cookie from "@/src/components/screens/cookie";
import Done from "@/src/components/screens/done";
import Survey from "@/src/components/screens/survey";
import { useAppState } from "@/src/hooks/use-app-state";
import { useCookieState } from "@/src/hooks/use-cookie-state";
import useSurveyState from "@/src/hooks/use-survey-state";
import { AppState } from "@/src/models/app/app-state";
import { useCallback, useMemo } from "react";

export default function Home() {
  const { state, setSurveyState, setDoneState } = useAppState();
  const { cookieState, onCookieInteraction } = useCookieState();
  const { surveyState, onSurveyAnswer } = useSurveyState();

  const onSurveySubmit = useCallback(() => {
    setDoneState();

    const end = new Date();

    console.log(cookieState);
    console.log(surveyState);
    console.log(end);
  }, [cookieState, surveyState, setDoneState]);

  // The screen that is currently shown to the user.
  const screen = useMemo(() => {
    switch (state) {
      case AppState.Cookie:
        return <Cookie />;
      case AppState.Survey:
        return <Survey
          results={surveyState}
          onAnswer={onSurveyAnswer}
          onSubmit={onSurveySubmit}
        />;
      case AppState.Done:
        return <Done />;
      default:
        return null;
    }
  }, [state, surveyState, onSurveyAnswer, onSurveySubmit]);

  // The cookie banner that is currently shown to the user.
  const banner = useMemo(() => {
    if (cookieState && state == AppState.Cookie) {
      switch (cookieState.banner) {
        case 0:
          return <ClassicCookieBanner
            onDone={setSurveyState}
            onInteract={onCookieInteraction}
          />;
        case 1:
          return <SettingCookieBanner
            onDone={setSurveyState}
            onInteract={onCookieInteraction}
          />;
        case 2:
          return <SliderCookieBanner
            onDone={setSurveyState}
            onInteract={onCookieInteraction}
          />;
        default:
          return null;
      }
    } else {
      return null;
    }
  }, [cookieState, state, setSurveyState, onCookieInteraction]);

  return (
    <div>
      {banner}
      {screen}
    </div>
  );
}
