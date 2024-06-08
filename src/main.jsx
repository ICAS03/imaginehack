import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import LoginPage from "./components/Authentication/LoginPage.jsx";
import Dashboard from "./components/Dashboard/Dashboard.jsx";
import CandidateDashBoard from "./components/Candidate-Dashboard/c_dashboard.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App></App>
  </React.StrictMode>
);
