import React, { Component } from "react";
import "./App.css";
/** Boot strap */
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";
import Dashboard from "./components/Dashboard";
import Routine from "./components/routine/Routine";
import Syllabus from "./components/syllabus/Syllabus";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App container">
          <Header />
          <Sidebar />

          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/routine" component={Routine} />
            <Route exact path="/syllabus" component={Syllabus} />
          </Switch>
        </div>
        ;
      </Router>
    );
  }
}

export default App;
