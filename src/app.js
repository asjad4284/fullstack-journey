import React from "react";
import ReactDOM from "react-dom/client";
import Pizza from "./pizza";

const App=()=>{
    return React.createElement("div",{},[
        React.createElement("h1",{},"Padre Gino's"),
        React.createElement(Pizza,{
            name:"The Pepperoni pizza",
            description:"some dope pizza yo"
        })
    ])
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(App));
