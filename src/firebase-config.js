// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCf2reXwh4yJyuEsoTFqfUaqSfeG46PgMM",
  authDomain: "library-crud-4dd3c.firebaseapp.com",
  projectId: "library-crud-4dd3c",
  storageBucket: "library-crud-4dd3c.appspot.com",
  messagingSenderId: "148408378823",
  appId: "1:148408378823:web:f1224e5eb2e3023cac25e2",
  measurementId: "G-15SZ6EPYYV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db =getFirestore(app);

