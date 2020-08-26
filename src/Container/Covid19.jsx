import React, { Component } from "react";

import ImageContent from "../Components/ImageContent.jsx";
import ImageBlock from "../Components/ImageBlock.jsx";
import Navbar from "../Components/Navbar.jsx";
import Footer from "../Components/Footer.jsx";

class Covid19 extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <ImageContent
          img="/pictures/covid/covid19_bg.png"
          title="防疫專區"
          href={[
            ["首頁", "/", "/"],
            ["基隆服務", "/#keelung-service", "/"],
            ["防疫專區", ""],
          ]}
        />
        <div className="app">
          <div className="my-5">
            <div className="home-title home-title-green my-3 w-100">
              防疫專區
            </div>
            <div className="d-flex row w-100">
              <ImageBlock
                src="/pictures/covid/covid-1.png"
                title="covid專區"
                content="國際疫情升溫，落實防疫不鬆懈，COVID-19 請參閱衛生福利部疾病管制署提供的 COVID-19 最新資訊。"
                href=""
              />
              <ImageBlock
                src="/pictures/covid/covid-2.png"
                title="疫情訊息"
                content="請參閱衛生福利部疾病管制署提供的最新資訊。"
                href=""
              />
              <ImageBlock
                src="/pictures/covid/covid-3.png"
                title="防疫政策"
                content="請參閱衛生福利部疾病管制署提供的最新資訊。"
                href=""
              />
              <ImageBlock
                src="/pictures/covid/covid-4.png"
                title="covid專區"
                content="請參閱衛生福利部疾病管制署提供的最新資訊。"
                href=""
              />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Covid19;
