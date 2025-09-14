import React from "react";
import "../style/footer.css";

export default function Footer() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // simple UI-only behaviour — integrate mailing API if needed
    const email = e.target.elements.email.value;
    if (email) {
      e.target.reset();
      alert("Thanks — we'll keep you posted.");
    }
  };

  return (
    <footer className="site-footer">
      <div className="footer-top container">
        <div className="ft-left">
          <h2 className="ft-title">
            Clarity, delivered straight into your inbox, weekly.
          </h2>

          <form
            className="newsletter"
            onSubmit={handleSubmit}
            aria-label="Subscribe to newsletter"
          >
            <input
              name="email"
              type="email"
              placeholder="Enter your email address"
              required
            />
            <button type="submit" className="btn-signup">
              Sign up ➜
            </button>
          </form>
        </div>

        <div className="ft-columns">
          <ul className="col">
            <h3>Products</h3>
            <li>
              <a href="#">Bayyinah TV</a>
            </li>
            <li>
              <a href="#">Events</a>
            </li>
            <li>
              <a href="#">Gift</a>
            </li>
            <li>
              <a href="#">Books</a>
            </li>
            <li>
              <a href="#">Resources</a>
            </li>
          </ul>

          <ul className="col">
            <h3>Information</h3>
            <li>
              <a href="#">What we do</a>
            </li>
            <li>
              <a href="#">Community</a>
            </li>
            <li>
              <a href="#">Talent Hub</a>
            </li>
            <li>
              <a href="#">Quran Seminary</a>
            </li>
          </ul>
        </div>

        <aside className="ft-right">
          <div className="promo">
            <img src="/Bayyian-logo-2.png" alt="Bayyinah" />
            <div className="promo-body">
              <h4>Bayyinah TV</h4>
              <p>Quran Studies Made Simple</p>
              <a className="promo-link" href="#">
                Start Learning ➜
              </a>
            </div>
          </div>
        </aside>
      </div>

      <div className="footer-bottom container">
        <div className="copyright">
          Copyright © 2025 Bayyinah. All Rights Reserved.
        </div>
        <div className="bottom-right">
          <nav className="footer-nav">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms &amp; Conditions</a>
          </nav>
          <div className="social">
            <button className="social-btn" aria-label="YouTube">
              YT
            </button>
            <button className="social-btn" aria-label="Instagram">
              IG
            </button>
            <button className="social-btn" aria-label="Facebook">
              FB
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
