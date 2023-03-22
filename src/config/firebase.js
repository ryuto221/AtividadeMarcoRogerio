import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAa_rAUEJGr-3ujWld4y1vgQjzHLHXT9a4",
  authDomain: "aula-firebase-75d1b.firebaseapp.com",
  projectId: "aula-firebase-75d1b",
  storageBucket: "aula-firebase-75d1b.appspot.com",
  messagingSenderId: "855807797453",
  appId: "1:855807797453:web:63422dd3cf6c48e5a8e184",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { app, auth };
