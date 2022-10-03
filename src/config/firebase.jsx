import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import toast, { Toaster } from 'react-hot-toast';
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAUuPXdZxn9_-PqDctjxM6ftgGq5VYEY7s",
  authDomain: "restorant-16225.firebaseapp.com",
  projectId: "restorant-16225",
  storageBucket: "restorant-16225.appspot.com",
  messagingSenderId: "831058894425",
  appId: "1:831058894425:web:12b94cf80fe46ca3dd5b48"
};

/* const firebaseConfig = {
  apiKey: "AIzaSyD3ok82u9BhhGb0HMt9luSqpMWjR3oWy4o",
  authDomain: "proyecto-react-6a93d.firebaseapp.com",
  databaseURL: "https://proyecto-react-6a93d-default-rtdb.firebaseio.com",
  projectId: "proyecto-react-6a93d",
  storageBucket: "proyecto-react-6a93d.appspot.com",
  messagingSenderId: "912065807869",
  appId: "1:912065807869:web:8c6e4f55a7283572654594"
}; */

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app)

const logInWithEmailAndPassword = async (email, password) => {
  try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success('Inicio de sesion exitoso-!');
      window.location = '/AdminPage';
  } catch (err) {
      console.error(err);
      alert(err.message);
  }
};

const registerWithEmailAndPassword = async (name, email, password) => {
  try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;
      await addDoc(collection(db, "users"), {
          uid: user.uid,
          name,
          authProvider: "local",
          email,
      });
  } catch (err) {
      console.error(err);
      alert(err.message);
  }
};
export {
  auth,
  db,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword
};