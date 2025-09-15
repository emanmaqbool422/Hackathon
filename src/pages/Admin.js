import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../Firebase-config";
import { useNavigate } from "react-router-dom";
import "../style/admin.css"

const Admin = ({ setIsAuth }) => {
  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      localStorage.setItem("isAuth", true);
      if (setIsAuth) setIsAuth(true);
      navigate("/AdminPanel");
    } catch (error) {
      console.error("Google sign-in failed:", error);
    }
  };

  return (
    <div className="adminLoginPage">
      <div className="buttons">
        <button className="signinGoogle" onClick={signInWithGoogle}>
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default Admin;
