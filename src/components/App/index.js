import React, { Component } from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "../Home";
import Nav from "../Nav";
import NotFound from "../NotFound";
import ListOfCompetitionsContainer from "../../containers/ListOfCompetitionsContainer";
import Competition from "../Competition";
import Fixture from "../Fixture";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route
              path="/Competitions"
              component={ListOfCompetitionsContainer}
            />
            <Route path="/Competition/:id" component={Competition} />
            <Route path="/Fixture/:id" component={Fixture} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
