import { useAuthState } from "react-firebase-hooks/auth";
import { auth, firestore } from "../lib/firebase";
import { useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { COLLECTION_RESULTS } from "../constants/collections";

export const useHasResults = () => {
  const [user] = useAuthState(auth);
  const [hasResults, setHasResults] = useState<boolean>(false);

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
