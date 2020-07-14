import React from "react";

import { useParams } from "react-router-dom";

import shoes from "../../shoes";

const Preview = () => {
  const { productId } = useParams();

  let shoe = shoes[productId];
  console.log(shoe);

  return (
    <div>
      <div>Image</div>
      <div>Name; descript colors ratings revies add to cart</div>
    </div>
  );
};

export default Preview;
