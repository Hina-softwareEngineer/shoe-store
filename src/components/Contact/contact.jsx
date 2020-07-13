import React from "react";
import "./contact.css";

import Blob1 from "../../Images/blob.svg";
import Blob3 from "../../Images/blob1.svg";
import Blob4 from "../../Images/blob3.svg";

const Contact = () => {
  let [show, setShow] = React.useState(false);

  const showing = () => {
    setShow(true);

    setInterval(function () {
      setShow(false);
    }, 2000);
  };
  return (
    <div className="contact">
      {show ? <p className="alert">Thanks for contacting us.</p> : null}

      <img className="blob1c" src={Blob1} alt="blob" />
      <img className="blob3" src={Blob3} alt="blob" />

      <img className="blob4" src={Blob4} alt="blob" />
      <h1>Contact Us</h1>
      <p>React us out at Facebook or Twitter or Mail at infor@abc.com</p>

      <input type="text" placeholder="Name" />
      <input type="text" placeholder="Email" />
      <input type="text" placeholder="Subject" />
      <input type="text" placeholder="Message" />
      <input onClick={showing} type="submit" value="Submit" />
    </div>
  );
};

export default Contact;
