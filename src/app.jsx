import { StrictMode, useState } from "react";
import ReactDOM from "react-dom/client";
import Order from "./Order";
import PizzaOfTheDay from "./PizzaOfTheDay";
import Header from "./header";
import { CartContext } from "./contexts";

const App = () => {
  const cartHook=useState([])
  return (
    <CartContext.Provider value={cartHook}>
      <div>
        <Header />
        <Order/>
        <PizzaOfTheDay/>
      </div>
    </CartContext.Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
