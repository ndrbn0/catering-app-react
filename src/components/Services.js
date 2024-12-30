import React from "react";
import "./../styles/Services.css";

const Services = () => (
  <section id="services" className="container">
    <h1 className="sub-title">Our Services</h1>
    <div className="services-list">
      <ServiceCard
        icon="fa-utensils"
        title="Event Catering"
        description="Tailored catering for weddings, birthdays, and corporate events."
      />
      <ServiceCard
        icon="fa-wine-glass"
        title="Beverage Services"
        description="Custom beverage solutions including bartending and mocktail stations."
      />
      <ServiceCard
        icon="fa-birthday-cake"
        title="Specialty Cakes"
        description="Beautifully crafted cakes for your celebrations."
      />
    </div>
  </section>
);

const ServiceCard = ({ icon, title, description }) => (
  <div className="service-card">
    <i className={`fa ${icon}`} aria-hidden="true"></i>
    <h2>{title}</h2>
    <p>{description}</p>
  </div>
);

export default Services;
