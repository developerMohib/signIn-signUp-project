// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkvPf2h4aRatAxPF91e7D-fcx5cLji1cA",
  authDomain: "signin-signup-project-69d8e.firebaseapp.com",
  projectId: "signin-signup-project-69d8e",
  storageBucket: "signin-signup-project-69d8e.appspot.com",
  messagingSenderId: "1070583916646",
  appId: "1:1070583916646:web:147f7336548cdfa10c25a7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth ;