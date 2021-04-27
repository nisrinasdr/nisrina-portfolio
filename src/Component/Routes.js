import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import HomePage from "./HomePage"
import NavBar from "./NavBar"

function Routes() {
  return (
    <Router>
      <div>
        <NavBar />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/">
            <HomePage />
          </Route>
          <Route path="/about">
            {/* <Users /> */}
          </Route>
          <Route path="/say-hello">
            {/* <Home /> */}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Routes