export const QUESTIONS = [
  "I am familiar with cookie banner shown on the previous page.",
  "I generally accept all cookies on websites.",
  "I generally reject all cookies on websites.",
  "I think that I would like to use this cookie banner frequently.",
  "I found the cookie banner unnecessarily complex.",
  "I thought the cookie banner was easy to use.",
  "I found the various functions in this cookie banner were well integrated.",
  "I would imagine that most people would learn to use this cookie banner very quickly.",
  "I found the cookie banner very cumbersome to use.",
  "I felt very confident using the cookie banner.",
  "I needed to learn a lot of things before I could get going with this cookie banner.",
  "Agreeing to performance cookies allows my processor usage to be collected.",
  "Agreeing to advertisement cookies may influence future ads I see.",
  "Agreeing to advertisement cookies allows the website provider to store my browser search history.",
  "Agreeing to functional cookies allows my keyboard layout to be collected.",
];

const VALUES = [
  "Strongly Disagree",
  "Disagree",
  "Neutral",
  "Agree",
  "Strongly Agree",
];

export const OPTIONS = VALUES.map((value, index) => ({
  value: index + 1,
  label: value,
}));
