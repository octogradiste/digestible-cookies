interface CookieLevel {
  title: string;
  required: boolean;
  description: string;
}

export const CookieTitle = "We use cookies";

//export const CookieSubtitle =
//  "We use cookies to enhance navigation and perform certain functions. You can enable or disable some or all of them, but it may affect your browsing experience.";

export const CookieLevels: CookieLevel[] = [
  {
    title: "Necessary",
    required: true,
    description:
      "They are required to enable basic site features like providing secure log-in or adjusting consent preferences. No personally identifiable data is stored.",
  },
  {
    title: "Functional",
    required: false,
    description:
      "They help perform certain functions like remembering log-in details, preferred language and country, or collecting feedback, and other third party features.",
  },
  {
    title: "Performance",
    required: false,
    description:
      "They are used to understand how visitors interact with the website, offering insights into visitors metrics like numbers, bounce rate, and traffic source.",
  },
  {
    title: "Advertisement",
    required: false,
    description:
      "They are used to customise advertisements based on the pages you visited previously and to evaluate ad campaigns' performance",
  },
];

export const CookieSubtitle =
  "We use cookies on our website to collect information about how you interact with our website. Some of these cookies are essential so that our website can function ('necessary'). Some cookies provide us with additional information which we use for the following purpose:";

//export const CookieLevels: CookieLevel[] = [
//  { title: "Necessary", required: true, description: "" },
//  {
//    title: "Functional",
//    required: false,
//    description:
//      "To allow certain functions of the websites that improves navigation (remember your login details, region, language, etc.)",
//  },
//  {
//    title: "Performance",
//    required: false,
//    description:
//      "To collect website analytics on how you have interacted with our site (e.g. track most popular pages or counting errors) in order to improve it.",
//  },
//  {
//    title: "Advertisement",
//    required: false,
//    description:
//      "To collect data on your browsing history data in order to show you personalised promotions and contents. If you do not give your consent, you will still see ads from our partner sites, but we will not personalise them or use cookies to provide them.",
//  },
//];
