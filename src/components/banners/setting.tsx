import { CookieSubtitle, CookieTitle, CookieLevels } from "@/src/constants/cookies";
import AcceptRejectActionButton from "../buttons/accept-reject-action-button";
import Dialog, { DialogTitle, DialogContent, DialogActions } from "../dialog";

export default function SettingCookieBanner() {
  return (
    <Dialog>
      <DialogTitle>{CookieTitle}</DialogTitle>
      <DialogContent>
        <p>{CookieSubtitle}</p>
        {
          CookieLevels.map((level, index) => (
            <div key={index} className="flex gap-2 items-start mt-2">
              <input type="checkbox" id={level.title} checked={level.required} disabled={level.required} className="apperance-none border-black rounded-sm bg-white inline-block shrink-0 m-1"/>
              <label htmlFor={level.title} className="inline-block">
                <span className="font-bold">{level.title}</span>: {level.description}
              </label>
            </div>
          ))
        }
        </DialogContent>
        <DialogActions>
          <AcceptRejectActionButton 
            actionTitle="Save" 
            longActionTitle="Save My Preferences" 
          />
        </DialogActions>
    </Dialog>
  );
}
