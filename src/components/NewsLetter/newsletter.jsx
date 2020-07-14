import React from "react";
import "./newsletter.css";

import EmailIcon from "@material-ui/icons/Email";

const NewsLetter = () => {
  return (
    <div className="news">
      <div className="email">
        <EmailIcon />
        &nbsp;&nbsp; Signup for NewsLetter
      </div>
      <div className="submit">
        <input type="email" placeholder="email@example.com" />
        <button>Submit</button>
      </div>
    </div>
  );
};

export default NewsLetter;
