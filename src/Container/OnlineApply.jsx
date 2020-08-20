import React, { Component } from "react";

import ImageContent from "../Components/ImageContent.jsx";
import Footer from "../Components/Footer.jsx";

class OnlineApply extends Component {
  render() {
    return (
      <div>
        <ImageContent
          img="pictures/online-apply_bg.png"
          title="線上申辦專區"
          href={[
            ["首頁", "/", "/"],
            ["線上申辦專區", "/"],
          ]}
        />
        <div className="app"></div>
        <Footer />
      </div>
    );
  }
}

export default OnlineApply;
