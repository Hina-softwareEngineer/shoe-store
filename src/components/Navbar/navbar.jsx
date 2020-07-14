import React from "react";
import "./navbar.css";

import { Link } from "react-router-dom";
import ViewHeadlineIcon from "@material-ui/icons/ViewHeadline";

const Navbar = ({ name }) => {
  let [show, setShow] = React.useState(false);

  return (
    <div className={`navbar ${name ? name : ""}`}>
      <ViewHeadlineIcon
        onClick={() => {
          setShow(!show);
        }}
        className="bars"
      />

      <Link
        onClick={() => setShow(false)}
        to="/"
        className={`${show ? "show" : "hide"}`}
      >
        Home
      </Link>
      <Link
        onClick={() => setShow(false)}
        to="/shop/products"
        className={`${show ? "show" : "hide"}`}
      >
        Shop
      </Link>
      <Link
        onClick={() => setShow(false)}
        to="/shop/register"
        className={`${show ? "show" : "hide"}`}
      >
        Register
      </Link>
      <Link
        onClick={() => setShow(false)}
        to="/shop/contact"
        className={`${show ? "show" : "hide"}`}
      >
        Contact Us
      </Link>
    </div>
  );
};

export default Navbar;
