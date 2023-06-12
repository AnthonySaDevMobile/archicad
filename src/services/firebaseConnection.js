// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD7UP-nTtyo2HWXbtwrvlILVRzBJigW-cc",
  authDomain: "arch-8703d.firebaseapp.com",
  projectId: "arch-8703d",
  storageBucket: "arch-8703d.appspot.com",
  messagingSenderId: "879213018496",
  appId: "1:879213018496:web:d4752534ee7c965bdb9565"
};


export const appFirebase = initializeApp(firebaseConfig);
export const db = getFirestore(appFirebase);
export const auth = getAuth(appFirebase);
export const storage = getStorage(appFirebase)
export const storageRef = ref(storage);