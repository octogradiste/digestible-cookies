"use client";

import FilledButton from "@/src/components/buttons/filled-button";
import { SelectInput } from "@/src/components/select-input";
import { OPTIONS } from "@/src/constants/survey";
import SurveyResult from "@/src/models/survey/survey-result";

interface SurveyProps {
  results: SurveyResult[];
  error?: string;
  onAnswer: (index: number, value: number) => void;
  onSubmit: () => void;
}

export default function Survey({ results, error, onAnswer, onSubmit }: SurveyProps) {
  return (
    <div className="flex flex-row justify-center">
      <div className="max-w-lg my-8 mx-6">
        <p className="font-bold text-2xl mb-2">Survey</p>
        <p className="mb-2 text-justify">
          Hey there! Thanks for checking out our cookie banner. You might have guessed it - we’re running a study on how people interact with different banner designs.
        </p>
        <p className="mb-2 text-justify">
          You were randomly shown one of three versions, and your feedback will help us figure out which design is the most user-friendly.
        </p>
        <p className="mb-6 text-justify">
          The first few questions are about your general cookie <span className="font-bold">preferences</span>, then we’ll ask you about the <span className="font-bold">design</span> and finally about the <span className="font-bold">content</span> of the banner you saw.
        </p>
        <div className="mb-6">
          <div className="grid grid-cols-5 gap-4 items-center text-sm mb-6">
            {OPTIONS.map((option, index) => (
              <span key={index} className="w-full text-center">{option.label}</span>
            ))}
          </div>
          {results.map((result, index) => (
            <div key={index} className="mb-6">
              <p className="mb-2 text-sm text-justify">
                {result.question}
              </p>
              <SelectInput
                options={OPTIONS}
                selected={result.answer}
                onSelect={(value) => onAnswer(index, value)}
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
        {error &&
          <div className="mb-6 p-3 border border-red-500 bg-red-100 text-red-700 rounded-md">
            {error}
          </div>
        }
        <div className="flex justify-center">
          <FilledButton title="Submit" onClick={onSubmit} />
        </div>
      </div>
    </div>
  );
}

