import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../Firebase-config";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../style/admin.css"

const Admin = () => {
  const { user, login, logout } = useAuth();
  const navigate = useNavigate();
  

  // form states
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const eventsCollectionRef = collection(db, "events");
  const adminEmail = "teacher@gmail.com"; // 🔑 define your admin email
const submitEvent = async () => {
  if (!title || !date || !time || !location || !description || !startDate || !endDate || !imageUrl) {
    alert("⚠️ Please fill in all required fields before submitting.");
    return;
  }

  try {
    await addDoc(eventsCollectionRef, {
      title,
      date,
      time,
      location,
      description,
      startDate,
      endDate,
      imageUrl,
    });

    navigate("/events"); // after submit redirect to events page
  } catch (error) {
    console.error(error.message);
  }
};


  // If user is not logged in, show login button
  if (!user) {
    return (
      <div className="admin-login-page">
        <div className="login-container">
          <h1>Admin Access Required</h1>
          <p>Please login to access the admin panel</p>
          <button onClick={login} className="admin-login-btn">
            Login with Google
          </button>
        </div>
      </div>
    );
  }

  // If user is logged in but not admin, show access denied
  if (user.email === adminEmail) {
    return (
      <div className="admin-login-page">
        <div className="login-container">
          <h1>Access Denied</h1>
          <p>You don't have admin privileges</p>
          <button onClick={logout} className="admin-login-btn">
            Logout
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="createEventPage">
       <h1>Create Event</h1>
      <div className="formContainer">
        <div className="inputGp">
          <label>Title:</label>
          <input
            placeholder="Event Title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="inputGp">
          <label>Date:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div className="inputGp">
          <label>Time:</label>
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>

        <div className="inputGp">
          <label>Location:</label>
          <input
            placeholder="Event Location..."
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        <div className="inputGp">
          <label>Description:</label>
          <textarea
            placeholder="Event Description..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="inputGp">
          <label>Start Date:</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>

        <div className="inputGp">
          <label>End Date:</label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>

        <button onClick={submitEvent}>Submit Event</button>
      </div>
    </div>
  );
};

export default Admin;
