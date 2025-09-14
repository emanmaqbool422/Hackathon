import React from "react";
import { Link } from "react-router-dom";
import "../style/home.css";
import EventsList from "./EventsList";

const HomePage = () => {
  return (
    <>
      <main className="home-container">
     
        {/* Left: heading, description, CTA */}
        <section className="home-left">
          <h1 className="home-title">Experience our live events</h1>
          <p className="home-desc">
            Witness the transformative power of the Quran, led by Ustadh Nouman Ali Khan.
          </p>

          <Link to="/events">
            <button type="button" className="view-btn">
              View Events
            </button>
          </Link>
        </section>

        {/* Right: image (you will add the picture) */}
        <aside className="home-right">
          {/* Default placeholder path — change as needed */}
          <img src="/about-future-of-bayyinah.jpg" alt="Event hero" className="home-image" />
        </aside>
      </main>

      <EventsList/>
    </>
  );
};

export default HomePage;
