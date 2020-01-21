import React, { Component, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import routes from "./SidebarRoutes";

class SidebarRouting extends Component {
  loading = () => <div className="animated">Loading...</div>;
  render() {
    return (
      <Suspense fallback={this.loading()}>
        <Switch>
          {routes.sidebarRoutes.map((route, idx) => (
            <Route
              key={idx}
              path={route.path}
              exact={route.exact}
              component={route.component}
            ></Route>
          ))}
          <Redirect from="/" to="/dashboard" />
        </Switch>
      </Suspense>
    );
  }
}

export default SidebarRouting;
