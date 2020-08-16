import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Component } from "react";

import KeelungResident from "./Container/KeelungResident.jsx";

export function route() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={KeelungResident} />
      </Switch>
    </Router>
  );
}