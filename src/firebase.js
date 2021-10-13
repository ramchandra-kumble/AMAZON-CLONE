import firebase from 'firebase'
var firebaseConfig = {
    apiKey: process.env.React_App_URL,
    authDomain: "learning-f80ea.firebaseapp.com",
    databaseURL: "https://learning-f80ea-default-rtdb.firebaseio.com",
    projectId: "learning-f80ea",
    storageBucket: "learning-f80ea.appspot.com",
    messagingSenderId: "841502367083",
    appId: "1:841502367083:web:97c39291ce0a20156c402e"
  };
 
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };