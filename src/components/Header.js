import React from "react";
import "./../styles/Header.css";

const Header = () => (
  <header id="header" className="container">
    <nav>
      <img
        src="/images/catering-logo.png"
        className="logo"
        alt="Catering Logo"
      />
      <ul id="sidemenu">
        <li>
          <a href="#header">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Gallery</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
    <div className="header-text">
      <p>Premium Catering Service</p>
      <h1>
        Welcome to <span>Delish</span> Catering
      </h1>
      <p>Your Event, Our Passion</p>
    </div>
  </header>
);

export default Header;
