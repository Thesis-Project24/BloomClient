// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth}from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

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
// export const authh = initializeAuth(app, {
//   persistence: getReactNativePersistence(ReactNativeAsyncStorage)
// });

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const auth=getAuth(app)
 export const store=getFirestore(app)
// const analytics = getAnalytics(app);
