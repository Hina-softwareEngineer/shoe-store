import React from "react";
import "./register.css";

import Blob1 from "../../Images/blob.svg";
import Blob2 from "../../Images/blob2.svg";

const Register = () => {
  let [show, setShow] = React.useState(false);

  const showing = () => {
    setShow(true);

    setInterval(function () {
      setShow(false);
    }, 2000);
  };
  return (
    <div className="register">
      {show ? <p className="alert">Successfully Registered.</p> : null}
      <h1>Register</h1>

      <img className="blob1" src={Blob1} alt="blob" />

      <img className="blob2" src={Blob2} alt="blob" />
      <label for="email">Email</label>
      <input type="email" placeholder="Enter Email" />

      <label for="password">Password</label>
      <input type="password" placeholder="Enter password" />

      <label for="password">Confirm Password</label>
      <input type="password" placeholder="Confirm the password" />

      <input onClick={showing} type="submit" value="Submit" />
    </div>
  );
};

export default Register;
