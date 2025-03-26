import { doc, setDoc } from "firebase/firestore";
import CookieState from "../models/cookie/cookie-state";
import { auth, firestore } from "./firebase";
import { COLLECTION_RESULTS } from "../constants/collections";
import SurveyState from "../models/survey/survey-state";

/**
 * Saves the cookie interactions and survey resutls to Firestore.
 * If the user is not authenticated, the data will not be saved.
 */
export function save(
  cookieState: CookieState | undefined,
  surveyState: SurveyState,
) {
  const uid = auth.currentUser?.uid;
  if (uid) {
    const data = {
      ...cookieState,
      survey: surveyState,
      end: new Date(),
    };

    setDoc(doc(firestore, COLLECTION_RESULTS, uid), data);
  }
}
