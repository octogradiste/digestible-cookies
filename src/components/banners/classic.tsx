import { COOKIE_SUBTITLE, COOKIE_TITLE, COOKIE_LEVELS } from "@/src/constants/cookies";
import AcceptRejectActionButton from "../buttons/accept-reject-action-button";
import Dialog, { DialogTitle, DialogContent, DialogActions } from "../dialog";

export default function ClassicCookieBanner() {
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
          />
        </DialogActions>
    </Dialog>
  );
}
