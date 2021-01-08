import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./store/reducers/rootReducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createFirestoreInstance, getFirestore , reduxFirestore} from "redux-firestore"; // add reduxFirestore
import { ReactReduxFirebaseProvider, getFirebase } from "react-redux-firebase";
import fbConfig from "./config/fbConfig";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { useSelector } from "react-redux";
import { isLoaded } from "react-redux-firebase";
// import { reduxFirestore } from "redux-firestore";
// import { reactReduxFirebase, getFirebase } from "react-redux-firebase";

// Testing this - it should be in fbConfig

// // Your web app's Firebase configuration
// const config = {
//   apiKey: "AIzaSyAjzK4PL0sZ9YXkhCXxJ2M7ZdX7WiSdecI",
//   authDomain: "react-redux-firebase-732ae.firebaseapp.com",
//   databaseURL: "https://react-redux-firebase-732ae.firebaseio.com",
//   projectId: "react-redux-firebase-732ae",
//   storageBucket: "react-redux-firebase-732ae.appspot.com",
//   messagingSenderId: "876900563357",
//   appId: "1:876900563357:web:155c603dfb8844e7805774",
//   measurementId: "G-9BLTMNH2YY"
// };
// // Initialize Firebase
// firebase.initializeApp(config);

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore(fbConfig), // - v17 comments
    // reduxFirestore(config)
    // reactReduxFirebase(fbConfig)
  )
);

const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
};

const rrfProps = {
  firebase,
  // config: fbConfig,
  config: rrfConfig, // fbConfig - v17 comments
  dispatch: store.dispatch,
  createFirestoreInstance // <- needed if using firestore
};

function AuthIsLoaded({ children }) {
  const auth = useSelector(state => state.firebase.auth);
  if (!isLoaded(auth)) return <div>Loading Screen...</div>;
  return children;
}

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <AuthIsLoaded>
        <App />
      </AuthIsLoaded>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
