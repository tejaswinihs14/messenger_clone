import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCI5h5B3YYjjemZwvkFlXXsGUE2hcCO3ks",
    authDomain: "messenger-clone-79d7b.firebaseapp.com",
    projectId: "messenger-clone-79d7b",
    storageBucket: "messenger-clone-79d7b.appspot.com",
    messagingSenderId: "174718945737",
    appId: "1:174718945737:web:76c9b589bbece913650018",
    measurementId: "G-1GTKZDE6HK"
  });

  const db = firebaseApp.firestore();

  export default db;