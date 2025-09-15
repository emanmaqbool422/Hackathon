import React from "react";

const About = () => {
  return (
    <>
      <div className="about-container">
        <h1 className="heading">
          Bayyinah began with a simple yet profound conversation.
        </h1>
        <main className="home-container">
          {/* Left: heading, description, CTA */}
          <section className="home-left">
            <h1 className="home-title">The journey of self-discovery, of intellectual and spiritual growth, is what Bayyinah is all about.</h1>
            <p className="home-desc">
             Despite being born a Muslim, I did not understand Allah’s book, and as a teenager, I found myself in I'tikaaf during Ramadan at the Muslim Center of New York City, tears streaming down my face out of shame that Allah is talking to me and I can’t understand him. Yet, I poured my heart out to Allah, yearning to hear His voice.
            </p>
          </section>

          {/* Right: image (you will add the picture) */}
          <aside className="home-right">
            {/* Default placeholder path — change as needed */}
            <img
              src="/about-future-of-bayyinah.jpg"
              alt="Event hero"
              className="home-image"
            />
          </aside>
        </main>
      </div>
    </>
  );
};

export default About;
