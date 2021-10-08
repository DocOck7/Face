import * as firebase from 'firebase';
require('@firebase/firestore');

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABbo8sbpShqKj3YD_JS8NH7EjXCwzwRxE",
  authDomain: "wireless-buzzer-58a84.firebaseapp.com",
  databaseURL: "https://wireless-buzzer-58a84-default-rtdb.firebaseio.com",
  projectId: "wireless-buzzer-58a84",
  storageBucket: "wireless-buzzer-58a84.appspot.com",
  messagingSenderId: "284765404414",
  appId: "1:284765404414:web:c770d24ace377469e879af",
  measurementId: "G-S3G8H1YB8R"
};

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();