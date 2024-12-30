import React from "react";
import "./../styles/Contact.css";

const Contact = () => (
  <section id="contact" className="container">
    <h1 className="sub-title">Get in Touch</h1>
    <div className="contact-content">
      <div className="contact-details">
        <p>
          <i className="fa fa-envelope"></i> info@delishcatering.com
        </p>
        <p>
          <i className="fa fa-phone"></i> +49 123 456 789
        </p>
      </div>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name: </label>
          <input type="text" id="name" placeholder="Enter your name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message: </label>
          <textarea
            id="message"
            placeholder="Enter your message"
            rows="5"
            required
          ></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  </section>
);

export default Contact;
