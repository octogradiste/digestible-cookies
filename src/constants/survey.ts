export const QUESTIONS_1 = [
  "I am familiar with cookie banner shown on the previous page.",
  "I generally accept all cookies on websites.",
  "I generally reject all cookies on websites.",
  "I hink that I would like to use this cookie banner frequently.",
  "I found the cookie banner unnecessarily complex.",
  "I thought the cookie banner was easy to use.",
  "I fount the various functions in this cookie banner were well integrated.",
  "I would imagine that most people would learn to use this cookie banner very quickly.",
  "I found the cookie banner very cumbersome to use.",
  "I felt very confident using the cookie banner.",
  "I needed to learn a lot of things before I could get going with this cookie banner.",
];

export const QUESTIONS_2 = [
  "If you agree to performance cookies you give permission that your processor usage is collected.",
  "If you agree to advertisement cookies your interaction with the website might influence future ads that you see.",
  "If you agree to advertisement cookies the website provider stores your browser search history.",
  "If you agree to functional cookies your keyboard layout is collected.",
];

const VALUES_1 = [
  "Strongly Disagree",
  "Disagree",
  "Neutral",
  "Agree",
  "Strongly Agree",
];

const VALUES_2 = ["Very Unsure", "Unsure", "Neutral", "Sure", "Very Sure"];

export const OPTIONS_1 = VALUES_1.map((value, index) => ({
  value: index + 1,
  label: value,
}));

export const OPTIONS_2 = VALUES_2.map((value, index) => ({
  value: index + 1,
  label: value,
}));
