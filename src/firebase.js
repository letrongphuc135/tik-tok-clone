import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyAB_oMPeOTs8U414OyOyyWlWckYKuwUk6Q",
    authDomain: "firegram-2cd4a.firebaseapp.com",
    databaseURL: "https://firegram-2cd4a.firebaseio.com",
    projectId: "firegram-2cd4a",
    storageBucket: "firegram-2cd4a.appspot.com",
    messagingSenderId: "915650653242",
    appId: "1:915650653242:web:f1e6eb256734222d31d903"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;