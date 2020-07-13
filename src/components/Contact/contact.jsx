import React from "react";
import "./contact.css";

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
