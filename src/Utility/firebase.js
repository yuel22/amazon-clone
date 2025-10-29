import firebase from "firebase/compat/app";
// auth
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpYogHqkUvJ7ZRUn2NeeHjYmJKP4RuK8Q",
  authDomain: "clone-ac9ea.firebaseapp.com",
  projectId: "clone-ac9ea",
  storageBucket: "clone-ac9ea.firebasestorage.app",
  messagingSenderId: "579634009803",
  appId: "1:579634009803:web:bf95c1bc8a52aaa0b32d4e",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();
