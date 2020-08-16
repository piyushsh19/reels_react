import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCjfP74Fi1CKnXPAW_yCHA6PPWds7MPAfQ",
    authDomain: "reels-6a9bb.firebaseapp.com",
    databaseURL: "https://reels-6a9bb.firebaseio.com",
    projectId: "reels-6a9bb",
    storageBucket: "reels-6a9bb.appspot.com",
    messagingSenderId: "298801011206",
    appId: "1:298801011206:web:325c32baad6ccea6d48187",
    measurementId: "G-14FSLW2BMS"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
export default db;