import React, { Component } from "react";

import ImageContent from "../Components/ImageContent.jsx";
import Navbar from "../Components/Navbar.jsx";
import Footer from "../Components/Footer.jsx";
import FullWidthBlock from "../Components/FullWidthBlock.jsx";

class RecruitmentInformation extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <ImageContent
          img="/pictures/recruitment-information/img_bg.png"
          title="徵才資訊"
          href={[
            ["首頁", "/", "/"],
            ["市政資訊", "/", "/"],
            ["徵才資訊", "/"],
          ]}
        />
        <div className="app">
          <div className="d-flex flex-column align-items-center justify-content-center big-block">
            <div
              className="d-flex justify-content-end"
              style={{ width: "85%" }}
            >
              <div className="green-buttons small-shadow green-buttons-active">簡易版</div>
              <div className="green-buttons small-shadow">
                詳細版
              </div>
            </div>
            <div
              className="d-flex justify-content-between align-items-center"
              style={{ width: "85%", borderBottom: "solid 4px #DDDDDD" }}
            >
              <div className="d-flex justify-content-start home-title home-title-green my-3">
                徵才資訊
              </div>
              <div class="search-container">
                <form>
                  <input type="text" placeholder="輸入關鍵字" />
                  <button type="submit">
                    <i class="fa fa-search"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default RecruitmentInformation;
