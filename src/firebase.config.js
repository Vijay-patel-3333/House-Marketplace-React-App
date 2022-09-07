// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD56nUT3z9ZgO1y2AUmAjL2VO1hK2FwRL4",
  authDomain: "house-marketplace-react-917a7.firebaseapp.com",
  projectId: "house-marketplace-react-917a7",
  storageBucket: "house-marketplace-react-917a7.appspot.com",
  messagingSenderId: "91724798112",
  appId: "1:91724798112:web:c9effeff506d5a1e0011c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db= getFirestore()