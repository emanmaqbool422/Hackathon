import React from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EventsList from "./pages/EventsList";
import RegisterForm from "./pages/RegisterForm";
import Admin from "./pages/Admin";
import { useAuth } from "./context/AuthContext";


function App() {
  const location = useLocation();
  const { user, login, logout } = useAuth();

  return (
    <>
      <header>
        <nav className="nav">
          <div className="nav-left">
            <div className="logo">
              <div className="logo-icon"><img src="/Bayyian-logo-2.png" /></div>
              <span className="logo-text">BAYYINAH</span>
            </div>
            <ul className="nav-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/">About</Link></li>
              <li><Link to="/events">Events <i className="fa-solid fa-chevron-down"></i></Link></li>
              <li><Link to="/admin">Admin</Link></li>
            </ul>
            <button className="menu-toggle" onClick={() => {
              const navLinks = document.querySelector('.nav-links');
              navLinks.classList.toggle('active');
            }}>
              <i className="fa-solid fa-bars"></i>
            </button>
          </div>
          {/* <div className="nav-right">
            <Link to="/sigin" className="register-btn"> login  <i className="fa-solid fa-arrow-up-right"></i></Link>
          </div> */}
        </nav>
      </header>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<HomePage />} />

        {/* Events List Page */}
        <Route path="/events" element={<EventsList />} />
        <Route path="/admin" element={<Admin />} />


        {/* Registration Form Page */}
        <Route path="/register/:eventId" element={<RegisterForm />} />

      </Routes>
    </>
  );
}

export default App;
