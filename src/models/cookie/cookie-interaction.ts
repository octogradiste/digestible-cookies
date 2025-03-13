export enum CookieInteractionType {
  CLICK = "click",
  CHECK = "check",
  UNCHECK = "uncheck",
  SLIDE = "slide",
}

export enum CookieInteractionComponent {
  BUTTON_ACCPET = "button-accept",
  BUTTON_REJECT = "button-reject",
  BUTTON_SAVE = "button-save",
  BUTTON_CUSTOMIZE = "button-customize",
  CHECKBOX_FUNCTIONAL = "checkbox-functional",
  CHECKBOX_PERFORMANCE = "checkbox-performance",
  CHECKBOX_ADVERTISEMENT = "checkbox-advertisement",
  SLIDER_NECESSARY = "slider-necessary",
  SLIDER_FUNCTIONAL = "slider-functional",
  SLIDER_PERFORMANCE = "slider-performance",
  SLIDER_ADVERTISEMENT = "slider-advertisement",
}

export default interface CookieInteraction {
  /** The timestamp of the interaction. */
  timestamp: Date;

  /** The type of the interaction. */
  type: CookieInteractionType;

  /** The component that the user interacted with. */
  component: CookieInteractionComponent;
}
