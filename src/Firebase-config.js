import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCC7kQqcTUaLgkBlcrTAVwawT9CbkjLvFQ",
  authDomain: "hackathon-946ac.firebaseapp.com",
  projectId: "hackathon-946ac",
  storageBucket: "hackathon-946ac.firebasestorage.app",
  messagingSenderId: "340067646746",
  appId: "1:340067646746:web:be0203dffd6e097f9880a3",
  measurementId: "G-3C01TYX7D5"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

 export const provider = new GoogleAuthProvider();


    


