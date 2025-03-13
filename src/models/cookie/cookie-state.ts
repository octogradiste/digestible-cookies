import CookieInteraction from "./cookie-interaction";

export default interface CookieState {
  /** The number of the banner that is currently shown to the user. */
  banner: number;

  /** The start time of the study. */
  start: Date;

  /** The interactions of the user with the cookie banner. */
  interactions: CookieInteraction[];
}
