import React, { useContext } from "react";
import "./ShopPage.css";

import ValueContext from "../context/ValueContext";

const ShopPage = () => {
  let value = useContext(ValueContext);
  console.log("value", value.dispatch);
  return (
    <div className="ShopPage">
      class
      <button
        onClick={() => {
          value.dispatch({
            type: "INCREMENT",
            val: 1,
          });
        }}
      >
        Add to Cart
      </button>
      <p>state {value.state}</p>
    </div>
  );
};

export default ShopPage;
