import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAICq_-IsiPGCj0TzB7ESyufGmsDR8urAU",
  authDomain: "digestible-cookies.firebaseapp.com",
  projectId: "digestible-cookies",
  storageBucket: "digestible-cookies.firebasestorage.app",
  messagingSenderId: "772901872182",
  appId: "1:772901872182:web:73cfcdc473d1c01afbae97",
};

const firebase = initializeApp(firebaseConfig);

export const auth = getAuth(firebase);

export const firestore = getFirestore(firebase);
