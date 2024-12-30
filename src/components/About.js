import React from "react";
import "./../styles/About.css";

const About = () => (
  <section id="about" className="container">
    <div className="row">
      <div className="about-col-1">
        <img src="/images/about-catering.jpg" alt="Catering About" />
      </div>
      <div className="about-col-2">
        <h1 className="sub-title">About Us</h1>
        <p>
          At Delish Catering, we turn your events into unforgettable
          experiences. Whether it's a wedding, corporate event, or private
          party, we bring flavors and presentation that amaze your guests.
        </p>
      </div>
    </div>
  </section>
);

export default About;
