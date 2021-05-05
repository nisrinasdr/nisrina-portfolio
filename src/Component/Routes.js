import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import About from "./About"
import HomePage from "./HomePage"
import Message from "./Message"
import Work from "./Work"

function Routes() {
  return (
    <Router>
      <div>
        {/* <NavBar /> */}

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/work">
            <Work />
          </Route>
          <Route exact path="/message">
            <Message />
          </Route>
          {/* <Route exact path="/say-hello">
            <NavBar />
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
}

export default Routes