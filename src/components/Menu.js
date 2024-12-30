import React from "react";
import "./../styles/Menu.css";

const menuItems = [
  {
    name: "Pasta Primavera",
    description: "Fresh vegetables with pasta in a light sauce",
  },
  {
    name: "Grilled Chicken",
    description: "Perfectly grilled chicken served with sides",
  },
  {
    name: "Chocolate Cake",
    description: "Decadent chocolate cake for dessert",
  },
];

const Menu = () => (
  <section id="menu">
    <h2>Our Menu</h2>
    <div id="menu-items">
      {menuItems.map((item, index) => (
        <div key={index}>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Menu;
