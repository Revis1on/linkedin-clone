import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'
import 'firebase/compat/auth'




// Required for side-effects
require("firebase/firestore");

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBtewlhKf9gCwI4k_3fDR7iA8lnaT24krE",
    authDomain: "linkedin-clone-25ae2.firebaseapp.com",
    projectId: "linkedin-clone-25ae2",
    storageBucket: "linkedin-clone-25ae2.appspot.com",
    messagingSenderId: "184090170063",
    appId: "1:184090170063:web:6b7695716c5ee258c95dba",
    measurementId: "G-6R5FXV8EJ8"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth}