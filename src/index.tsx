import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";

let rootEl = document.getElementById("root");

if (rootEl) {
  let root = ReactDOM.createRoot(rootEl);

  root.render(
    <React.StrictMode>
      <BrowserRouter basename="test-followers">
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
}
