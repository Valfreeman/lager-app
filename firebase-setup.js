console.log('FIREBASE-SETUP.JS ЗАПУЩЕН!');
console.info("🔄 Firebase SDK setup gestartet...");
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  setPersistence,
  browserSessionPersistence,
  inMemoryPersistence
} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  collection,
  query,
  where,
  getDocs,
  updateDoc,
  deleteField 
} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

import { 
  createUserWithEmailAndPassword 
} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCynw5TJyH70PJO7Qp0LZcYCvS3sWzEsYM",
  authDomain: "lager-inventar.firebaseapp.com",
  projectId: "lager-inventar",
  storageBucket: "lager-inventar.appspot.com",
  messagingSenderId: "22040990419",
  appId: "1:22040990419:web:bed8e7b5f655eb389f3a26"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// НИКАКИХ ВЫЗОВОВ onAuthStateChanged здесь!

window.auth = auth;
window.db = db;
window.signInWithEmailAndPassword = signInWithEmailAndPassword;
window.signOut = signOut;
window.setPersistence = setPersistence;
window.browserSessionPersistence = browserSessionPersistence;
window.inMemoryPersistence = inMemoryPersistence;
window.setDoc = setDoc;
window.getDoc = getDoc;
window.doc = doc;
window.onAuthStateChanged = onAuthStateChanged;
window.createUserWithEmailAndPassword = createUserWithEmailAndPassword;
window.collection = collection;
window.query = query;
window.where = where;
window.getDocs = getDocs;
window.isFirebaseReady = true;
window.updateDoc = updateDoc;
window.deleteField = deleteField;

window.appState = {
  artikelListe: [],
  selectedItems: [],
  modalOpen: false,
  qrScanActive: false,
  initialVolumeInfo: {}
};

console.info("✅ Firebase SDK setup abgeschlossen.");
