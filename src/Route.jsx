import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Component } from "react";

import Home from "./Container/Home.jsx";
import KeelungResident from "./Container/KeelungResident.jsx";
import Administration from "./Container/Administration.jsx";
import Mayor from "./Container/Mayor.jsx";
import ViceMayor from "./Container/ViceMayor.jsx";
import OnlineApply from "./Container/OnlineApply.jsx";
import OnlineApplyService from "./Container/OnlineApplyService.jsx";
import Covid19 from "./Container/Covid19.jsx";
import Medical from "./Container/Medical.jsx";
import SocialWelfare from "./Container/SocialWelfare.jsx";
import Sightseeing from "./Container/Sightseeing.jsx";
import CitizenExpress from "./Container/CitizenExpress.jsx";
import LaborEmployment from "./Container/LaborEmployment.jsx";
import Environment from "./Container/Environment.jsx";
import Housing from "./Container/Housing.jsx";
import EnterpriseInvestment from "./Container/EnterpriseInvestment.jsx";
import Education from "./Container/Education.jsx";
import Leisure from "./Container/Leisure.jsx";
import Traffic from "./Container/Traffic.jsx";
import LawService from "./Container/LawService.jsx";
import Household from "./Container/Household.jsx";

export function route() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/keelung-service/keelung-resident"
          component={KeelungResident}
        />
        <Route exact path="/administration" component={Administration} />
        <Route exact path="/mayor" component={Mayor} />
        <Route exact path="/vice-mayor" component={ViceMayor} />
        <Route exact path="/online-apply" component={OnlineApply} />
        <Route
          exact
          path="/online-apply/service"
          component={OnlineApplyService}
        />
        <Route exact path="/keelung-service/covid19" component={Covid19} />
        <Route exact path="/keelung-service/medical" component={Medical} />
        <Route
          exact
          path="/keelung-service/social-welfare"
          component={SocialWelfare}
        />
        <Route
          exact
          path="/keelung-service/sightseeing"
          component={Sightseeing}
        />
        <Route
          exact
          path="/keelung-service/citizen-express"
          component={CitizenExpress}
        />
        <Route
          exact
          path="/keelung-service/labor-employment"
          component={LaborEmployment}
        />
        <Route
          exact
          path="/keelung-service/environment"
          component={Environment}
        />
        <Route exact path="/keelung-service/housing" component={Housing} />
        <Route
          exact
          path="/keelung-service/enterprise-investment"
          component={EnterpriseInvestment}
        />
        <Route exact path="/keelung-service/education" component={Education} />
        <Route exact path="/keelung-service/leisure" component={Leisure} />
        <Route exact path="/keelung-service/traffic" component={Traffic} />
        <Route
          exact
          path="/keelung-service/law-service"
          component={LawService}
        />
        <Route exact path="/keelung-service/household" component={Household} />
      </Switch>
    </Router>
  );
}
