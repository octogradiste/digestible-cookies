import { COOKIE_SUBTITLE, COOKIE_TITLE, COOKIE_LEVELS } from "@/src/constants/cookies";
import AcceptRejectActionButton from "../buttons/accept-reject-action-button";
import Dialog, { DialogTitle, DialogContent, DialogActions } from "../dialog";
import CookieBannerProps from "@/src/models/banner/cookie-banner-props";
import { onAccept, onCustomize, onReject } from "@/src/lib/banner";

export default function ClassicCookieBanner({onDone, onInteract}: CookieBannerProps) {
  return (
    <Dialog>
      <DialogTitle>{COOKIE_TITLE}</DialogTitle>
      <DialogContent>
        <p>{COOKIE_SUBTITLE}</p>
        <ul className="list-disc list-outside ml-4">
          {
            COOKIE_LEVELS.filter((level) => !level.required).map((level, index) => (
              <li key={index} className="mt-2">
                <span className="font-bold">{level.title}</span>: {level.description}
              </li>
            ))
          }
        </ul>
        </DialogContent>
        <DialogActions>
          <AcceptRejectActionButton 
            actionTitle="Customize" 
            longActionTitle="Customize Cookie Settings" 
            onAccept={onAccept(onDone, onInteract)}
            onReject={onReject(onDone, onInteract)}
            onAction={onCustomize(onDone, onInteract)}
          />
        </DialogActions>
    </Dialog>
  );
}
