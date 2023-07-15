import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBevzVlbodP1u3FHfeAcJODURfIGfW5XE0",
    authDomain: "clone-fc822.firebaseapp.com",
    projectId: "clone-fc822",
    storageBucket: "clone-fc822.appspot.com",
    messagingSenderId: "1016325024547",
    appId: "1:1016325024547:web:95fcc3c0f15e01ab8aba96"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();
const authu = firebase.auth();

export {database, authu};