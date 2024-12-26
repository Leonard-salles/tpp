// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore"


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2avqih5JKKQUB0818zURVoO6ioZXwN3o",
  authDomain: "tpp-x1.firebaseapp.com",
  projectId: "tpp-x1",
  storageBucket: "tpp-x1.firebasestorage.app",
  messagingSenderId: "25600631426",
  appId: "1:25600631426:web:5a11b0e67ed240b89d4a9b",
  measurementId: "G-TFKVGPWHSN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export { db }
