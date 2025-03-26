import { useState } from "react";
import { QUESTIONS_1, QUESTIONS_2 } from "../constants/survey";
import SurveyState from "../models/survey/survey-state";

export default function useSurveyState() {
  const [surveyState, setSurveyState] = useState<SurveyState>({
    part1: QUESTIONS_1.map((question) => ({ question, answer: 0 })),
    part2: QUESTIONS_2.map((question) => ({ question, answer: 0 })),
  });

  const onSurveyAnswer = (part: number, index: number, value: number) => {
    const updated = { ...surveyState };
    if (part === 1) {
      updated.part1[index] = { ...updated.part1[index], answer: value };
    } else if (part === 2) {
      updated.part2[index] = { ...updated.part2[index], answer: value };
    }

    setSurveyState(updated);
  };

  return { surveyState, onSurveyAnswer };
}
