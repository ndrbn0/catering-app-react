import React from "react";
import "./../styles/Testimonials.css";

const testimonials = [
  { customer: "Jane Doe", feedback: "Absolutely amazing food and service!" },
  {
    customer: "John Smith",
    feedback: "The catering made our event unforgettable.",
  },
  { customer: "Emily Johnson", feedback: "Highly recommend for any occasion!" },
];

const Testimonials = () => (
  <section id="testimonials">
    <h2>Customer Testimonials</h2>
    <div id="testimonials-list">
      {testimonials.map((testimonial, index) => (
        <div key={index}>
          <blockquote>"{testimonial.feedback}"</blockquote>
          <p>- {testimonial.customer}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Testimonials;
