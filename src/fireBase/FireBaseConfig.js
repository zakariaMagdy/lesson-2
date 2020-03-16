import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyC_3jbSPeqj_Qnh4WfThjTBQIpyqGDuMCw",
  authDomain: "mycrown-db-cd22c.firebaseapp.com",
  databaseURL: "https://mycrown-db-cd22c.firebaseio.com",
  projectId: "mycrown-db-cd22c",
  storageBucket: "mycrown-db-cd22c.appspot.com",
  messagingSenderId: "1095294273579",
  appId: "1:1095294273579:web:1b2c3fc14823d2e593026e",
  measurementId: "G-RXBG447KZT"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
