import React from "react";
import "./App.css";

import ValueContext from "./components/context/ValueContext";
import numberReducer from "./components/context/Reducer";
import Header from "./components/Header/Header";
import ShopPage from "./components/ShopPage/ShopPage";

function App() {
  let [state, dispatch] = React.useReducer(
    numberReducer,
    React.useContext(ValueContext)
  );
  return (
    <div>
      <ValueContext.Provider value={{ state, dispatch }}>
        <div className="App">
          <Header />
          <ShopPage />
        </div>
      </ValueContext.Provider>
    </div>
  );
}

export default App;
