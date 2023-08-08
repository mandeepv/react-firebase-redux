// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxLd-QogV1PS97G0pCc-b0l3Nt_iC3vO4",
  authDomain: "experiment-5a193.firebaseapp.com",
  projectId: "experiment-5a193",
  storageBucket: "experiment-5a193.appspot.com",
  messagingSenderId: "1081928107412",
  appId: "1:1081928107412:web:e660211731d7d1289bbb81",
  measurementId: "G-4QGS3K43GD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);


export {auth, db}