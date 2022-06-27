import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

/* global-css */
import "./globals/styles/vars.css";
import "./globals/styles/fonts.css";
import "./globals/styles/reset.css";
import "./globals/styles/globals.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
