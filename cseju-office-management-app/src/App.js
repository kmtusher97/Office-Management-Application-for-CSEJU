import React, { Component } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Routing from "./route/Routing";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <main className="main">
            <Routing />
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
