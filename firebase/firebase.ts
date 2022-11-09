// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmqs-B67TB7qkREut8X1pWo-TcnLMPF0I",
  authDomain: "blog-site-9033a.firebaseapp.com",
  projectId: "blog-site-9033a",
  storageBucket: "blog-site-9033a.appspot.com",
  messagingSenderId: "755128292059",
  appId: "1:755128292059:web:ac1cfa743ae56a5c89f2fe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app)