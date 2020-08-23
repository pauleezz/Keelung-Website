import React, { Component } from "react";

import ImageContent from "../Components/ImageContent.jsx";
import Navbar from "../Components/Navbar.jsx";
import Footer from "../Components/Footer.jsx";
import FullWidthBlock from "../Components/FullWidthBlock.jsx";

class OrganizationStructure extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <ImageContent
          img="/pictures/organization/img_bg.png"
          title="組織架構"
          href={[
            ["首頁", "/", "/"],
            ["市府團隊", "/", "/"],
            ["組織架構", "/"],
          ]}
        />
        <div className="app">
          <FullWidthBlock
            py="5"
            my="3"
            className="col-12 d-flex justify-content-center align-items-center"
          >
            基隆市政府(以下簡稱本府)置市長一人，綜理市政，置副市長一人，襄助市長處理市政，置秘書長一人，承市長之命，綜理本府一切事務；置參議、秘書、消保官，受秘書長之指揮、監督，分別掌理市政諮詢、政策規劃、機要、協調、核稿等事項。
            <br />
            <br />
            本府下設處分別掌理相關事項：民政處、財政處、產業發展處、教育處、工務處、交通處、都市發展處、社會處、地政處、綜合發展處、人事處、政風處、主計處、觀光及城市行銷處等。
            <br />
            <br />
            本府所屬機關分二層級，一級機關有：警察局、消防局、衛生局、文化局、環境保護局、稅務局。
            <br />
            本府所屬二級機關由本府依業務性質於下級行政轄區分別設立之。
            <br />
            本市以下設區，區設區公所。
          </FullWidthBlock>
          <Footer />
        </div>
      </div>
    );
  }
}

export default OrganizationStructure;
