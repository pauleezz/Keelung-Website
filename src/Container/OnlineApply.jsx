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
        <div className="app">
          <div className="d-flex flex-column align-items-center justify-content-center py-5">
            <div className="gold-block my-2 px-5 py-3">線上申辦地政謄本</div>
            <div className="gold-block my-2 px-5 py-3">線上申請戶籍謄本</div>
            <div className="gold-block my-2 px-5 py-3">線上申請除戶謄本</div>
            <div className="gold-block my-2 px-5 py-3">線上申請戶口名簿</div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default OnlineApply;
