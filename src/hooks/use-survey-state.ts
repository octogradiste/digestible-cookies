import { useState } from "react";
import { QUESTIONS } from "../constants/survey";

export default function useSurveyState() {
  const [surveyState, setSurveyState] = useState<SurveyResult[]>(
    QUESTIONS.map((question) => ({ question, answer: 0 })),
  );

  const onSurveyAnswer = (index: number, value: number) => {
    const updated = [...surveyState];
    updated[index] = { ...updated[index], answer: value };
    setSurveyState(updated);
  };

  return { surveyState, onSurveyAnswer };
}
