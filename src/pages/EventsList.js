import React, { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../Firebase-config";
import { Link, useNavigate } from "react-router-dom";
import AddEventForm from "../components/AddEventForm";
import { useAuth } from "../context/AuthContext";
import "../style/event.css"

function EventsList() {
  const [events, setEvents] = useState([]);
  const { user, login, logout } = useAuth();
  const navigate = useNavigate();

  const adminEmail = "teacher@gmail.com"; // 🔑 define your admin email

  // Fetch events in realtime
  useEffect(() => {
    const unsub = onSnapshot(collection(db, "events"), (snapshot) => {
      setEvents(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
    return () => unsub();
  }, []);

  return (
    <div className="events-page">
      <h1>Events & Programs</h1>


      {/* ✅ Show AddEventForm only if logged-in user is admin */}
      {user?.email === adminEmail && (
        <div className="admin-section">
          <h2>Admin Panel</h2>
          <AddEventForm />
        </div>
      )}

      {/* Event Cards */}
      <div className="events-grid">
        {events.map((event) => (
          <div key={event.id} className="event-card">
            <p>{event.date}</p>
            <p>{event.description}</p>
            <p>{event.endDate}</p>
            <p>{event.location}</p>
            <h3>{event.title}</h3>
            <p>{event.time}</p>
            <p>{event.startDate}</p>
            <Link to={`/register/${event.id}`}>
              <button>Register</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventsList;
