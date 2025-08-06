import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnLTkwlVndWNf_ksWB5hpfGo0qlornL9s",
  authDomain: "swasth-ths.firebaseapp.com",
  projectId: "swasth-ths",
  storageBucket: "swasth-ths.firebasestorage.app",
  messagingSenderId: "695607780825",
  appId: "1:695607780825:web:a2bf6b899bfebdca56a5c8",
  measurementId: "G-Q1KG86L6G7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup, onAuthStateChanged, signOut };