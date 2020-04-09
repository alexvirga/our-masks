import firebase from 'firebase/app'
import 'firebase/storage'
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
    apiKey: "AIzaSyA7mflCQ4UC17TMactdynuZN3DzRPrUnqk",
    authDomain: "our-masks-7bdf8.firebaseapp.com",
    databaseURL: "https://our-masks-7bdf8.firebaseio.com",
    projectId: "our-masks-7bdf8",
    storageBucket: "our-masks-7bdf8.appspot.com",
    messagingSenderId: "16114317048",
    appId: "1:16114317048:web:44fcc6180f1ee5160d2d0d",
    measurementId: "G-6Y9TFX2FEN"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const storage = firebase.storage()
  const firestore = firebase.firestore()
  const auth = firebase.auth()
 

  export  {
    storage, auth, firestore, firebase as default
  }