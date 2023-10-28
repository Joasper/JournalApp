// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjB4gsDvZmpv2-zleX-QvrQCHHZYp9-LA",
  authDomain: "journalapp-5a828.firebaseapp.com",
  projectId: "journalapp-5a828",
  storageBucket: "journalapp-5a828.appspot.com",
  messagingSenderId: "1058261898764",
  appId: "1:1058261898764:web:dd1630fefa32cc35188029",
};

// Initialize Firebase
export const Firebaseapp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(Firebaseapp);
export const FirebaseDB = getFirestore(Firebaseapp);
