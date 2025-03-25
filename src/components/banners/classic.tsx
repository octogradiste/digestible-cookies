import { COOKIE_SUBTITLE, COOKIE_TITLE, COOKIE_LEVELS } from "@/src/constants/cookies";
import AcceptRejectActionButton from "../buttons/accept-reject-action-button";
import Dialog, { DialogTitle, DialogContent, DialogActions } from "../dialog";
import CookieBannerProps from "@/src/models/banner/cookie-banner-props";
import { onAccept, onCustomize, onReject } from "@/src/lib/banner";
import { useState } from "react";
import SettingCookieBanner from "./setting";

export default function ClassicCookieBanner({ onDone, onInteract, animate }: CookieBannerProps) {
  const [customize, setCustomize] = useState(false);
  const onCustomizeCallback = onCustomize(onInteract);

  // Sets the state to true and calls the onCustomize function
  const onAction = () => {
    setCustomize(true);
    onCustomizeCallback();
  }

  if (customize) {
    return <SettingCookieBanner
      onDone={onDone}
      onInteract={onInteract}
      animate={false}
    />
  } else {
    return (
      <Dialog animate={animate}>
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
            onAction={onAction}
          />
        </DialogActions>
      </Dialog>
    );
  }
}
