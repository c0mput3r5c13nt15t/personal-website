// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZKfTZgJ_X4CPVGLsLG-UMW6ceuq2Uw_Q",
  authDomain: "c0mput3r5c13nt15t.firebaseapp.com",
  projectId: "c0mput3r5c13nt15t",
  storageBucket: "c0mput3r5c13nt15t.appspot.com",
  messagingSenderId: "345342613346",
  appId: "1:345342613346:web:20826c9e08fe7d50c0be3b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
