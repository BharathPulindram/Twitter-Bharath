import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBaBDU3x9qM7jR5Fp3V4anLYbuG7hTWSnk",
  authDomain: "twitter-bharath.firebaseapp.com",
  databaseURL: "https://twitter-bharath.firebaseio.com",
  projectId: "twitter-bharath",
  storageBucket: "twitter-bharath.appspot.com",
  messagingSenderId: "208995469162",
  appId: "1:208995469162:web:fbd4b0f5edb99eb1898713",
  measurementId: "G-Y0RN04ZFEQ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;
