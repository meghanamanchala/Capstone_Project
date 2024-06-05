import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAqgz2Iskc4bonazbxI4Rzcq_XRTCbwgVI",
  authDomain: "capstone-medi-connect.firebaseapp.com",
  projectId: "capstone-medi-connect",
  storageBucket: "capstone-medi-connect.appspot.com",
  messagingSenderId: "1072350520890",
  appId: "1:1072350520890:web:0ef1858e28839d881bf703",
  measurementId: "G-KPN4FSK5VQ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = 'en'
const provider = new GoogleAuthProvider();

export {auth,provider}