// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAq9A7XCGJ3HCLFrx2NQMUS7KCltcUqZ1g",
  authDomain: "coffee-store-58172.firebaseapp.com",
  projectId: "coffee-store-58172",
  storageBucket: "coffee-store-58172.firebasestorage.app",
  messagingSenderId: "850817299908",
  appId: "1:850817299908:web:99d17a77911190c40c6091"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
