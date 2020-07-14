import React from "react";
import "./home.css";

import MainPageImages from "../../Images/shoes.png";
import Navbar from "../Navbar/navbar";

import { useNavigate } from "react-router-dom";

import HomeImage from "../../Images/home.png";

const Home = () => {
  let navigate = useNavigate();
  return (
    <div className="home">
      <div className="homePage">
        <img src={MainPageImages} alt="Shoes" />
      </div>
      <Navbar name="homeNavbar" />
      <div className="overlayText">
        <h1>All Shoes are available !</h1>
        <h3>Summer Collection 2020</h3>
        <p>
          Quality is our top-priority. Here, you can get both big and small
          shoes with best services. We deal with all famous brands of shoes. The
          quality of our brands is totally verified. We provide you the best
          international and local famous Brands.
        </p>

        <button onClick={() => navigate("/shop/products")}>Shop Now</button>

        <img className="shoes" src={HomeImage} alt="shoes Image" />
      </div>
    </div>
  );
};

export default Home;
