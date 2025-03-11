import { CookieSubtitle, CookieTitle, CookieLevels } from "@/src/constants/cookies";
import AcceptRejectActionButton from "../buttons/accept-reject-action-button";
import Dialog, { DialogTitle, DialogContent, DialogActions } from "../dialog";

export default function ClassicCookieBanner() {
  return (
    <Dialog>
      <DialogTitle>{CookieTitle}</DialogTitle>
      <DialogContent>
        <p>{CookieSubtitle}</p>
        <ol className="list-decimal list-outside ml-4">
          {
            CookieLevels.filter((level) => !level.required).map((level, index) => (
              <li key={index} className="mt-2">
                <span className="font-bold">{level.title}</span>: {level.description}
              </li>
            ))
          }
        </ol>
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
