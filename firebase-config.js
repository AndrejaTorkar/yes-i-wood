// ATorkar started writing code
// File formatted with Prettier
// RESOURCES: https://firebase.google.com/docs/remote-config
// RESOURCES: https://firebase.google.com/docs/remote-config/parameters

import firebase from "firebase/compat/app";
import "firebase/compat/database";

const firebaseConfig = {
  apiKey: "AIzaSyA7Xp-haz-IJJZKtBtJnYF3LFZAZKlZeas",
  authDomain: "com.handyman.yes-i-wood",
  databaseURL:
    "https://yes-i-wood-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "yes-i-wood",
  storageBucket: "yes-i-wood.appspot.com",
  messagingSenderId: "399891903692",
  appId: "1:399891903692:ios:5a2e13b7441b9d6b97fe69",
};

firebase.initializeApp(firebaseConfig);

export default firebase;

// ATorkar finished writing code
