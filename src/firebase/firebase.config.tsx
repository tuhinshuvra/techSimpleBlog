// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDREVMa-fOmZksWoGm0TkMzsLLUgwVlhyA",
    authDomain: "techsimpleblog.firebaseapp.com",
    projectId: "techsimpleblog",
    storageBucket: "techsimpleblog.appspot.com",
    messagingSenderId: "421861087648",
    appId: "1:421861087648:web:b48d09137b41d780df2cc5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;