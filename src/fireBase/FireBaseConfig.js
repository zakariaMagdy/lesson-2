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
  const userRef = firestore.doc(`users/${userAuth.uid}`);
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

export const createCollectionAndDocuments = async (
  collectionName,
  ArrofObjects
) => {
  const createCollectionRef = firestore.collection(collectionName); //create collection with id by name
  const batch = firestore.batch(); //create batch to group our set request

  ArrofObjects.forEach(obj => {
    const createDocRef = createCollectionRef.doc(); //create a doc in our collection
    batch.set(createDocRef, obj);
  });

  await batch.commit().then(curr => console.log(curr, "success")); //return promise
};

export const getTransformedData = snapshot => {
  const transformedCollections = snapshot.docs.map(doc => {
    const { title, items } = doc.data();
    return {
      id: doc.id,
      routaName: encodeURI(title.toLowerCase()),
      title,
      items
    };
  });

  return transformedCollections.reduce((accumilation, collection) => {
    accumilation[collection.title.toLowerCase()] = collection;
    return accumilation;
  }, {});
};

//auth
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider); //use it for onClick event

export default firebase;
