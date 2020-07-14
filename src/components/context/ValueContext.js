import React from "react";

const ValueContext = React.createContext(0);
const ItemContext = React.createContext(false);

const contexts = {
  ValueContext,
  ItemContext,
};

export default contexts;
