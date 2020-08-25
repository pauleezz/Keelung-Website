import React, { Component } from 'react';

import ImageContent from "../Components/ImageContent.jsx";
import ImageBlock from "../Components/ImageBlock.jsx";
import Navbar from "../Components/Navbar.jsx";
import Footer from "../Components/Footer.jsx";

class Traffic extends Component {
    render() {
        return (
          <div>
            <Navbar />
            <ImageContent
              img="/pictures/traffic/traffic_bg.png"
              title="交通服務"
              href={[
                ["首頁", "/", "/"],
                ["基隆服務", "/", "/"],
                ["交通服務", "/"],
              ]}
            />
            <div className="app">
              <div className="my-5">
                <div className="d-flex row w-100">
                  <ImageBlock
                    src="/pictures/traffic/traffic-1.png"
                    title="道安宣傳"
                    content="文字文字文字。"
                    href=""
                  />
                  <ImageBlock
                    src="/pictures/traffic/traffic-2.png"
                    title="監理服務"
                    content="文字文字文字。"
                    href=""
                  />
                  <ImageBlock
                    src="/pictures/traffic/traffic-3.png"
                    title="路平專案"
                    content="文字文字文字。"
                    href=""
                  />
                  <ImageBlock
                    src="/pictures/traffic/traffic-4.png"
                    title="停車資訊"
                    content="文字文字文字。"
                    href=""
                  />
                  <ImageBlock
                    src="/pictures/traffic/traffic-5.png"
                    title="即時路況"
                    content="文字文字文字。"
                    href=""
                  />
                  <ImageBlock
                    src="/pictures/traffic/traffic-6.png"
                    title="罰鍰規費"
                    content="文字文字文字。"
                    href=""
                  />
                  <ImageBlock
                    src="/pictures/traffic/traffic-7.png"
                    title="公車資訊"
                    content="文字文字文字。"
                    href=""
                  />
                  <ImageBlock
                    src="/pictures/traffic/traffic-8.png"
                    title="即時公車動態"
                    content="推薦基隆新景點等相關在地旅遊資訊。"
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

export default Traffic;