import firebase from "firebase/app";

const config = {
  apiKey: "AIzaSyBnRI6z1978RoEhT6d1IxnAFLydaCowgNE",
  authDomain: "patientgram-1ab54.firebaseapp.com",
  databaseURL: "https://patientgram-1ab54.firebaseio.com",
  projectId: "patientgram-1ab54",
  storageBucket: "patientgram-1ab54.appspot.com",
  messagingSenderId: "920339061303",
  appId: "1:920339061303:web:5474a5c896980f020a7db2",
  measurementId: "G-XWWXWSTBCE",
};

firebase.initializeApp(config);

export default firebase;
