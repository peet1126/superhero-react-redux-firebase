import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAjzK4PL0sZ9YXkhCXxJ2M7ZdX7WiSdecI",
  authDomain: "react-redux-firebase-732ae.firebaseapp.com",
  databaseURL: "https://react-redux-firebase-732ae.firebaseio.com",
  projectId: "react-redux-firebase-732ae",
  storageBucket: "react-redux-firebase-732ae.appspot.com",
  messagingSenderId: "876900563357",
  appId: "1:876900563357:web:155c603dfb8844e7805774",
  measurementId: "G-9BLTMNH2YY"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
