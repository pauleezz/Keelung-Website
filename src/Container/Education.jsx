import React, { Component } from 'react';

import ImageContent from "../Components/ImageContent.jsx";
import ImageBlock from "../Components/ImageBlock.jsx";
import Footer from "../Components/Footer.jsx";

class Education extends Component {
    render() {
        return (
          <div>
            <ImageContent
              img="/pictures/education/education_bg.png"
              title="教育學習"
              href={[
                ["首頁", "/", "/"],
                ["基隆服務", "/", "/"],
                ["教育學習", "/"],
              ]}
            />
            <div className="app">
              <div className="my-5">
                <div className="d-flex row w-100">
                  <ImageBlock
                    src="/pictures/education/education-1.png"
                    title="藝文活動"
                    content="藝文活動藝文活動藝文活動藝文活動。"
                    href=""
                  />
                  <ImageBlock
                    src="/pictures/education/education-2.png"
                    title="體育賽事"
                    content="體育賽事體育賽事體育賽事體育賽事。"
                    href=""
                  />
                  <ImageBlock
                    src="/pictures/education/education-3.png"
                    title="運動場館"
                    content="運動場館運動場館運動場館運動場館。"
                    href=""
                  />
                  <ImageBlock
                    src="/pictures/education/education-4.png"
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

export default Education;