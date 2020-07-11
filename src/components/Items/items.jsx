import React from "react";
import "./items.css";

import contexts from "../context/ValueContext";

const Item = ({ name, img }) => {
  let value = React.useContext(contexts.ValueContext);
  const [add, setAdd] = React.useState(true);
  return (
    <div className="item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${img})`,
        }}
      ></div>
      <h1>{name}</h1>

      {add ? (
        <button
          onClick={() => {
            value.dispatch({
              type: "INCREMENT",
            });

            setAdd(!add);
          }}
        >
          Add to Cart
        </button>
      ) : (
        <button
          onClick={() => {
            value.dispatch({
              type: "DECREMENT",
            });
            setAdd(!add);
          }}
        >
          Remove from Cart
        </button>
      )}
    </div>
  );
};

export default Item;
