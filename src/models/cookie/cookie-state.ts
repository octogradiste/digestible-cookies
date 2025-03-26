import CookieInteraction from "./cookie-interaction";

export default interface CookieState {
  /** The number of the banner that is currently shown to the user. */
  banner: number;

  /** The start time of the study. */
  start: Date;

  /** The width of the browser window. */
  widht: number;

  /** The height of the browser window. */
  height: number;

  /** The user agent of the browser. */
  agent: string;

  /** The interactions of the user with the cookie banner. */
  interactions: CookieInteraction[];
}
