"use client";

import FilledButton from "@/src/components/buttons/filled-button";
import { SelectInput } from "@/src/components/select-input";
import { OPTIONS_1, OPTIONS_2 } from "@/src/constants/survey";
import SurveyState from "@/src/models/survey/survey-state";

interface SurveyProps {
  surveyState: SurveyState;
  onAnswer: (part: number, index: number, value: number) => void;
  onSubmit: () => void;
}

export default function Survey({ surveyState, onAnswer, onSubmit }: SurveyProps) {
  return (
    <div className="flex flex-row justify-center">
      <div className="max-w-lg my-8 mx-6">
        <p className="font-bold text-2xl mb-2">Survey</p>
        <p className="mb-2 text-justify">
          Hey there! Thanks for checking out our cookie banner. You might have guessed it - we’re running a study on how people interact with different banner designs.
        </p>
        <p className="mb-6 text-justify">
          You were randomly shown one of three versions, and your feedback will help us figure out which design is the most user-friendly.
        </p>
        <div className="mb-6">
          <div className="grid grid-cols-5 gap-4 items-center text-sm mb-6">
            {OPTIONS_1.map((option, index) => (
              <span key={index} className="w-full text-center">{option.label}</span>
            ))}
          </div>
          {surveyState.part1.map((result, index) => (
            <div key={index} className="mb-6">
              <p className="mb-2 text-sm text-justify">
                {result.question}
              </p>
              <SelectInput
                options={OPTIONS_1}
                selected={result.answer}
                onSelect={(value) => onAnswer(1, index, value)}
              />
            </div>
          ))}
        </div>
        <p className="mb-6 text-justify">
          In the next section, we’ll ask you a few more questions about the cookie banner you just saw. Don’t worry, it’s super quick!
        </p>
        <div className="mb-6">
          <div className="grid grid-cols-5 gap-4 items-center text-sm mb-6">
            {OPTIONS_2.map((option, index) => (
              <span key={index} className="w-full text-center">{option.label}</span>
            ))}
          </div>
          {surveyState.part2.map((result, index) => (
            <div key={index} className="mb-6">
              <p className="mb-2 text-sm text-justify">
                {result.question}
              </p>
              <SelectInput
                options={OPTIONS_2}
                selected={result.answer}
                onSelect={(value) => onAnswer(1, index, value)}
              />
            </div>
          ))}
        </div>
        <p className="mb-2 font-bold">Almost done!</p>
        <p className="mb-2 text-justify">
          We really appreciate your time. Before you submit, here’s what we’ll collect along with your answers:
        </p>
        <div className="flex flex-col mb-2">
          <div className="flex items-center gap-2">
            <span>✅</span> <span>Your browser type</span>
          </div>
          <div className="flex items-center gap-2">
            <span>✅</span> <span>Your screen size</span>
          </div>
          <div className="flex items-center gap-2">
            <span>✅</span> <span>How you interacted with the banner</span>
          </div>
          <div className="flex items-center gap-2">
            <span>✅</span> <span>Your answers to the survey</span>
          </div>
          <div className="flex items-center gap-2">
            <span>✅</span> <span>Time taken to complete the survey</span>
          </div>
        </div>
        <p className="mb-6 text-justify">That’s it! Just hit the button below to submit your responses. Thanks again for helping us make cookie banners less annoying! 🍪✨</p>
        <div className="flex justify-center">
          <FilledButton title="Submit" onClick={onSubmit} />
        </div>
      </div>
    </div>
  );
}

