import ReactDOM from "react-dom/client";
import Order from "./Order";

const App = () => {
  return (
    <div>
      <h1>Padre Gino's</h1>
      <Order/>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
