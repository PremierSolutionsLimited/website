import {initializeApp} from "firebase/app";
import { getStorage } from "@firebase/storage";
import { getMessaging } from "firebase/messaging";
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
//initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);

const storage = getStorage(app);
const messaging = getMessaging(app);

export { storage, app as default, messaging };
