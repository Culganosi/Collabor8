///-----------FIREBASE

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

//---------OTHER

const CAT_API_KEY = "179e280e-10c6-4b84-a042-02659ac318d6"

//----------EXPORT
export {CAT_API_KEY, storage, firebase as default };