export const QUESTIONS = [
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
