import firebase from "firebase";

var firebaseConfig = {
  apiKey: process.env.FIREBASE_API,
  authDomain: "portfolio-61b97.firebaseapp.com",
  projectId: "portfolio-61b97",
  storageBucket: "portfolio-61b97.appspot.com",
  messagingSenderId: "1005601409775",
  appId: "1:1005601409775:web:d2647d8f5ba955f44fa91a",
  measurementId: "G-TKKV21J3HF",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();

export { projectFirestore };