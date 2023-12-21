// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAEpXRfTFE5-bUgCnnB90_RxH6KYsXcZ-s",
  authDomain: "doutsolver.firebaseapp.com",
  projectId: "doutsolver",
  storageBucket: "doutsolver.appspot.com",
  messagingSenderId: "991034582570",
  appId: "1:991034582570:web:6ddc65bc2c4b77a4434553",
  measurementId: "G-ZWQVZ33RBJ"
};

// Initialize Firebase
const app =initializeApp(firebaseConfig);
const auth =getAuth();
const provider =new GoogleAuthProvider();
export {auth,provider, app};
