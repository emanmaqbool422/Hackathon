// src/components/AddEventForm.js
import React, { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../Firebase-config";

function AddEventForm() {
  // State for form fields
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    time: "",
    location: "",
    description: "",
    startDate: "",
    endDate: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "events"), {
        ...formData,
        timestamp: serverTimestamp(), // useful for ordering later
      });

      alert("Event added successfully ✅");

      // Reset form
      setFormData({
        title: "",
        date: "",
        time: "",
        location: "",
        description: "",
        startDate: "",
        endDate: "",
      });
    } catch (err) {
      console.error("Error adding event:", err);
      alert("Failed to add event ❌");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="event-form">
      <h2>Add New Event</h2>

      <input
        type="text"
        name="title"
        placeholder="Event Title"
        value={formData.title}
        onChange={handleChange}
        required
      />

      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="time"
        placeholder="Event Time (e.g., 09:00 AM)"
        value={formData.time}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="location"
        placeholder="Location"
        value={formData.location}
        onChange={handleChange}
        required
      />

      <textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
        required
      />

      <input
        type="date"
        name="startDate"
        value={formData.startDate}
        onChange={handleChange}
        required
      />

      <input
        type="date"
        name="endDate"
        value={formData.endDate}
        onChange={handleChange}
        required
      />

      <button type="submit">Add Event</button>
    </form>
  );
}

export default AddEventForm;
