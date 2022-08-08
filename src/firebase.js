import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB5ROZDSSLZKDQqllHNPV3W6F0fsKS7aZ8",
  authDomain: "disney-clone-bdb0c.firebaseapp.com",
  projectId: "disney-clone-bdb0c",
  storageBucket: "disney-clone-bdb0c.appspot.com",
  messagingSenderId: "955740454651",
  appId: "1:955740454651:web:c7b0aedc1b01744312fa5e",
  measurementId: "G-VF7CDE475B",
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider, db };
