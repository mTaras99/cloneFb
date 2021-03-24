// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDduY-aUa8TG9ewyV7-0DeNQyRYj_cob1U",
    authDomain: "challweb.firebaseapp.com",
    projectId: "challweb",
    storageBucket: "challweb.appspot.com",
    messagingSenderId: "372418520104",
    appId: "1:372418520104:web:8e8d5ab53e8db73b2fc11d",
    measurementId: "G-HFDVQ0PS4L"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export{ auth, provider }
  export default db;