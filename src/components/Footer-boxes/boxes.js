import React from "react";
import "./boxes.css";

import { Link } from "react-router-dom";

const Boxes = ({ title, links, disable, icons }) => {
  return (
    <div className={`boxes ${disable ? "disable" : ""}`}>
      <h3>{title}</h3>
      <Link to="/">
        {icons ? icons[0] : ""} {links[0]}
      </Link>
      <Link to="/">
        {icons ? icons[1] : ""} {links[1]}
      </Link>
      <Link to="/">
        {icons ? icons[2] : ""} {links[2]}
      </Link>
      <Link to="/">{links[3]}</Link>
    </div>
  );
};

export default Boxes;
