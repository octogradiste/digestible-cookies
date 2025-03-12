"use client";

import { CookieSubtitle, CookieTitle, CookieLevels } from "@/src/constants/cookies";
import AcceptRejectActionButton from "../buttons/accept-reject-action-button";
import Dialog, { DialogTitle, DialogContent, DialogActions } from "../dialog";
import { ChangeEvent, useState } from "react";

export default function SliderCookieBanner() {
  const [sliderValue, setSliderValue] = useState(0);

  const onSliderChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSliderValue(Number.parseInt(event.target.value));
  }

  return (
    <Dialog>
      <DialogTitle>{CookieTitle}</DialogTitle>
      <DialogContent>
        <p>{CookieSubtitle}</p>
        <div className="mt-4">
          <div className="flex flex-row">
            {
              CookieLevels.map((_, index) => {
                const className = index <= sliderValue ? "font-bold" : "";
                return (
                  <div key={index} className="basis-2/6 first:basis-1/6 last:basis-1/6 flex justify-center first:justify-start last:justify-end">
                    <span className={className}>{(index + 1) * 25}%</span>
                  </div>
                );
              })
            }
          </div>
          <input type="range" min={0} max={3} value={sliderValue} onChange={onSliderChange} className="w-full"/>
          <p className="mt-2">
            <span className="font-bold">{CookieLevels[sliderValue].title}</span>: {CookieLevels[sliderValue].description}
          </p>
        </div>
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
