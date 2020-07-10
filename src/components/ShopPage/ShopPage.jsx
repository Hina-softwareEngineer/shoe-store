import React, { useContext } from "react";
import "./ShopPage.css";

import contexts from "../context/ValueContext";
import shoes from "../../shoes";

const ShopPage = () => {
  let value = useContext(contexts.ValueContext);
  console.log("value", value.dispatch);
  console.log(shoes);
  return (
    <div className="ShopPage">
      {Object.keys(shoes).map((shoe) => (
        <div key={shoe} className="item">
          <div
            className="image"
            style={{
              backgroundImage: `url(${shoes[shoe].img})`,
            }}
          ></div>
          <h1>{shoes[shoe].name}</h1>
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

          <button
            onClick={() => {
              value.dispatch({
                type: "DECREMENT",
                val: 1,
              });
            }}
          >
            Remove from Cart
          </button>
        </div>
      ))}
      {/* <button
        onClick={() => {
          value.dispatch({
            type: "INCREMENT",
            val: 1,
          });
        }}
      >
        Add to Cart
      </button> */}
      {/* <p>state {value.state}</p> */}
    </div>
  );
};

export default ShopPage;
