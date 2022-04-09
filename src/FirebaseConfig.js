
import { initializeApp } from "firebase/app";
import 'firebase/firestore'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



const firebaseConfig = {

  apiKey: "AIzaSyBV88_WedNKOH8jZREWaNbU8PQZF5NKo6U",

  authDomain: "trabalhotdw.firebaseapp.com",

  projectId: "trabalhotdw",

  storageBucket: "trabalhotdw.appspot.com",

  messagingSenderId: "643221826917",

  appId: "1:643221826917:web:e35d84bba057f016c7058c",

  measurementId: "G-STM0QGRKL5"

};


// Initialize Firebase


if (!firebase.apps.length){
  firebase.initializeApp(firebaseConfig)
}

export default firebaseConfig;


