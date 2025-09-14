import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
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

const provider = new GoogleAuthProvider();

export const siginWithGoogle = () => {
    signInWithPopup(auth, provider) 
        .then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;

      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("profilePic", profilePic);
    })
    .catch((error) => {
      console.log(error);
    });
};
    


