import React, { Component } from "react";

import ImageContent from "../Components/ImageContent.jsx";
import Supervisor from "../Components/Supervisor.jsx";
import Navbar from "../Components/Navbar.jsx";
import Footer from "../Components/Footer.jsx";

class ViceMayor extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <ImageContent
          img="/pictures/vice-mayor_bg.png"
          title="市政顧問"
          href={[
            ["首頁", "/", "/"],
            ["市府團隊", "/", "/"],
            ["副市長介紹", "/"],
          ]}
        />
        <div className="app">
          <Supervisor
            name={[["基隆市副市長 林永發", "/pictures/vice-mayor.png"]]}
            study={[
              ["中華大學科技管理研究所(營建管理組)博士班畢業"],
              ["國立成功大學建築研究所碩士畢業"],
              ["國立台灣工業技術學院營建工程技術系畢業"],
              ["國立台北工專建築設計科畢業"],
              ["省立花蓮高工建築工程科畢業"],
            ]}
            history={[
              ["102年 金門國家公園管理處 處長"],
              ["97年 陽明山國家公園管理處　處長"],
              ["95年 太魯閣國家公園管理處　處長"],
              ["87年 雪霸國家公園管理處　處長"],
              ["84年 金門國家公園管理處　副處長"],
              ["79年 太魯閣國家公園管理處　秘書"],
              ["76年 太魯閣國家公園管理處　工務課課長"],
              ["74年 基隆市政府工務局　觀光課課長"],
              ["71年 基隆市政府國宅局　企劃工程課長"],
            ]}
          />
          <Footer />
        </div>
      </div>
    );
  }
}

export default ViceMayor;
