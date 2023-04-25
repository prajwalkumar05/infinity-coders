import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore,Timestamp } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyB7XPwOaGFDC9cYCfdgOMQ6gpHRcRvJ-l8",
  authDomain: "energy-and-sustanability.firebaseapp.com",
  projectId: "energy-and-sustanability",
  storageBucket: "energy-and-sustanability.appspot.com",
  messagingSenderId: "63078790167",
  appId: "1:63078790167:web:d6490985199df4fbef1852"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth()

const db = getFirestore()

export {db,auth}