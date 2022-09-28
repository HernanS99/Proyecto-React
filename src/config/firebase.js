import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyD3ok82u9BhhGb0HMt9luSqpMWjR3oWy4o",
  authDomain: "proyecto-react-6a93d.firebaseapp.com",
  databaseURL: "https://proyecto-react-6a93d-default-rtdb.firebaseio.com",
  projectId: "proyecto-react-6a93d",
  storageBucket: "proyecto-react-6a93d.appspot.com",
  messagingSenderId: "912065807869",
  appId: "1:912065807869:web:8c6e4f55a7283572654594"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)