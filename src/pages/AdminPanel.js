import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { db, auth } from "../Firebase-config";
import { useNavigate } from "react-router-dom";
import "../style/admin.css";

const AdminPanel = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const eventsCollectionRef = collection(db, "events");
  const navigate = useNavigate();

  const submitEvent = async () => {
    // Validation: check all fields
    if (
      !title.trim() ||
      !date.trim() ||
      !startDate.trim() ||
      !endDate.trim() ||
      !time.trim() ||
      !location.trim() ||
      !description.trim()
    ) {
      setErrorMessage("⚠️ All fields must be filled before submitting!");
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
        author: {
          name: auth.currentUser.displayName,
          id: auth.currentUser.uid,
        },
        uid: auth.currentUser.uid,
      });

      setErrorMessage(""); // clear error if success
      navigate("/");
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="createEventPage">
      <h1>Create Event</h1>
      <div className="formContainer">
        <div className="formGrid">
          <div className="inputGp">
            <label>Title:</label>
            <input
              type="text"
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

          <div className="inputGp">
            <label>Time:</label>
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </div>

          <div className="inputGp full">
            <label>Location:</label>
            <input
              type="text"
              placeholder="Event Location..."
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>

          <div className="inputGp full">
            <label>Description:</label>
            <textarea
              placeholder="Event Description..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </div>

        <div className="formActions">
          <button onClick={submitEvent} className="btnPrimary">
            Submit Event
          </button>
        </div>

        {errorMessage && <p style={{ color: "red", marginTop: "10px" }}>{errorMessage}</p>}
      </div>
    </div>
  );
};

export default AdminPanel;
