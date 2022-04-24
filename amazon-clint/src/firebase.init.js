// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB24X9ucl2-KqEdvLvUfE9Jy3kpcN3pOJY",
  authDomain: "fir-345a5.firebaseapp.com",
  projectId: "fir-345a5",
  storageBucket: "fir-345a5.appspot.com",
  messagingSenderId: "614598858794",
  appId: "1:614598858794:web:33bd769fc66174e44e0b53",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
