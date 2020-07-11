import React from "react";
import "./App.css";

import contexts from "./components/context/ValueContext";
import numberReducer from "./components/context/Reducer";
import Header from "./components/Header/Header";
import ShopPage from "./components/ShopPage/ShopPage";
import Navbar from "./components/Navbar/navbar";
import Home from "./components/Home/home";
import Register from "./components/Register/register";
import Contact from "./components/Contact/contact";

import { Routes, Route } from "react-router-dom";

function App() {
  let [state, dispatch] = React.useReducer(
    numberReducer,
    React.useContext(contexts.ValueContext)
  );
  return (
    <div>
      <contexts.ValueContext.Provider value={{ state, dispatch }}>
        <div className="App">
          <Header />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/shopPage" element={<ShopPage />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Routes>
        </div>
      </contexts.ValueContext.Provider>
    </div>
  );
}

export default App;
