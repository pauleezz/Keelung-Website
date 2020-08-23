import React, { Component } from "react";

import Navbar from "../Components/Navbar.jsx";
import Footer from "../Components/Footer.jsx";

class EnergySubsidy extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="app">
          <img src="/pictures/energy-subsidy.png" style={{ width: "100%" }}/>
          <Footer />
        </div>
      </div>
    );
  }
}

export default EnergySubsidy;
