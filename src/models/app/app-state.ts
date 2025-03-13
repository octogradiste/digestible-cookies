export enum AppState {
  /** Initializes firebase and creates a new user if necessary. */
  Initial,

  /** Shows the cookie banner to the user and tracks his interactions. */
  Cookie,

  /** Asks the user to fill out a survey. */
  Survey,

  /** Shows a thank you message to the user. */
  Done,
}
