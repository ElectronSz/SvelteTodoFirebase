import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
var firebaseConfig = {

    apiKey: "AIzaSyCjwaHNjUBgnRXT9glSxV3z17BoYW-fAis",
    authDomain: "onlyapp-a241a.firebaseapp.com",
    databaseURL: "https://onlyapp-a241a.firebaseio.com",
    projectId: "onlyapp-a241a",
    storageBucket: "onlyapp-a241a.appspot.com",
    messagingSenderId: "741710151815",
    appId: "1:741710151815:web:816a218064e0f583bdb822",
    measurementId: "G-33ZJ2ED1KV"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();

export const db = firebase.firestore();