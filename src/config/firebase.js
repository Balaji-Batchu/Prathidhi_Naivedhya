import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDspYB3cyQ5RtT0LHjBD9IprtscunJ1Nm8",
  authDomain: "prathidhi-naivedhya.firebaseapp.com",
  projectId: "prathidhi-naivedhya",
  storageBucket: "prathidhi-naivedhya.appspot.com",
  messagingSenderId: "1948566972",
  appId: "1:1948566972:web:5ea9af050286e29511d7b9",
  measurementId: "G-D6GQVK9HYN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

export const db = new getFirestore(app);