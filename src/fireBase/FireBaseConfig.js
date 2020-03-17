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

export const firestore = firebase.firestore();
export const auth = firebase.auth();

//fireStore
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = await firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    try {
      const { email, displayName } = userAuth;
      const createdAt = new Date();

      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (e) {
      console.log(e);
    }
  }
  return userRef;
};

//auth
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider); //use it for onClick event

export default firebase;
