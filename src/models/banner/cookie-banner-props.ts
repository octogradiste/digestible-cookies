import CookieInteraction from "../cookie/cookie-interaction";

export default interface CookieBannerProps {
  onDone: () => void;
  onInteract: (interaction: CookieInteraction) => void;
}
