import React from "react";
import "./navbar.css";

import { Link } from "react-router-dom";

const Navbar = ({ name }) => {
  return (
    <div className={`navbar ${name ? name : null}`}>
      <Link to="/">Home</Link>
      <Link to="/shopPage">Shop</Link>
      <Link to="/register">Register</Link>
      <Link to="/contact">Contact Us</Link>
    </div>
  );
};

export default Navbar;
