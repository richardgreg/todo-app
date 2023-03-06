// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: `${process.env.API_KEY}`,
  authDomain: "todo-app-e8fec.firebaseapp.com",
  projectId: "todo-app-e8fec",
  storageBucket: "todo-app-e8fec.appspot.com",
  messagingSenderId: "38626484739",
  appId: "1:38626484739:web:bf293888e617bf4d3ca436"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)