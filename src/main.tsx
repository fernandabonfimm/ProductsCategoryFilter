import React from "react";
import ReactDOM from "react-dom";
import RoutesComponent from "./routes/routes";
import { BrowserRouter } from "react-router-dom";
import "./styles/index.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <RoutesComponent />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
