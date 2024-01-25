// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import { getReactNativePersistence } from "firebase/auth/react-native";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCh871EbVuoY6b7FnU4M4hexw-ydWKsy3M",
  authDomain: "bloom-2-82fdb.firebaseapp.com",
  projectId: "bloom-2-82fdb",
  storageBucket: "bloom-2-82fdb.appspot.com",
  messagingSenderId: "148865496403",
  appId: "1:148865496403:web:8ddd20da52ded67d471da6",
  measurementId: "G-GKX0ZHJNVW"
};

// Initialize Firebase
// export const app = initializeApp(firebaseConfig);
export const app = initializeApp(firebaseConfig);
initializeAuth(app, {
 persistence: getReactNativePersistence(AsyncStorage)
});

