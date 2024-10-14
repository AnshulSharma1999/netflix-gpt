// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkULcxRhHRlr__GwFHhwGMbO-7RYk5Doc",
  authDomain: "netflixgpt-d16a4.firebaseapp.com",
  projectId: "netflixgpt-d16a4",
  storageBucket: "netflixgpt-d16a4.appspot.com",
  messagingSenderId: "670126652730",
  appId: "1:670126652730:web:6f15eef66d68513fc5a403",
  measurementId: "G-B9T51XN67W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();