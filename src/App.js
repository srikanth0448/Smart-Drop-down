import React, { Component } from "react";
import { Route, Switch, NavLink, Redirect } from "react-router-dom";

import DropDownContainer from "./containers/dropDownContainer";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <header>
          <nav className="navbar navbar-expand-lg navbar-light bg-light ">
            <div className="navbar-nav ">
              <NavLink className="nav-item nav-link" to="/user-add-privilege">
                User Add Privilege
              </NavLink>
              <NavLink
                exact
                className="nav-item nav-link"
                to="/user-no-add-privilege"
              >
                User No Add Privilege
              </NavLink>
            </div>
          </nav>
        </header>
        <div className="content-wrapper">
          <Switch>
            <Route
              path="/user-add-privilege"
              component={(props) => <DropDownContainer {...props} />}
            />

            <Route
              path="/user-no-add-privilege"
              component={(props) => <DropDownContainer {...props} />}
            />
            <Redirect from="/" to="/user-add-privilege" />
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
