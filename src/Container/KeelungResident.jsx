import React, { Component } from "react";

import ImageContent from "../Components/ImageContent.jsx";
import Navbar from "../Components/Navbar.jsx";
import Footer from "../Components/Footer.jsx";
import FullWidthBlock from "../Components/FullWidthBlock.jsx";
import GreenBlock from "../Components/GreenBlock.jsx";
import GreenBlockWithoutTitle from "../Components/GreenBlockWithoutTitle.jsx";

class KeelungResident extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <ImageContent
          img="/pictures/keelung-resident/keelung-resident_bg.png"
          title="基隆市民"
          href={[
            ["首頁", "/", "/"],
            ["基隆服務", "/", "/"],
            ["基隆市民", "/"],
          ]}
        />
        <div className="app">
          <div className="d-flex flex-column align-items-center justify-content-center big-block">
            <div className="d-flex align-items-center justify-content-center home-title home-title-green my-3 w-100">
              市民快線
            </div>
            <div className="d-flex">
              <div>
                  <div></div>
                <span>市政信箱</span>
              </div>
            </div>
          </div>
          <FullWidthBlock
            py="5"
            my="3"
            className="col-12 d-flex justify-content-center align-items-center"
          >
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
              <div className="d-flex flex-column align-items-center justify-content-center col-12 col-lg-6">
                <div className="d-flex justify-content-center home-title home-title-green my-3 w-100">
                  勞工權益
                </div>
              </div>
            </div>
          </FullWidthBlock>
          <div className="d-flex row big-block">
            <div className="d-flex align-items-center justify-content-center col-lg-6">
              <img
                src="/pictures/keelung-resident/household.png"
                style={{ width: "75%" }}
              />
            </div>
            <div className="col-12 col-lg-6">
              <GreenBlock
                title={"戶籍身份"}
                serviceList={[
                  ["戶籍登記"],
                  ["結婚登記"],
                  ["門牌檢索換發"],
                  ["身分證換發"],
                ]}
                colnum={"6"}
              />
            </div>
          </div>
          <div className="big-block">
            <div className="d-flex justify-content-center home-title home-title-green my-3 w-100">
              勞工權益
            </div>
          </div>
          <div className="big-block d-flex">
            <div className="d-flex align-items-center justify-content-center home-title home-title-green my-3 w-100">
              長者專區
            </div>
            <div className="col-12 col-lg-6">
              <GreenBlock
                title={"婦幼專區"}
                serviceList={[
                  ["生育保健"],
                  ["生育獎勵生育津貼"],
                  ["兒少福利補助"],
                  ["婦女服務"],
                  ["育兒托育"],
                  ["學前補助"],
                ]}
                colnum={"6"}
              />
            </div>
          </div>
          <div className="big-block d-flex row">
            <div className="d-flex flex-column align-items-end col-12 col-lg-5">
              <div className="d-flex justify-content-start home-title home-title-green my-3 w-100">
                教育服務
              </div>
              <div className="mr-3">
                針對教育活動所提供的包含課程開發、師資培訓、教材供應、教具供應、場地供應甚至招生服務等的支持性工作。
              </div>
            </div>
            <div className="col-12 col-lg-7">
              <img
                src="/pictures/keelung-resident/education.png"
                className="w-100"
              />
            </div>
          </div>
          <FullWidthBlock
            py="5"
            my="3"
            className="col-12 d-flex flex-column justify-content-center align-items-center big-block"
          >
            <div className="d-flex justify-content-center home-title home-title-green my-3 w-100">
              環境政策
            </div>
            <div className="d-flex w-100 row">
              <div className="col-12 col-lg-6">
                <GreenBlockWithoutTitle
                  serviceList={[
                    ["環保政策"],
                    ["綠化環境與土地開採"],
                    ["節能補助"],
                    ["再生能源計畫"],
                  ]}
                  colnum={"6"}
                />
              </div>
              <div className="col-12 col-lg-6">
                <GreenBlockWithoutTitle
                  serviceList={[
                    ["水情水利"],
                    ["節約用水資訊網"],
                    ["垃圾清運"],
                    ["資源回收"],
                  ]}
                  colnum={"6"}
                />
              </div>
            </div>
          </FullWidthBlock>
          <div className="big-block d-flex row">
            <div className="d-flex flex-column align-items-end col-12 col-lg-5">
              <div className="d-flex justify-content-start home-title home-title-green my-3 w-100">
                法律服務
              </div>
              <div className="mr-3">
                法律服務機構為介入國有產權法律事務的律師事務所，本單位提供法律諮詢相關服務入口網。
              </div>
            </div>
            <div className="col-12 col-lg-7">
              <img
                src="/pictures/keelung-resident/law-service.png"
                className="w-100"
              />
            </div>
          </div>
          <div className="big-block d-flex row">
            <div className="d-flex flex-column align-items-end col-12 col-lg-6">
              <div className="d-flex justify-content-start home-title home-title-green my-3 w-100">
                文化休閒
              </div>
              <div className="mr-3">
                提供文化資產活動、
                視覺藝術活動、演出活動、研習資訊、藝文講座等活動資訊。
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <GreenBlockWithoutTitle
                serviceList={[
                  ["藝文活動"],
                  ["體育賽事"],
                  ["運動場館"],
                  ["體育館"],
                ]}
                colnum={"6"}
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default KeelungResident;
