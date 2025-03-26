import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { uidToCookieBannerNumber as getCookieBannerNumberFromUID } from "../lib/utils";
import { auth } from "../lib/firebase";
import CookieState from "../models/cookie/cookie-state";
import CookieInteraction from "../models/cookie/cookie-interaction";

export const useCookieState = () => {
  const [user] = useAuthState(auth);
  const [cookieState, setCookieState] = useState<CookieState | undefined>();

  const onCookieInteraction = (interaction: CookieInteraction) => {
    if (cookieState) {
      setCookieState({
        ...cookieState,
        interactions: [...cookieState.interactions, interaction],
      });
    }
  };

  useEffect(() => {
    if (user) {
      setCookieState({
        banner: getCookieBannerNumberFromUID(user.uid),
        start: new Date(),
        widht: window.innerWidth,
        height: window.innerHeight,
        agent: navigator.userAgent,
        interactions: [],
      });
    }
  }, [user]);

  return { cookieState, onCookieInteraction };
};
