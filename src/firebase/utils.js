import "firebase/firestore";
import firebase from "./firebase";

const db = firebase.firestore();

export async function getCollectionData(collectionName) {
  db.collection(collectionName).onSnapshot((snapshot) => {
    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  });
}
