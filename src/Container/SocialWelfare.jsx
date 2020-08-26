import React, { Component } from "react";

import ImageContentSection from "../Components/ImageContentSection.jsx";
import ImageBlock from "../Components/ImageBlock.jsx";
import Navbar from "../Components/Navbar.jsx";
import Footer from "../Components/Footer.jsx";

class SocialWelfare extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <ImageContentSection
          img="/pictures/social-welfare/social-welfare_bg.png"
          title="社會福利"
          href={[
            ["首頁", "/", "/"],
            ["基隆服務", "/#keelung-service", "/"],
            ["社會福利", ""],
          ]}
          sectionList={[
            ["長者專區", "/"],
            ["育兒專區", "/"],
          ]}
          top="-26px"
        />
        <div className="app">
          <div className="my-5">
            <div className="home-title home-title-green my-3 w-100">
              長者專區
            </div>
            <div className="d-flex row w-100">
              <ImageBlock
                src="/pictures/social-welfare/social-welfare-1.png"
                title="老人補助"
                content="符合請領資格之農(漁)民申請，及照顧者及受照顧者照顧等符合資格限制。"
                href=""
              />
              <ImageBlock
                src="/pictures/social-welfare/social-welfare-2.png"
                title="長照專區"
                content="當家中有家人需要長期照顧時，可以先撥打長照服務專線，不分縣市。

提醒：本區是長照資源整理，如果您是想了解長照政策面的資料，請至《長照政策專區》"
                href=""
              />
            </div>
          </div>
          <div className="my-5">
            <div className="home-title home-title-green my-3 w-100">
              育兒專區
            </div>
            <div className="d-flex row align-items-center justify-content-center w-100">
              <ImageBlock
                src="/pictures/social-welfare/social-welfare-3.png"
                title="生育保健"
                content="生育保健諮詢—婚前健康諮詢、孕期藥物諮詢。"
                href=""
              />
              <ImageBlock
                src="/pictures/social-welfare/social-welfare-4.png"
                title="生育津貼、生育獎勵"
                content="最新育兒津貼、生育津貼、托育補助，全台育兒補助等資訊。"
                href=""
              />
              <ImageBlock
                src="/pictures/social-welfare/social-welfare-5.png"
                title="育兒托育"
                content="生育給付、生育津貼、育兒津貼、托育補助、育嬰留停津貼到幼兒園補助的條件與金額。"
                href=""
              />
              <ImageBlock
                src="/pictures/social-welfare/social-welfare-6.png"
                title="學前補助"
                content="具本國籍且入學當學年度9月1日前，年滿5足歲之幼兒，且實際就讀公立幼兒園或符合幼兒就讀幼兒園補助辦法規定之私立幼兒園者。"
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

export default SocialWelfare;
