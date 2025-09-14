import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../Firebase-config";
import "../style/admin.css";

const Admin = () => {
  const { user, login, logout } = useAuth();

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  const eventsCollectionRef = collection(db, "events");

  const submitEvent = async () => {
    if (!title || !date || !startDate || !endDate || !time || !location || !description) {
      alert("⚠️ Please fill all fields");
      return;
    }
    try {
      await addDoc(eventsCollectionRef, {
        title,
        date,
        startDate,
        endDate,
        time,
        location,
        description,
      });
      alert("✅ Event Added Successfully!");
      setTitle("");
      setDate("");
      setStartDate("");
      setEndDate("");
      setTime("");
      setLocation("");
      setDescription("");
    } catch (error) {
      console.error(error.message);
    }
  };

  if (!user) {
    return (
      <div className="createEventPage">
        <h1>Login Required</h1>
        <button onClick={login} className="btnPrimary">
          Login with Google
        </button>
      </div>
    );
  }

  return (
    <div className="createEventPage">
      <h1>Create Event</h1>
      <div className="formContainer">  
        <div className="formGrid">
          {/* Title */}
          <div className="inputGp">
            <label>Event Title</label>
            <input
              type="text"
              placeholder="Event Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          {/* Date */}
          <div className="inputGp">
            <label>Date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          {/* Start Date */}
          <div className="inputGp">
            <label>Start Date</label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>

          {/* End Date */}
          <div className="inputGp">
            <label>End Date</label>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>

          {/* Time */}
          <div className="inputGp">
            <label>Time</label>
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </div>

          {/* Location */}
          <div className="inputGp full">
            <label>Location</label>
            <input
              type="text"
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>

          {/* Description */}
          <div className="inputGp full">
            <label>Description</label>
            <textarea
              placeholder="Event Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </div>

        <div className="formActions">
          <button onClick={submitEvent} className="btnPrimary">
            Submit Event
          </button>
          <button onClick={logout} className="btnSecondary">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Admin;
