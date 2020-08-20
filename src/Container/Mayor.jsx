import React, { Component } from "react";

import ImageContent from "../Components/ImageContent.jsx";
import Supervisor from "../Components/Supervisor.jsx";
import Footer from "../Components/Footer.jsx";

class Mayor extends Component {
  render() {
    return (
      <div>
        <ImageContent
          img="pictures/mayor_bg.png"
          title="市政顧問"
          href={[
            ["首頁", "/", "/"],
            ["市府團隊", "/", "/"],
            ["市長介紹", "/"],
          ]}
        />
        <div className="app">
          <Supervisor
            name={[["基隆市市長 林右昌", "pictures/mayor.png"]]}
            study={[
              ["國立臺灣大學建築與城鄉研究所"],
              ["文化大學造園暨景觀學系"],
              ["基隆高中"],
              ["基隆市建德國中"],
              ["基隆市建德國小"],
              ["基隆市成功國小"],
            ]}
            history={[
              ["總統府游錫堃秘書長辦公室 專門委員"],
              ["行政院游錫堃院長辦公室 參議"],
              ["民進黨游錫堃主席特別助理兼辦公室 主任"],
              ["民進黨中央黨部社會發展部 主任"],
              ["民進黨中央黨部 發言人"],
              ["民進黨立委基隆聯合服務中心 督導"],
              ["民進黨中央黨部 副祕書長"],
              ["臺灣城市競爭力發展協會 理事長"],
            ]}
          />
          <Footer />
        </div>
      </div>
    );
  }
}

export default Mayor;
