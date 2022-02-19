import firebase from 'firebase';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDohjAtT8qMrv13ID8wkC-qBzs_h21kP44",
  authDomain: "quiz-app-ver2.firebaseapp.com",
  projectId: "quiz-app-ver2",
  storageBucket: "quiz-app-ver2.appspot.com",
  messagingSenderId: "833462896498",
  appId: "1:833462896498:web:882f2b67fb875f43faffeb",
  measurementId: "G-S1KLV8K3QV"
};

// Initialize Firebase
initializeApp(firebaseConfig);
getAnalytics();

export const db = firebase.firestore();
export const dbUsers = db.collection("users");
