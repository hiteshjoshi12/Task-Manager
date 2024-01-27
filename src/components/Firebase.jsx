
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA754_6G2wCyLSCkm4uc5kVTDrAY1fS1Vw",
  authDomain: "todo-eaa91.firebaseapp.com",
  projectId: "todo-eaa91",
  storageBucket: "todo-eaa91.appspot.com",
  messagingSenderId: "809541666692",
  appId: "1:809541666692:web:dc60d668c4383d5673bfd1",
  measurementId: "G-0L4K22T0D3"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



export const auth = getAuth();