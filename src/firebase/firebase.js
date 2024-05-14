// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWjwKlYlk6D8pfV-O5XDYBX7KCrcXKnHc",
  authDomain: "sqltodocook.firebaseapp.com",
  projectId: "sqltodocook",
  storageBucket: "sqltodocook.appspot.com",
  messagingSenderId: "618511804109",
  appId: "1:618511804109:web:40f111471c423353622b84"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const auth = getAuth(app);