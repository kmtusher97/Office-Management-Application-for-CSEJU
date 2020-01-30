import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import DashboardMenus from "../dashboard/DashboardMenus";
import SyllabusMenus from "../syllabus/SyllabusMenus";
import RoutineMenus from "../routine/RoutineMenus";

class Sidebar extends Component {
  render() {
    return (
      <div className="fluid">
        <div className="row">
          <div className="col-sm-12">
            <nav
              className="navbar navbar-light"
              style={{
                backgroundColor: "#80b3ff",
                height: "auto",
                textAlign: "left"
              }}
            >
              <Switch>
                <Route path="/dashboard" component={DashboardMenus} />
                <Route path="/routine" component={RoutineMenus} />
                <Route path="/syllabus" component={SyllabusMenus} />
              </Switch>
            </nav>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12"></div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
