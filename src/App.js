import React from "react";
import "./App.css";

import contexts from "./components/context/ValueContext";
import numberReducer from "./components/context/Reducer";
import Header from "./components/Header/Header";
import ShopPage from "./components/ShopPage/ShopPage";

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
          <ShopPage />
        </div>
      </contexts.ValueContext.Provider>
    </div>
  );
}

export default App;
