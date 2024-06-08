import React from "react";
import ReactDOM from "react-dom/client";
//import App from "./App.jsx";
import "./index.css";
import DI_Main from "./components/Interview/DI_Main.jsx";
import DI_Interview from "./components/Interview/DI_Interview.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DI_Interview />
  </React.StrictMode>
);
