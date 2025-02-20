import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDocs, updateDoc, doc, deleteDoc } from 'firebase/firestore';

// Configuración de Firebase (reemplaza con tus valores específicos)
const firebaseConfig = {
  apiKey: "AIzaSyDCWqpIzU0w2Nh9ZAepSW58CKQuhYK4Lpk",  // Reemplaza con tu clave de API
  authDomain: "crud-maqueta-c1804.firebaseapp.com",  // Usualmente es: <nombre-del-proyecto>.firebaseapp.com
  projectId: "crud-maqueta-c1804",  // Tu ID de proyecto
  storageBucket: "crud-maqueta.appspot.com",  // Usualmente es: <nombre-del-proyecto>.appspot.com
  messagingSenderId: "889185192525",  // ID del proyecto
  appId: "1:889185192525:web:someappId",  // Reemplaza con tu appId (puedes encontrarlo en la consola de Firebase)
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Exportar las funciones de Firestore
export { db, collection, addDoc, getDocs, updateDoc, doc, deleteDoc };
