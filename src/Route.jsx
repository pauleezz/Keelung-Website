import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Component } from "react";

import Home from "./Container/Home.jsx";
import KeelungResident from "./Container/KeelungResident.jsx";
import Administration from "./Container/Administration.jsx";

export function route() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/keelung-resident" component={KeelungResident} />
        <Route exact path="/administration" component={Administration} />
      </Switch>
    </Router>
  );
}
