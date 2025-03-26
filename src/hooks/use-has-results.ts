import { useAuthState } from "react-firebase-hooks/auth";
import { auth, firestore } from "../lib/firebase";
import { useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { COLLECTION_RESULTS } from "../constants/collections";

/**
 * Returns whether the user has results in Firestore.
 * If the user is not authenticated, the result will be undefined.
 * If the user has results, the result will be true.
 */
export const useHasResults = () => {
  const [user] = useAuthState(auth);
  const [hasResults, setHasResults] = useState<boolean | undefined>();

  useEffect(() => {
    if (user) {
      const unsubscribe = onSnapshot(
        doc(firestore, COLLECTION_RESULTS, user.uid),
        (document) => {
          setHasResults(document.exists());
        },
      );

      return () => {
        unsubscribe();
      };
    }
  }, [user]);

  return hasResults;
};
