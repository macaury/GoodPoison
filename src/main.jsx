import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "./components/sass";
import "./components/sass/mobile.scss";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
