// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAba1C7eq1FBn3h7eVNreggtZYtObl5o8I",
  authDomain: "proyectofinalreact-eb6aa.firebaseapp.com",
  projectId: "proyectofinalreact-eb6aa",
  storageBucket: "proyectofinalreact-eb6aa.appspot.com",
  messagingSenderId: "868184680919",
  appId: "1:868184680919:web:c5df238e7a6daa5e9d4392",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
