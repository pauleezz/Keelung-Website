import React, { Component } from 'react';

import ImageContent from "../Components/ImageContent.jsx";
import ImageBlock from "../Components/ImageBlock.jsx";
import Footer from "../Components/Footer.jsx";

class Leisure extends Component {
    render() {
        return (
          <div>
            <ImageContent
              img="/pictures/leisure/leisure_bg.png"
              title="文化休閒"
              href={[
                ["首頁", "/", "/"],
                ["基隆服務", "/", "/"],
                ["文化休閒", "/"],
              ]}
            />
            <div className="app">
              <div className="my-5">
                <div className="home-title home-title-green my-3 w-100">
                  娛樂活動
                </div>
                <div className="d-flex row w-100">
                  <ImageBlock
                    src="/pictures/leisure/leisure-1.png"
                    title="藝文活動"
                    content="藝文活動藝文活動藝文活動藝文活動。"
                    href=""
                  />
                  <ImageBlock
                    src="/pictures/leisure/leisure-2.png"
                    title="體育賽事"
                    content="體育賽事體育賽事體育賽事體育賽事。"
                    href=""
                  />
                </div>
              </div>
              <div className="my-5">
                <div className="home-title home-title-green my-3 w-100">
                  場館
                </div>
                <div className="d-flex row w-100">
                  <ImageBlock
                    src="/pictures/leisure/leisure-3.png"
                    title="運動場館"
                    content="運動場館運動場館運動場館運動場館。"
                    href=""
                  />
                  <ImageBlock
                    src="/pictures/leisure/leisure-4.png"
                    title="圖書館"
                    content="圖書館圖書館圖書館圖書館。"
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

export default Leisure;