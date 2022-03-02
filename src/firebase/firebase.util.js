// Since after version 8 add compat
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyD7jfJPZPKBOn0bSnb82qzdtR-vlxt1br0",
    authDomain: "crown-db-4f398.firebaseapp.com",
    projectId: "crown-db-4f398",
    storageBucket: "crown-db-4f398.appspot.com",
    messagingSenderId: "247557073049",
    appId: "1:247557073049:web:bef6477d0c1b41de7e7008",
    measurementId: "G-K96QB0G4QP"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

//   Set up for Google user use

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
