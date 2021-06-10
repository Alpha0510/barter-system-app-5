import firebase from 'firebase';
require('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyDU-K9l3_xxeh9jCxKEH2iABHhQRf61cdc",
  authDomain: "bater-system-app-a58b7.firebaseapp.com",
  projectId: "bater-system-app-a58b7",
  storageBucket: "bater-system-app-a58b7.appspot.com",
  messagingSenderId: "956285114168",
  appId: "1:956285114168:web:274018c3926481561793cd"
};

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
