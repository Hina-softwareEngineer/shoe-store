import React from "react";
import "./App.css";

import contexts from "./components/context/ValueContext";
import numberReducer from "./components/context/Reducer";

import ShopPage from "./components/ShopPage/ShopPage";

import Home from "./components/Home/home";
import Register from "./components/Register/register";
import Contact from "./components/Contact/contact";
import Shop from "./components/Shop/shop";

import { Routes, Route } from "react-router-dom";
import Preview from "./components/Preview/preview";

function App() {
  let [state, dispatch] = React.useReducer(
    numberReducer,
    React.useContext(contexts.ValueContext)
  );
  return (
    <div>
      <contexts.ValueContext.Provider value={{ state, dispatch }}>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="shop" element={<Shop />}>
              <Route path="products" element={<ShopPage />}></Route>

              <Route path="product/:productId" element={<Preview />} />
              <Route path="register" element={<Register />}></Route>
              <Route path="contact" element={<Contact />}></Route>
            </Route>
          </Routes>
        </div>
      </contexts.ValueContext.Provider>
    </div>
  );
}

export default App;
