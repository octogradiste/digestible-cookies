import CookieInteraction, {
  CookieInteractionComponent,
  CookieInteractionType,
} from "../models/cookie/cookie-interaction";

function onClick(
  onDone: () => void,
  onInteract: (interaction: CookieInteraction) => void,
  component: CookieInteractionComponent,
) {
  return () => {
    onInteract({
      timestamp: new Date(),
      type: CookieInteractionType.CLICK,
      component: component,
    });

    onDone();
  };
}

export function onAccept(
  onDone: () => void,
  onInteract: (interaction: CookieInteraction) => void,
) {
  return onClick(onDone, onInteract, CookieInteractionComponent.BUTTON_ACCPET);
}

export function onReject(
  onDone: () => void,
  onInteract: (interaction: CookieInteraction) => void,
) {
  return onClick(onDone, onInteract, CookieInteractionComponent.BUTTON_REJECT);
}

export function onSave(
  onDone: () => void,
  onInteract: (interaction: CookieInteraction) => void,
) {
  return onClick(onDone, onInteract, CookieInteractionComponent.BUTTON_SAVE);
}

export function onCustomize(
  onDone: () => void,
  onInteract: (interaction: CookieInteraction) => void,
) {
  return onClick(
    onDone,
    onInteract,
    CookieInteractionComponent.BUTTON_CUSTOMIZE,
  );
}

export function getOnSliderChange(
  onInteract: (interaction: CookieInteraction) => void,
) {
  return (value: number) => {
    let component: CookieInteractionComponent | null = null;
    switch (value) {
      case 0:
        component = CookieInteractionComponent.SLIDER_NECESSARY;
        break;
      case 1:
        component = CookieInteractionComponent.SLIDER_FUNCTIONAL;
        break;
      case 2:
        component = CookieInteractionComponent.SLIDER_PERFORMANCE;
        break;
      case 3:
        component = CookieInteractionComponent.SLIDER_ADVERTISEMENT;
        break;
    }

    if (component) {
      onInteract({
        timestamp: new Date(),
        type: CookieInteractionType.SLIDE,
        component: component,
      });
    }
  };
}

export function getOnCheckboxChange(
  onInteract: (interaction: CookieInteraction) => void,
) {
  return (index: number, checked: boolean) => {
    let component: CookieInteractionComponent | null = null;
    switch (index) {
      case 1:
        component = CookieInteractionComponent.CHECKBOX_FUNCTIONAL;
        break;
      case 2:
        component = CookieInteractionComponent.CHECKBOX_PERFORMANCE;
        break;
      case 3:
        component = CookieInteractionComponent.CHECKBOX_ADVERTISEMENT;
        break;
    }

    if (component) {
      const type = checked
        ? CookieInteractionType.CHECK
        : CookieInteractionType.UNCHECK;

      onInteract({
        timestamp: new Date(),
        type: type,
        component: component,
      });
    }
  };
}
