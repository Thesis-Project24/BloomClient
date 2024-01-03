// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCm1T-PCyb1f51dOTmSuHw3vVb92IHWvo8",
  authDomain: "bloom-e9bf4.firebaseapp.com",
  projectId: "bloom-e9bf4",
  storageBucket: "bloom-e9bf4.appspot.com",
  messagingSenderId: "354790966478",
  appId: "1:354790966478:web:71c1c33a94e329b06bbc9f",
  measurementId: "G-53JFX45BSY",
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
