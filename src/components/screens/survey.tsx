"use client";

import FilledButton from "@/src/components/buttons/filled-button";
import { SelectInput } from "@/src/components/select-input";
import { OPTIONS } from "@/src/constants/survey";

interface SurveyProps {
  results: SurveyResult[];
  onAnswer: (index: number, value: number) => void;
  onSubmit: () => void;
}

export default function Survey({ results, onAnswer, onSubmit }: SurveyProps) {
  return (
    <div className="flex flex-row justify-center">
      <div className="max-w-lg my-8">
        <p className="font-bold text-2xl mb-2">Survey</p>
        <p className="mb-6 text-justify">
          As you may have guessed, this study is more specifically about cookies and cookie banners. You were randomly shown one of the banner designs, and your participation helps us determine which designs are more digestible.
        </p>
        {
          results.map((result, index) => (
            <div key={index} className="mb-6">
              <p className="mb-2 text-sm text-justify">
                {index + 1}. {result.question}
              </p>
              <SelectInput
                options={OPTIONS}
                selected={result.answer}
                onSelect={(value) => onAnswer(index, value)}
              />
            </div>
          ))
        }
        <p className="mb-6 text-justify">
          As long as you don not submit, you can opt out of the study at any time. As soon as you submit, your answers will be recorded and used for the study.
        </p>
        <div className="flex justify-center">
          <FilledButton title="Submit" onClick={onSubmit} />
        </div>
      </div>
    </div>
  );
}
