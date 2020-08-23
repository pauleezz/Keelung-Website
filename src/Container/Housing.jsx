import React, { Component } from 'react';

import ImageContent from "../Components/ImageContent.jsx";
import ImageBlock from "../Components/ImageBlock.jsx";
import Footer from "../Components/Footer.jsx";

class Housing extends Component {
    render() {
        return (
          <div>
            <ImageContent
              img="/pictures/housing/housing_bg.png"
              title="買屋賣屋"
              href={[
                ["首頁", "/", "/"],
                ["基隆服務", "/", "/"],
                ["買屋賣屋", "/"],
              ]}
            />
            <div className="app">
              <div className="my-5">
                <div className="home-title home-title-green my-3 w-100">
                  土地房屋價格查詢
                </div>
                <div className="d-flex row w-100">
                  <ImageBlock
                    src="/pictures/housing/housing-1.png"
                    title="公告土地現值查詢"
                    content="查詢本市公告土地現值及公告地價。"
                    href=""
                  />
                  <ImageBlock
                    src="/pictures/housing/housing-2.png"
                    title="市有不動產標售"
                    content="公告標售本市市有非公用不動產，請踴躍參加投票。"
                    href=""
                  />
                </div>
              </div>
              <div className="my-5">
                <div className="home-title home-title-green my-3 w-100">
                  買屋、租屋補貼
                </div>
                <div className="d-flex row w-100">
                  <ImageBlock
                    src="/pictures/housing/housing-3.png"
                    title="住宅補貼"
                    content="基隆市108年度住宅補貼自7月22日起開始受理申請，請市民把握申請時機！"
                    href=""
                  />
                  <ImageBlock
                    src="/pictures/housing/housing-4.png"
                    title="地政資訊查詢專區"
                    content="基隆市政府地政處組織編制：處長、副處長各1名，其下有四個平行單位：測繪處理科、用地及地價科、土地開發科、地權登記科。"
                    href=""
                  />
                </div>
              </div>
              <div className="my-5">
                <div className="home-title home-title-green my-3 w-100">
                  土地房屋稅務
                </div>
                <div className="d-flex row w-100">
                  <ImageBlock
                    src="/pictures/housing/housing-5.png"
                    title="房屋稅"
                    content="財政部稅務入口網。"
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

export default Housing;