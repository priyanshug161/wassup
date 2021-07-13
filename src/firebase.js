import firebase from 'firebase'
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA_8OnHVyXU4unQ2_RcXbxS_It05kSycZo",
    authDomain: "wassup-b4403.firebaseapp.com",
    projectId: "wassup-b4403",
    storageBucket: "wassup-b4403.appspot.com",
    messagingSenderId: "1052017451534",
    appId: "1:1052017451534:web:307dd83ba4ae3e160cd25f",
    measurementId: "G-FJ1DCCXFPW"
})

const db = firebaseApp.firestore()

const auth = firebaseApp.auth()

export {db, auth}
