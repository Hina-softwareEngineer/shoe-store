import React from "react";
import "./ShopPage.css";

// import contexts from "../context/ValueContext";
import shoes from "../../shoes";

import Item from "../Items/items";

const ShopPage = () => {
  return (
    <div className="ShopPage">
      {Object.keys(shoes).map((shoe) => (
        <Item
          key={shoe}
          id={shoe}
          name={shoes[shoe].name}
          img={shoes[shoe].img}
        />
      ))}
    </div>
  );
};

export default ShopPage;
