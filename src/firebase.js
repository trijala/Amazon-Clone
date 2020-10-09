import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCkLxcXWt03XyjL2gtiu8AIL2MUlRxl-lk",
  authDomain: "clone-3c651.firebaseapp.com",
  databaseURL: "https://clone-3c651.firebaseio.com",
  projectId: "clone-3c651",
  storageBucket: "clone-3c651.appspot.com",
  messagingSenderId: "862626550929",
  appId: "1:862626550929:web:b8609d132db683b0fd9b30",
  measurementId: "G-KS2Q7Y7G1H",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
