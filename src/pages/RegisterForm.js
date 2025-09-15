import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";  // ✅ navigate add
import { db } from "../Firebase-config";
import { doc, getDoc, addDoc, collection, serverTimestamp } from "firebase/firestore";
import "../style/register.css";

function RegisterForm() {
  const { eventId } = useParams();
  const navigate = useNavigate(); // ✅ navigation hook

  const [event, setEvent] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  // get event details by id
  useEffect(() => {
    const fetchEvent = async () => {
      const docRef = doc(db, "users", eventId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setEvent({ id: docSnap.id, ...docSnap.data() });
      }
    };
    fetchEvent();
  }, [eventId]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !phone) {
      alert("All fields are required!");
      return;
    }

    try {
      await addDoc(collection(db, "users"), {
        eventId,
        name,
        email,
        phone,
        timestamp: serverTimestamp(),
      });

      // ✅ Navigate to success page with message
      navigate("/success", {
        state: { message: "🎉 Event created successfully! " },
      });

      // ✅ reset form
      setName("");
      setEmail("");
      setPhone("");
    } catch (err) {
      console.error("Error saving registration:", err);
    }
  };

  return (
    <div className="registerPage">
      <h2>Register for Event</h2>
      <div className="formContainer">
        {event && (
          <div className="eventInfo">
            <p><strong>Event:</strong> {event.title}</p>
            <p><strong>Date:</strong> {event.date}</p>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="inputGp">
            <label>Name:</label>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="inputGp">
            <label>Email:</label>
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="inputGp">
            <label>Phone:</label>
            <input
              type="text"
              placeholder="Your Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}

export default RegisterForm;
