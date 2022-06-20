import {initializeApp} from "firebase/app";
import { getStorage } from "@firebase/storage";
import { getMessaging } from "firebase/messaging";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyBwTif_PdCif-fTk6sjQxxWJC1ApOqoCIU",
  authDomain: "premier-chauffer.firebaseapp.com",
  projectId: "premier-chauffer",
  storageBucket: "premier-chauffer.appspot.com",
  messagingSenderId: "729946359345",
  appId: "1:729946359345:web:0560773b4d10f588027710",
  measurementId: "G-ETNK9820LR"
};
// Initialize Firebase
//initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);

const storage = getStorage(app);
const messaging = getMessaging(app);

export { storage, app as default, messaging };
