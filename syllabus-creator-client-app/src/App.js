import React, { Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import Profile from "./components/profile/Profile";
import Routine from "./components/routine/Routine";
import Syllabus from "./components/syllabus/Syllabus";

function App() {
  return (
    <Fragment>
      <div className="App">
        <BrowserRouter>
          <Topbar />
          <div className="container-fluid">
            <div className="row">
              <Sidebar />

              <main
                role="main"
                className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4"
              >
                <div className="fluid">
                  <Switch>
                    <Route exact path="/(|dashboard)">
                      <Dashboard />
                    </Route>
                  </Switch>
                  <Switch>
                    <Route exact path="/profile">
                      <Profile />
                    </Route>
                  </Switch>
                  <Switch>
                    <Route exact path="/routine">
                      <Routine />
                    </Route>
                  </Switch>
                  <Switch>
                    <Route exact path="/syllabus">
                      <Syllabus />
                    </Route>
                  </Switch>
                  <Switch>
                    <Route exact path="/result">
                      <Dashboard />
                    </Route>
                  </Switch>
                  <Switch>
                    <Route exact path="/tasks">
                      <Dashboard />
                    </Route>
                  </Switch>
                </div>
              </main>
            </div>
          </div>
        </BrowserRouter>
      </div>
    </Fragment>
  );
}

export default App;
