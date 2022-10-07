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
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_BUCKET, 
  messagingSenderId: process.env.REACT_APP_SENDER,
  appId: process.env.REACT_APP_API_ID
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
  registerWithEmailAndPassword
};