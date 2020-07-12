import React from "react";
import "./home.css";

import MainPageImages from "../../Images/shoes.png";
import Navbar from "../Navbar/navbar";

const Home = () => {
  return (
    <div className="home">
      <div className="homePage">
        <img src={MainPageImages} alt="Shoes" />
      </div>
      <Navbar name="homeNavbar" />
      <div className="overlayText">
        <h1>All Shoes are available !</h1>
        <h3>Summer Collection 2020</h3>
      </div>
    </div>
  );
};

export default Home;
