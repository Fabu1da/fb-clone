import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBVQ5lsw3oQV9yZOSRBR0CyisJ51DjoEWg",
  authDomain: "facebook-clone-f5fa3.firebaseapp.com",
  projectId: "facebook-clone-f5fa3",
  storageBucket: "facebook-clone-f5fa3.appspot.com",
  messagingSenderId: "837340653652",
  appId: "1:837340653652:web:4add409823473be57925c1"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const storage = getStorage(app);

export {db, storage}