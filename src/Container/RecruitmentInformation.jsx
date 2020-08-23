import React, { Component } from "react";

import ImageContent from "../Components/ImageContent.jsx";
import Footer from "../Components/Footer.jsx";
import FullWidthBlock from "../Components/FullWidthBlock.jsx";

class RecruitmentInformation extends Component {
  render() {
    return (
      <div>
        <ImageContent
          img="/pictures/recruitment-information/img_bg.png"
          title="徵才資訊"
          href={[
            ["首頁", "/", "/"],
            ["市政資訊", "/", "/"],
            ["徵才資訊", "/"],
          ]}
        />
        <div className="app"></div>
      </div>
    );
  }
}

export default RecruitmentInformation;
