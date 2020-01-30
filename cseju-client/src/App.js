import React, { Component } from "react";
import "./App.css";
/** Boot strap */
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";
import Dashboard from "./components/dashboard/Dashboard";
import Routine from "./components/routine/Routine";
import Syllabus from "./components/syllabus/Syllabus";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="row">
            <div className="col-md-12">
              <Header />
            </div>
          </div>
          <div className="row">
            <div className="col-md-2">
              <Sidebar />
            </div>
            <div className="col-md-10">
              <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/routine" component={Routine} />
                <Route exact path="/syllabus" component={Syllabus} />
                /**syllabus routes*/
                <Route exact path="/syllabus/search" component={Syllabus} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
