import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import NavBar from "./components/NavBar";

ReactDOM.render(
  <React.StrictMode>
    <div className="w-full h-full min-h-screen bg-background-dark">
    <NavBar />
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
