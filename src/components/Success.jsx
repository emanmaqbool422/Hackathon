import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../style/success.css";

const Success = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const message = location.state?.message || "✅ Action completed successfully!";

  return (
    <div className="successPage">
      <div className="successBox">
        <h2>{message}</h2>
        <button onClick={() => navigate("/")}>Go Home</button>
      </div>
    </div>
  );
};

export default Success;
