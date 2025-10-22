// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBtvVJn78uLlSPZUTkc-lEFPImqlLnRj4Y",
    authDomain: "fir-fighter-2e7b6.firebaseapp.com",
    projectId: "fir-fighter-2e7b6",
    storageBucket: "fir-fighter-2e7b6.firebasestorage.app",
    messagingSenderId: "125576634131",
    appId: "1:125576634131:web:0e5c85a70b1bb31da7c4e6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);