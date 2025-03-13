"use client";

import { COOKIE_SUBTITLE, COOKIE_TITLE, COOKIE_LEVELS } from "@/src/constants/cookies";
import AcceptRejectActionButton from "../buttons/accept-reject-action-button";
import Dialog, { DialogTitle, DialogContent, DialogActions } from "../dialog";
import { ChangeEvent, useState } from "react";
import CookieBannerProps from "@/src/models/banner/cookie-banner-props";
import { onAccept, onReject, onSave, getOnSliderChange } from "@/src/lib/banner";


export default function SliderCookieBanner({onDone, onInteract}: CookieBannerProps) {
  const [sliderValue, setSliderValue] = useState(0);

  const onSliderChange = getOnSliderChange(onInteract);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = Number.parseInt(event.target.value)
    setSliderValue(value);
    onSliderChange(value);
  }

  return (
    <Dialog>
      <DialogTitle>{COOKIE_TITLE}</DialogTitle>
      <DialogContent>
        <p>{COOKIE_SUBTITLE}</p>
        <div className="mt-4">
          <div className="flex flex-row">
            {
              COOKIE_LEVELS.map((_, index) => {
                const className = index <= sliderValue ? "font-bold" : "";
                return (
                  <div key={index} className="basis-2/6 first:basis-1/6 last:basis-1/6 flex justify-center first:justify-start last:justify-end">
                    <span className={className}>{(index + 1) * 25}%</span>
                  </div>
                );
              })
            }
          </div>
          <input type="range" min={0} max={3} value={sliderValue} onChange={onChange} className="w-full"/>
          <p className="mt-2">
            <span className="font-bold">{COOKIE_LEVELS[sliderValue].title}</span>: {COOKIE_LEVELS[sliderValue].description}
          </p>
        </div>
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
