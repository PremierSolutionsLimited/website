import firebase from "firebase/app";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyDsG17OENjc4mJj6FaqGQDYatrfGdPFUeQ",
  authDomain: "psl-had.firebaseapp.com",
  projectId: "psl-had",
  storageBucket: "psl-had.appspot.com",
  messagingSenderId: "518553240943",
  appId: "1:518553240943:web:f1f1d288e132af537ad49a",
  measurementId: "G-D0PMK42PKL",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };
