import { StrictMode, useState } from "react";
import { CartContext } from "./contexts";
import Order from "./Order";
import Header from "./header";
import PizzaOfTheDay from "./PizzaOfTheDay";
import ReactDOM from "react-dom/client";

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
