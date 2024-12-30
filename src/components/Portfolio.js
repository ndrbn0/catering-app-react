import React from "react";
import "./../styles/Portfolio.css";

const Portfolio = () => (
  <section id="portfolio" className="container">
    <h1 className="sub-title">Gallery</h1>
    <div className="portfolio-list">
      <PortfolioItem
        image="/images/portfolio1.jpg"
        title="Wedding Setup"
        description="Elegant dining for a beautiful wedding."
      />
      <PortfolioItem
        image="/images/portfolio2.jpg"
        title="Corporate Buffet"
        description="Professional catering for corporate clients."
      />
      <PortfolioItem
        image="/images/portfolio3.jpg"
        title="Private Party"
        description="Cozy and personalized setups for private events."
      />
    </div>
  </section>
);

const PortfolioItem = ({ image, title, description }) => (
  <div className="portfolio-item">
    <img src={image} alt={title} />
    <div className="overlay">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  </div>
);

export default Portfolio;
