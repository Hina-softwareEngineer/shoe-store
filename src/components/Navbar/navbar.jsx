import React from "react";
import "./navbar.css";

import { Link } from "react-router-dom";

const Navbar = ({ name }) => {
  return (
    <div className={`navbar ${name ? name : null}`}>
      <Link to="/">Home</Link>
      <Link to="/shop/shopPage">Shop</Link>
      <Link to="/shop/register">Register</Link>
      <Link to="/shop/contact">Contact Us</Link>
    </div>
  );
};

export default Navbar;
