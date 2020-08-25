import React, { Component } from 'react';

import ImageContent from "../Components/ImageContent.jsx";
import ImageBlock from "../Components/ImageBlock.jsx";
import Navbar from "../Components/Navbar.jsx";
import Footer from "../Components/Footer.jsx";

class Environment extends Component {
    render() {
        return (
          <div>
            <Navbar />
            <ImageContent
              img="/pictures/environment/environment_bg.png"
              title="環境能源"
              href={[
                ["首頁", "/", "/"],
                ["基隆服務", "/", "/"],
                ["環境能源", "/"],
              ]}
            />
            <div className="app">
              <div className="my-5">
                <div className="home-title home-title-green my-3 w-100">
                  環保政策
                </div>
                <div className="d-flex row w-100">
                  <ImageBlock
                    src="/pictures/environment/environment-1.png"
                    title="垃圾清運"
                    content="期以專業、創新、績效之工作團隊，為市民打造一個清淨的家園及資源永續利用的生活環境。"
                    href=""
                  />
                  <ImageBlock
                    src="/pictures/environment/environment-2.png"
                    title="資源回收"
                    content="「源頭減量再升級、環境保護2.0」打造減塑新時尚，防疫之外更防災回收場消防演練阻災害等環保資訊。"
                    href=""
                  />
                  <ImageBlock
                    src="/pictures/environment/environment-3.png"
                    title="節能補助"
                    content="基隆市住宅家電汰換25日公開抽選"
                    href=""
                  />
                  <ImageBlock
                    src="/pictures/environment/environment-4.png"
                    title="節約用水資訊網"
                    content="經濟部水利署節水服務團隊提供大用水戶效率用水諮詢服務，觀迎各界洽詢。"
                    href=""
                  />
                </div>
              </div>
              <div className="my-5">
                <div className="home-title home-title-green my-3 w-100">
                  環境政策
                </div>
                <div className="d-flex row w-100">
                  <ImageBlock
                    src="/pictures/environment/environment-5.png"
                    title="綠化環境"
                    content="基隆市環保局自88年起為改善空氣品質，提升環境綠化面積，推動各項措施等詳細資訊。"
                    href=""
                  />
                  <ImageBlock
                    src="/pictures/environment/environment-6.png"
                    title="土地開採"
                    content="基隆全方位地理資訊系統"
                    href=""
                  />
                  <ImageBlock
                    src="/pictures/environment/environment-7.png"
                    title="再生能源計畫"
                    content="政府積極的投入開發綠能與再生能源供國人使用外，節能減碳的積極作為也需要你我的響應與加入。"
                    href=""
                  />
                  <ImageBlock
                    src="/pictures/environment/environment-8.png"
                    title="水情水利"
                    content="基隆市水位及水情監測設施建置採購案"
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

export default Environment;