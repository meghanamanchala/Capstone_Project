// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpyXeeiHJwlsBpCuSLcuhOjcI3kYcLB3Y",
  authDomain: "otp-provider-testing.firebaseapp.com",
  projectId: "otp-provider-testing",
  storageBucket: "otp-provider-testing.appspot.com",
  messagingSenderId: "178365831474",
  appId: "1:178365831474:web:91daed40554d70a5351f2b",
  measurementId: "G-T88VE4B0V9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;