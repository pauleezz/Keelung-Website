import React, { Component } from "react";

import "../CSS/Home.css";
import Navbar from "../Components/Navbar.jsx";
import Canvas from "../Components/Canvas.jsx";
import Footer from "../Components/Footer.jsx";
import CharmKeelung from "../Components/CharmKeelung.jsx";
import News from "../Components/News.jsx";
import KeelungService from "../Components/KeelungService.jsx";

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Canvas />
        
        <div className="app">
          <KeelungService />
          

          <div className="big-block">
            <div className="d-flex flex-column align-items-start justify-content-center home-title mb-3">
              <span className="home-title-gray">APPLICATION & SUBSIDY</span>
              <span className="home-title-green">補助 / 申辦專區</span>
            </div>
            <div className="d-flex row">
              <div className="subsidy-blcok col-12 col-lg-6 mb-2">
                <img
                  src="pictures/annie-spratt-U_Ff4ohzLSw-unspl.png"
                  className="subsidy-image"
                />
                <div className="subsidy-title d-flex align-items-center justify-content-center">
                  補助申請服務
                </div>
              </div>
              <div className="subsidy-blcok col-12 col-lg-6 mb-2">
                <img
                  src="pictures/avel-chuklanov-DUmFLtMeAbQ-uns.png"
                  className="subsidy-image"
                />
                <div className="subsidy-title d-flex align-items-center justify-content-center">
                  線上申辦專區
                </div>
              </div>
            </div>
          </div>

          <News />

          <CharmKeelung />
          <div className="big-block">
            <div className="d-flex flex-column align-items-start justify-content-center home-title mb-3">
              <span className="home-title-gray">RE-EVOLUTION OF KEELUNG</span>
              <span className="home-title-green">基隆再進化</span>
            </div>
            <div className="d-flex row relative">
              <div className="d-flex flex-column align-items-center justify-content-center col-12 col-lg-6">
                <div>
                  <h4 className="mb-3">林右昌用兩張桌子翻轉城市形象</h4>
                  <p>
                    想到基隆，你想到什麼？雨都、海產、廟口小吃？
                    <br />
                    <br />
                    《未來城市》客座總編輯吳漢中為2018台中世界花博設計長，此次邀請基隆市長林右昌、監察委員林盛豐展開「設計走進首長辦公室」系列對談。
                    <br />
                    <br />
                    看擁有建築、景觀設計背景的基隆市長林右昌，不是只用城市特色拼觀光，而是跳脫城市治理框架，用大台北腹地思維打造基隆。
                    他如何讓熱血的設計界「在台北賺錢，在基隆實現夢想」?
                  </p>
                </div>
                <button className="small-green-button button-charm small-shadow my-3">
                  更多內容
                </button>
              </div>
              <div className="col-12 col-lg-6 relative">
                <img src="pictures/icon-19.png" id="revolution-down" />
                <img
                  src="pictures/re-revolution of keelung.png"
                  id="revolution-up"
                />
              </div>
            </div>
          </div>

          <div className="big-block relative">
            <div className="d-flex flex-column align-items-start justify-content-center home-title mb-3">
              <span className="home-title-gray">STATISTICS</span>
              <span className="home-title-green">統計指標</span>
            </div>
          </div>

          <div className="d-flex flex-column align-items-center justify-content-center big-block">
            <div className="d-flex flex-column align-items-center justify-content-center home-title mb-3">
              <span className="home-title-gray">CONNECT WITH US</span>
              <span className="home-title-green">與我們聯繫</span>
            </div>
            <div
              className="d-flex align-items-around small-shadow"
              id="connect-box"
            >
              <div className="d-flex align-items-center justify-content-center connect-gray">
                市政信箱
              </div>
              <div className="d-flex align-items-center justify-content-center connect-gray">
                市民熱線
              </div>
              <div className="d-flex align-items-center justify-content-center connect-gray">
                本府位置
              </div>
              <div className="d-flex flex-column align-items-center justify-content-center connect-green">
                <div className="mb-1">電子報</div>
                <button id="button-subscribe">立即訂閱</button>
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    );
  }
}

export default Home;
