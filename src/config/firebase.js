// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBihddX4M48ZhbmqacsKi0flablJBdNwDk",
  authDomain: "jitumoniapp.firebaseapp.com",
  projectId: "jitumoniapp",
  storageBucket: "jitumoniapp.appspot.com",
  messagingSenderId: "996085710882",
  appId: "1:996085710882:web:5d53aed960fe65a53cca7b",
  measurementId: "G-C7NF56VBEK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export the auth app
export const auth = getAuth(app);
export default app;