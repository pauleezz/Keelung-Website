import React, { Component } from "react";

import ImageContent from "../Components/ImageContent.jsx";
import ImageBlock from "../Components/ImageBlock.jsx";
import Footer from "../Components/Footer.jsx";

class Sightseeing extends Component {
  render() {
    return (
      <div>
        <ImageContent
          img="/pictures/sightseeing/sightseeing_bg.png"
          title="觀光旅遊"
          href={[
            ["首頁", "/", "/"],
            ["基隆服務", "/", "/"],
            ["觀光旅遊", "/"],
          ]}
        />
        <div className="app">
          <div className="my-5">
            <div className="d-flex row w-100">
              <ImageBlock
                src="/pictures/sightseeing/sightseeing-1.png"
                title="主題景點"
                content="提供基隆景點、基隆遊程等主題景點資訊。"
                href=""
              />
              <ImageBlock
                src="/pictures/sightseeing/sightseeing-2.png"
                title="交通資訊"
                content="提供基隆旅遊資訊等在地交通資訊。"
                href=""
              />
              <ImageBlock
                src="/pictures/sightseeing/sightseeing-3.png"
                title="主題美食"
                content="提供基隆好吃美食等在地美食資訊。"
                href=""
              />
              <ImageBlock
                src="/pictures/sightseeing/sightseeing-4.png"
                title="推薦旅遊"
                content="推薦基隆新景點等相關在地旅遊資訊。"
                href=""
              />
              <ImageBlock
                src="/pictures/sightseeing/sightseeing-5.png"
                title="住宿資訊"
                content="推薦基隆在地住宿旅館及飯店等在地住宿資訊。"
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

export default Sightseeing;
