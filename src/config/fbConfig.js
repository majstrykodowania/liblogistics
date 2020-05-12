import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDvjBSdAslq-oLogvhryR8HxWaVWlYpZxA",
  authDomain: "liblogistic-fc73d.firebaseapp.com",
  databaseURL: "https://liblogistic-fc73d.firebaseio.com",
  projectId: "liblogistic-fc73d",
  storageBucket: "liblogistic-fc73d.appspot.com",
  messagingSenderId: "554413010860",
  appId: "1:554413010860:web:cb68148bff0ea7dafe9409",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db;
