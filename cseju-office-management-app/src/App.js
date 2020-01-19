import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import SideNavbar from "./components/SideNavbar";
import TopNavbar from "./components/TopNavbar";

function App() {
  return (
    <Router>
      <div className="App">
        <TopNavbar />
        <SideNavbar />
      </div>
    </Router>
  );
}

export default App;
