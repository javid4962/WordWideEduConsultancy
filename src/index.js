import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import BrainyBearScript from "./scripts/BrainyBearScript";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="container-fluid flex items-center justify-center m-auto bg-red">
    <App />
    <BrainyBearScript />
  </div>
);
