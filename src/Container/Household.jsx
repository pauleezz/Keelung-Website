import React, { Component } from 'react';

import ImageContent from "../Components/ImageContent.jsx";
import ImageBlock from "../Components/ImageBlock.jsx";
import Footer from "../Components/Footer.jsx";

class Household extends Component {
    render() {
        return (
          <div>
            <ImageContent
              img="/pictures/household/household_bg.png"
              title="戶籍身份"
              href={[
                ["首頁", "/", "/"],
                ["基隆服務", "/", "/"],
                ["戶籍身份", "/"],
              ]}
            />
            <div className="app">
              <div className="my-5">
                <div className="d-flex row w-100">
                  <ImageBlock
                    src="/pictures/sightseeing/sightseeing-1.png"
                    title="戶籍登記"
                    content="文字文字文字。"
                    href=""
                  />
                  <ImageBlock
                    src="/pictures/sightseeing/sightseeing-2.png"
                    title="結婚登記"
                    content="文字文字文字。"
                    href=""
                  />
                  <ImageBlock
                    src="/pictures/sightseeing/sightseeing-3.png"
                    title="門牌檢索換發"
                    content="文字文字文字。"
                    href=""
                  />
                  <ImageBlock
                    src="/pictures/sightseeing/sightseeing-4.png"
                    title="身分證換發"
                    content="文字文字文字。"
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

export default Household;