"use client"

import { COOKIE_SUBTITLE, COOKIE_TITLE, COOKIE_LEVELS } from "@/src/constants/cookies";
import AcceptRejectActionButton from "../buttons/accept-reject-action-button";
import Dialog, { DialogTitle, DialogContent, DialogActions } from "../dialog";
import CookieBannerProps from "@/src/models/banner/cookie-banner-props";
import { ChangeEvent, useState } from "react";
import { getOnCheckboxChange, onAccept, onReject, onSave } from "@/src/lib/banner";

export default function SettingCookieBanner({ onDone, onInteract, animate }: CookieBannerProps) {
  const [checkboxValues, setCheckboxValues] = useState<{ [index: number]: boolean; }>({});

  const onCheckBoxChange = getOnCheckboxChange(onInteract);

  const onChange = (index: number) => (event: ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;
    setCheckboxValues({ ...checkboxValues, [index]: checked });
    onCheckBoxChange(index, checked);
  }

  return (
    <Dialog animate={animate}>
      <DialogTitle>{COOKIE_TITLE}</DialogTitle>
      <DialogContent>
        <p>{COOKIE_SUBTITLE}</p>
        {
          COOKIE_LEVELS.map((level, index) => (
            <div key={index} className="flex gap-2 items-start mt-2">
              <input
                type="checkbox"
                id={level.title}
                onChange={onChange(index)}
                checked={checkboxValues[index] || level.required}
                disabled={level.required}
                className="apperance-none border-black rounded-sm bg-white inline-block shrink-0 m-1 accent-black"
              />
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
          onAccept={onAccept(onDone, onInteract)}
          onReject={onReject(onDone, onInteract)}
          onAction={onSave(onDone, onInteract)}
        />
      </DialogActions>
    </Dialog>
  );
}
