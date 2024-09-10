// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtQGVWLigntScWWCUhNg-tUtNmHvvpjCw",
  authDomain: "netflixgpt-99d02.firebaseapp.com",
  projectId: "netflixgpt-99d02",
  storageBucket: "netflixgpt-99d02.appspot.com",
  messagingSenderId: "189417778329",
  appId: "1:189417778329:web:d9da6209df910fddcf1c08",
  measurementId: "G-QGTZSGP5QN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
