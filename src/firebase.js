// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzPFa0D-DBt08jUSnbvoAZkOQZT6ORJs4",
  authDomain: "auth-yt-45a35.firebaseapp.com",
  projectId: "auth-yt-45a35",
  storageBucket: "auth-yt-45a35.appspot.com",
  messagingSenderId: "637893462941",
  appId: "1:637893462941:web:1ffd9cf83f3170190b3d74"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);