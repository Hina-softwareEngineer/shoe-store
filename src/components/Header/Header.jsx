import React from "react";
import "./Header.css";

import contexts from "../context/ValueContext";

const Header = () => {
  let value = React.useContext(contexts.ValueContext);
  console.log(value.state);
  return (
    <div className="header">
      {/* <ValueContext.Consumer>
        {(value3) => <h1>{value3}</h1>}
      </ValueContext.Consumer> */}

      <div>Shoes</div>

      <nav>
        <li>Sign In</li>
        <li>Wish List</li>
        <li>
          Cart<span className="quantity">{value.state}</span>
        </li>
      </nav>
    </div>
  );
};

export default Header;
