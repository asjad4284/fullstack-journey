import ReactDOM from "react-dom/client";
import Pizza from "./pizza";

const App = () => {
  return (
    <div>
      <h1>Padre Gino's</h1>
      <Pizza
        name="Pepperoni"
        description="pep,cheese n stuff"
        image="/public/pizzas/pepperoni.webp"
      />
      <Pizza
        name="Americano"
        description="hot dogs,french fries n stuff"
        image="/public/pizzas/big_meat.webp"
      />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
