import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'

var firebaseConfig = {
    apiKey: "AIzaSyA1fPg_7QckA4lIx40RuccxH5BRURj_dWc",
    authDomain: "cellphone2020fpi.firebaseapp.com",
    projectId: "cellphone2020fpi",
    storageBucket: "cellphone2020fpi.appspot.com",
    messagingSenderId: "1084553112314",
    appId: "1:1084553112314:web:d116198e9e330e9265f743"
  };

  const app = firebase.initializeApp(firebaseConfig)

  export const storage = app.storage()
  export const db = app.firestore()