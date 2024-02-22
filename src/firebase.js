import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC7e8QGBQ74-3KBSPnpYXQTVX-YkSnKGtY",
  authDomain: "trip-415112.firebaseapp.com",
  projectId: "trip-415112",
  storageBucket: "trip-415112.appspot.com",
  messagingSenderId: "95553895863",
  appId: "1:95553895863:web:f461c3294d14dcea79bc32",
  measurementId: "G-6Q9TSP9BRC",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
