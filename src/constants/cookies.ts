import CookieLevel from "../models/cookie/cookie-level";

export const COOKIE_TITLE = "We use cookies";

export const COOKIE_SUBTITLE =
  "We use cookies to improve your experience. Some are essential ('necessary'), while others help us with analytics and ads.";

export const COOKIE_LEVELS: CookieLevel[] = [
  {
    title: "Necessary",
    required: true,
    description:
      "Essential for basic site functions like security and consent settings. No personal data is stored.",
  },
  {
    title: "Functional",
    required: false,
    description:
      "Enable features like remembering logins, keyboard layout, language and the country.",
  },
  {
    title: "Performance",
    required: false,
    description:
      "Help analyze visitor interactions, including traffic, visit duration and engagement.",
  },
  {
    title: "Advertisement",
    required: false,
    description:
      "Personalize ads based on your visits and browser search history.",
  },
];
