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
  doc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  projectId: "lms-matematika",
  appId: "1:55262690926:web:0304fb47d2e22df78c307f",
  storageBucket: "lms-matematika.firebasestorage.app",
  apiKey: "AIzaSyAbOd9idwh_JzFBRJi-NReVoXcPEVCeUqI",
  authDomain: "lms-matematika.firebaseapp.com",
  messagingSenderId: "55262690926",
  projectNumber: "55262690926"
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
  doc 
};
