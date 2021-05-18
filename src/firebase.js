import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "get-your-own-api-key",
    authDomain: "messenger-clone-firestore.firebaseapp.com",
    databaseURL: "******",
    projectId: "messenger-clone-firestore",
    storageBucket: "messenger-*******",
    messagingSenderId: "890907187167",
    appId: "1:890907187167:web:9077c342f8796ba92c966a",
    measurementId: "G-GD5ZBJQ390"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
