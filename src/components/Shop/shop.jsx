import React from "react";

import Navbar from "../Navbar/navbar";
import Header from "../Header/Header";
import Footer from "../Footer/footer";

import { Outlet } from "react-router-dom";

const Shop = () => {
  return (
    <div>
      <Header />
      <Navbar />

      <Outlet />

      <Footer />
    </div>
  );
};

export default Shop;
