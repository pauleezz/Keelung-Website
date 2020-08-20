import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Component } from "react";

import Home from "./Container/Home.jsx";
import KeelungResident from "./Container/KeelungResident.jsx";
import Administration from "./Container/Administration.jsx";
import Mayor from "./Container/Mayor.jsx";
import ViceMayor from "./Container/ViceMayor.jsx";
import OnlineApply from "./Container/OnlineApply.jsx";
import OnlineApplyService from "./Container/OnlineApplyService.jsx";

export function route() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/keelung-resident" component={KeelungResident} />
        <Route exact path="/administration" component={Administration} />
        <Route exact path="/mayor" component={Mayor} />
        <Route exact path="/vice-mayor" component={ViceMayor} />
        <Route exact path="/online-apply" component={OnlineApply} />
        <Route exact path="/online-apply/service" component={OnlineApplyService} />
      </Switch>
    </Router>
  );
}
