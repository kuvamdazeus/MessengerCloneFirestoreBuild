import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB7pUDih13w9KG6bo_Vq-qoChH58xFkfk8",
    authDomain: "messenger-clone-firestore.firebaseapp.com",
    databaseURL: "https://messenger-clone-firestore-default-rtdb.firebaseio.com",
    projectId: "messenger-clone-firestore",
    storageBucket: "messenger-clone-firestore.appspot.com",
    messagingSenderId: "890907187167",
    appId: "1:890907187167:web:9077c342f8796ba92c966a",
    measurementId: "G-GD5ZBJQ390"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;