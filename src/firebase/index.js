import firebase from 'firebase/app';
import 'firebase/firestore'

const app = firebase.initializeApp({
  apiKey: "AIzaSyC-k3xrK2WXLOyGMxkYS-GB17H1usTIO-8",
  authDomain: "ecommerce-react-lopez.firebaseapp.com",
  projectId: "ecommerce-react-lopez",
  storageBucket: "ecommerce-react-lopez.appspot.com",
  messagingSenderId: "989040829910",
  appId: "1:989040829910:web:7148910497b6771183b077"
});

export function getFirebase() {
    return app;
}

export function getFirestore() {
    return firebase.firestore(app)
}
