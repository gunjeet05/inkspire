// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAROoYwV8p6Njr3eAA2q5WMOrktZRr05aE",
  authDomain: "inkspire2-64013.firebaseapp.com",
  projectId: "inkspire2-64013",
  storageBucket: "inkspire2-64013.firebasestorage.app",
  messagingSenderId: "104412577635",
  appId: "1:104412577635:web:e99b2e40bf0e7876215d56",
  measurementId: "G-8P3HKJNKHE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage=getStorage(app);
export {storage}