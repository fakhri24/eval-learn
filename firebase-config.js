import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  onSnapshot,
  query,
  orderBy,
  serverTimestamp,
  deleteDoc,
  doc,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBV8LjsN1KM010tos40vSKMRHFHsibLyjY",
  authDomain: "eval-learn.firebaseapp.com",
  projectId: "eval-learn",
  storageBucket: "eval-learn.firebasestorage.app",
  messagingSenderId: "1079224696305",
  appId: "1:1079224696305:web:893baf70a4051491215850",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
  db,
  collection,
  addDoc,
  getDocs,
  onSnapshot,
  query,
  orderBy,
  serverTimestamp,
  deleteDoc,
  doc,
};
