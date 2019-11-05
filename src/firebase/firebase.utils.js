import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDn6R62Ghgf3WgkR7rIDlaA0FKJM7MvgTs",
  authDomain: "crowndb-e758c.firebaseapp.com",
  databaseURL: "https://crowndb-e758c.firebaseio.com",
  projectId: "crowndb-e758c",
  storageBucket: "crowndb-e758c.appspot.com",
  messagingSenderId: "374444581933",
  appId: "1:374444581933:web:2382bba1587e812256c4a4"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
