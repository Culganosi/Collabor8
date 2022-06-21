import firebase from "firebase/compat/app";
import 'firebase/compat/storage';

const firebaseConfig = {

  apiKey: "AIzaSyARLjLqwSShLRPUeLOCNJ-jqhfOSYdKarg",
  authDomain: "collab-or-8.firebaseapp.com",
  projectId: "collab-or-8",
  storageBucket: "collab-or-8.appspot.com",
  messagingSenderId: "72078291480",
  appId: "1:72078291480:web:1a903f00770b1c461e096d"
};


firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export { storage, firebase as default };