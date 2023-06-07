import { initializeApp } from "firebase/app";
import { 
    getFirestore, 
    collection, 
    query, 
    where, 
    getDocs 
} from "firebase/firestore";
import { getStorage, ref, uploadBytes } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAGfgvDMwIhseF-_ZpHChH_5fp76bVxn_I",
  authDomain: "fuerza-g-32ca5.firebaseapp.com",
  databaseURL: "https://fuerza-g-32ca5-default-rtdb.firebaseio.com/",
  projectId: "fuerza-g-32ca5",
  storageBucket: "fuerza-g-32ca5.appspot.com",
  messagingSenderId: "623026114835",
  appId: "1:623026114835:web:828eeaae39abc3965c8ae6",
  measurementId: "G-BKQ4FDTD72"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, collection, query, where, getDocs, storage };
