import React, { Suspense, Component } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import routes from "./Routes";

class App extends Component {
  loading = () => <div className="animated">Loading...</div>;
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <main className="main">
            <Suspense fallback={this.loading()}>
              <Switch>
                {routes.map((route, idx) => (
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
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
