import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, updateDoc, doc, deleteDoc } from 'firebase/firestore';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBqc_7CfWBBXYC1lLRvkrhgHzMDrElEHV0",
  authDomain: "login-auth-fedcd.firebaseapp.com",
  projectId: "login-auth-fedcd",
  storageBucket: "login-auth-fedcd.appspot.com",
  messagingSenderId: "13091977122",
  appId: "1:13091977122:web:58df5d85d6662089f34c0f"
};

const appFireBase = initializeApp(firebaseConfig);
const db = getFirestore(appFireBase);
const auth = getAuth(appFireBase);

export { db, auth, collection, addDoc, getDocs, updateDoc, doc, deleteDoc, signInWithEmailAndPassword };