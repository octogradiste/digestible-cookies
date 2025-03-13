import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { AppState } from "../models/app/app-state";
import { signInAnonymously } from "firebase/auth/cordova";
import { auth } from "../lib/firebase";
import { useHasResults } from "./use-has-results";

export const useAppState = () => {
  const [state, setState] = useState(AppState.Initial);
  const [user] = useAuthState(auth);
  const hasResults = useHasResults();

  const setSurveyState = () => {
    setState(AppState.Survey);
  };

  useEffect(() => {
    if (hasResults) {
      setState(AppState.Done);
    }
  }, [hasResults]);

  useEffect(() => {
    if (user) {
      if (state == AppState.Initial) {
        setState(AppState.Cookie);
      }
    } else {
      signInAnonymously(auth);
    }
  }, [user, state]);

  return { state, setSurveyState };
};
