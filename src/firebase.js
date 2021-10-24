import firebase, { initializeApp } from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDGGCub5ftD97OCKc3yC2GJF8ELRX7YqF8",
  authDomain: "clone-490e7.firebaseapp.com",
  projectId: "clone-490e7",
  storageBucket: "clone-490e7.appspot.com",
  messagingSenderId: "883249947198",
  appId: "1:883249947198:web:93fda0e857b081f8d6e76f"
};
const firebaseApp = initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth();

export {db, auth};