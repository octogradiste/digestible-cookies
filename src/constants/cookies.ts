interface CookieLevel {
  title: string;
  required: boolean;
  description: string;
}

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
      "Enable features like remembering logins, language, country, and feedback collection.",
  },
  {
    title: "Performance",
    required: false,
    description:
      "Help analyze visitor interactions, including traffic, bounce rates, and engagement.",
  },
  {
    title: "Advertisement",
    required: false,
    description:
      "Personalize ads based on your visits and measure ad performance.",
  },
];
