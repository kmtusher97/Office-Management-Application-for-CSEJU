import React, { Component, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import routes from "./Routes";

class Routing extends Component {
  loading = () => <div className="animated">Loading...</div>;
  render() {
    return (
      <Suspense fallback={this.loading()}>
        <Switch>
          {routes.headerRoutes.map((route, idx) => (
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

export default Routing;
