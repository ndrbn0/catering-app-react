import React from "react";
import "./../styles/Header.css";

const Header = () => (
  <header>
    <h1 id="service-name">Welcome to Our Catering Service</h1>
    <nav>
      <ul>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#menu">Menu</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
