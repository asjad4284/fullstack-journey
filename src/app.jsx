import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider,createRouter } from "@tanstack/react-router";
import {routeTree} from "./routeTree.gen"

const router=createRouter({routeTree})

const App = () => {
  return (
    <StrictMode>
      <RouterProvider router={router}/>
    </StrictMode>
  )
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
