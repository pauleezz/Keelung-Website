import React, { Component } from "react";

import ImageContentSection from "../Components/ImageContentSection.jsx";
import Navbar from "../Components/Navbar.jsx";
import Footer from "../Components/Footer.jsx";
import FullWidthBlock from "../Components/FullWidthBlock.jsx";
import GreenBlock from "../Components/GreenBlock.jsx";
import Circle from "../Components/Circle.jsx";

class NonKeelungResident extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <ImageContentSection
          img="/pictures/no-keelung-resident/img_bg.png"
          title="非基隆市民"
          href={[
            ["首頁", "/", "/"],
            ["基隆服務", "", "/"],
            ["非基隆市民", ""],
          ]}
          sectionList={[
            ["市民快線", "/"],
            ["徵才資訊", "/"],
            ["企業資訊", "/"],
            ["買屋賣屋", "/"],
            ["交通服務", "/"],
          ]}
          top="-26px"
        />
        <div className="app">
          <div className="d-flex flex-column align-items-center justify-content-center big-block">
            <div className="d-flex align-items-center justify-content-center home-title home-title-green my-3 w-100">
              市民快線
            </div>
            <div className="d-flex my-3">
              <Circle
                title="市政信箱"
                radius="10vw"
                backgroundcolor="#F7F7F7"
                backgroundimage="/pictures/keelung-resident/contact-03.png"
                mx="5"
                width="50%"
              />
              <Circle
                title="訴願審議"
                radius="10vw"
                backgroundcolor="#F7F7F7"
                backgroundimage="/pictures/keelung-resident/contact-04.png"
                mx="5"
                width="50%"
              />
              <Circle
                title="1999服務"
                radius="10vw"
                backgroundcolor="#F7F7F7"
                backgroundimage="/pictures/keelung-resident/contact-05.png"
                mx="5"
                width="50%"
              />
              <Circle
                title="常見問答"
                radius="10vw"
                backgroundcolor="#F7F7F7"
                backgroundimage="/pictures/keelung-resident/contact-06.png"
                mx="5"
                width="50%"
              />
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-center big-block w-100 row">
            <div className="d-flex flex-column align-items-center justify-content-center col-12 col-lg-6">
              <div className="d-flex justify-content-center home-title home-title-green my-3 w-100">
                徵才資訊
              </div>
              <div class="d-flex justify-content-center">
                <div className="d-flex flex-column align-items-center justify-content-center">
                  <img
                    src="/pictures/keelung-resident/recruitment-1.png"
                    style={{ width: "75%" }}
                  />
                  市府徵才
                </div>
                <div className="d-flex flex-column align-items-center justify-content-center">
                  <img
                    src="/pictures/keelung-resident/recruitment-2.png"
                    style={{ width: "75%" }}
                  />
                  台灣就業通網站
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <GreenBlock
                title={"企業資訊"}
                serviceList={[
                  ["企業融資"],
                  ["產業登記"],
                  ["創業輔導"],
                  ["產業查詢"],
                  ["發展獎勵"],
                  ["工商登記查詢"],
                  ["創業貸款"],
                  ["採購招標"],
                ]}
                colnum={"6"}
              />
            </div>
          </div>
          <FullWidthBlock
            py="5"
            my="3"
            className="col-12 d-flex flex-column justify-content-center align-items-center big-block"
          >
            <div class="d-flex justify-content-center row">
              <div className="d-flex align-items-start justify-content-center home-title home-title-green col-12 col-lg-3">
                買屋賣屋
              </div>
              <div className="d-flex flex-column align-items-center justify-content-center col-4 col-lg-3">
                <img
                  src="/pictures/no-keelung-resident/household-1.png"
                  style={{ width: "80%" }}
                />
                土地房屋價格查詢
              </div>
              <div className="d-flex flex-column align-items-center justify-content-center col-4 col-lg-3">
                <img
                  src="/pictures/no-keelung-resident/household-2.png"
                  style={{ width: "80%" }}
                />
                買屋、租屋補貼
              </div>
              <div className="d-flex flex-column align-items-center justify-content-center col-4 col-lg-3">
                <img
                  src="/pictures/no-keelung-resident/household-3.png"
                  style={{ width: "80%" }}
                />
                土地房屋稅務
              </div>
            </div>
          </FullWidthBlock>

          <div className="d-flex flex-column align-items-center justify-content-center big-block">
            <div className="d-flex align-items-center justify-content-center home-title home-title-green my-3 w-100">
              交通服務
            </div>
            <div className="d-flex my-3">
              <Circle
                title="監理服務"
                radius="10vw"
                backgroundcolor="#F7F7F7"
                backgroundimage="/pictures/no-keelung-resident/traffic-1.png"
                mx="5"
                width="100%"
              />
              <Circle
                title="路平專案"
                radius="10vw"
                backgroundcolor="#F7F7F7"
                backgroundimage="/pictures/no-keelung-resident/traffic-2.png"
                mx="5"
                width="100%"
              />
              <Circle
                title="停車資訊"
                radius="10vw"
                backgroundcolor="#F7F7F7"
                backgroundimage="/pictures/no-keelung-resident/traffic-3.png"
                mx="5"
                width="100%"
              />
              <Circle
                title="即時路況"
                radius="10vw"
                backgroundcolor="#F7F7F7"
                backgroundimage="/pictures/no-keelung-resident/traffic-4.png"
                mx="5"
                width="100%"
              />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default NonKeelungResident;
