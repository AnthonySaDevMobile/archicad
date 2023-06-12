// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBSO8LEVcOI4CJ2vYLwgfT_qtm8TBXvoEU",
  authDomain: "archicad-3dc5a.firebaseapp.com",
  projectId: "archicad-3dc5a",
  storageBucket: "archicad-3dc5a.appspot.com",
  messagingSenderId: "810825032972",
  appId: "1:810825032972:web:d47953693db538f8f21529",
  measurementId: "G-3R2KTXNBC6"
};


export const appFirebase = initializeApp(firebaseConfig);
export const db = getFirestore(appFirebase);
export const auth = getAuth(appFirebase);
export const storage = getStorage(appFirebase)
export const storageRef = ref(storage);