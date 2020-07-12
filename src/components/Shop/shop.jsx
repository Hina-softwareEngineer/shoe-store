import React from "react";

import Navbar from "../Navbar/navbar";
import Header from "../Header/Header";

import { Outlet } from "react-router-dom";

const Shop = () => {
  return (
    <div>
      <Header />
      <Navbar />

      <Outlet />
    </div>
  );
};

export default Shop;
