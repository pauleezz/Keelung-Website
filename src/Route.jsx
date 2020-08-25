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
import NonKeelungResident from "./Container/NonKeelungResident.jsx";
import Travel from "./Container/Travel.jsx";
import Mail from "./Container/Mail.jsx";
import EnergySubsidy from "./Container/EnergySubsidy.jsx";
import OrganizationStructure from "./Container/OrganizationStructure.jsx";
import History from "./Container/History.jsx";
import KeelungIntro from "./Container/KeelungIntro.jsx";
import Geography from "./Container/Geography.jsx";
import RecruitmentInformation from "./Container/RecruitmentInformation.jsx";
import MunicipalRecruitment from "./Container/MunicipalRecruitment.jsx";
import DiscoverKeelung from "./Container/DiscoverKeelung.jsx";
import BidInformation from "./Container/BidInformation.jsx";
import BidInformationDetail from "./Container/BidInformationDetail.jsx";
import Plan from "./Container/Plan.jsx";
import MunicipalStatistic from "./Container/MunicipalStatistic.jsx";
import FAQ from "./Container/FAQ.jsx";
import PublicInfo from "./Container/PublicInfo.jsx";
import Latest from "./Container/Latest.jsx";
import MunicipalNews from "./Container/MunicipalNews.jsx";
import Activity from "./Container/Activity.jsx";

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
        <Route exact path="/about/administration" component={Administration} />
        <Route exact path="/about/mayor" component={Mayor} />
        <Route exact path="/about/vice-mayor" component={ViceMayor} />
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
        <Route
          exact
          path="/keelung-service/non-keelung-resident"
          component={NonKeelungResident}
        />
        <Route exact path="/keelung-service/travel" component={Travel} />
        <Route exact path="/keelung-service/mail" component={Mail} />
        <Route
          exact
          path="/keelung-service/energy-subsidy"
          component={EnergySubsidy}
        />
        <Route
          exact
          path="/about/organization"
          component={OrganizationStructure}
        />
        <Route exact path="/know-keelung/history" component={History} />
        <Route
          exact
          path="/know-keelung/keelung-intro"
          component={KeelungIntro}
        />
        <Route exact path="/know-keelung/geography" component={Geography} />
        <Route
          exact
          path="/municipal-information/recruitment-information-simplify"
          component={RecruitmentInformation}
        />
        <Route
          exact
          path="/municipal-information/bid-information-simplify"
          component={BidInformation}
        />
        <Route
          exact
          path="/municipal-information/bid-information-detail"
          component={BidInformationDetail}
        />
        <Route
          exact
          path="/municipal-information/plan"
          component={Plan}
        />
        <Route
          exact
          path="/municipal-information/municipal-statistic"
          component={MunicipalStatistic}
        />
        <Route
          exact
          path="/municipal-information/FAQ"
          component={FAQ}
        />
        <Route
          exact
          path="/municipal-information/public-info"
          component={PublicInfo}
        />
        <Route
          exact
          path="/government-service/municipal-recruitment"
          component={MunicipalRecruitment}
        />
        <Route
          exact
          path="/know-keelung/discover-keelung"
          component={DiscoverKeelung}
        />
        <Route
          exact
          path="/news/activity"
          component={Activity}
        />
        <Route
          exact
          path="/news/latest"
          component={Latest}
        />
        <Route
          exact
          path="/news/municipal-news"
          component={MunicipalNews}
        />
      </Switch>
    </Router>
  );
}
