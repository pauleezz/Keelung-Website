import React, { Component } from "react";

import ImageContent from "../Components/ImageContent.jsx";
import Navbar from "../Components/Navbar.jsx";
import Footer from "../Components/Footer.jsx";
import FullWidthBlock from "../Components/FullWidthBlock.jsx";
import Circle from "../Components/Circle.jsx";
import ImageText from "../Components/ImageText.jsx";

class DiscoverKeelung extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <ImageContent
          img="/pictures/travel/img_bg.png"
          title="發現基隆"
          href={[
            ["首頁", "/", "/"],
            ["認識基隆", "", "/"],
            ["發現基隆", ""],
          ]}
        />
        <div className="app">
          <div className="d-flex row align-items-center justify-content-center big-block">
            <div className="col-12 col-lg-6 end">
              <div className="d-flex justify-content-start home-title home-title-green my-3 w-100">
                魅力基隆
              </div>
              <div className="mr-3">
                魅力基隆為基隆市政府觀光及城市行銷處新聞科定期以季刊發行市政刊物
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div
                id="carouselExampleControls"
                class="carousel slide w-100"
                data-ride="carousel"
              >
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img
                      class="d-block w-100"
                      src="/pictures/Charming Keelung-1.png"
                      alt="First slide"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      class="d-block w-100"
                      src="/pictures/Charming Keelung-2.png"
                      alt="First slide"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      class="d-block w-100"
                      src="/pictures/Charming Keelung-4.png"
                      alt="First slide"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      class="d-block w-100"
                      src="/pictures/Charming Keelung-5.png"
                      alt="First slide"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      class="d-block w-100"
                      src="/pictures/Charming Keelung-6.png"
                      alt="First slide"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      class="d-block w-100"
                      src="/pictures/Charming Keelung-7.png"
                      alt="First slide"
                    />
                  </div>
                </div>
                <a
                  class="carousel-control-prev"
                  href="#carouselExampleControls"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a
                  class="carousel-control-next"
                  href="#carouselExampleControls"
                  role="button"
                  data-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>
          <FullWidthBlock
            py="5"
            my="3"
            className="col-12 d-flex row justify-content-center align-items-center big-block"
          >
            <div className="col-12 col-lg-6 end">
              <div className="d-flex justify-content-start home-title home-title-green my-3 w-100">
                你的基隆
              </div>
              <div className="mr-3">
                您可以依據個人定位在 Google
                地圖中搜尋值得探訪的地區、本地活動、時髦餐廳、推薦活動或知名景點。
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <img src="/pictures/travel/map.png" style={{ width: "100%" }} />
            </div>
          </FullWidthBlock>
          <div className="d-flex row align-items-center justify-content-center big-block">
            <div className="col-12 col-lg-6">
              <div className="d-flex align-items-center justify-content-center home-title home-title-green my-3 w-100">
                天氣
              </div>
              <img
                src="/pictures/travel/weather.png"
                style={{ width: "100%" }}
              />
            </div>
            <div className="col-12 col-lg-6">
              <div className="d-flex align-items-center justify-content-center home-title home-title-green my-3 w-100">
                活動
              </div>
              <img
                src="/pictures/travel/travel-activity.png"
                style={{ width: "100%" }}
              />
            </div>
          </div>
          <div className="d-flex flex-column align-items-center justify-content-center big-block">
            <div className="d-flex align-items-center justify-content-center home-title home-title-green my-3 w-100">
              主題旅遊
            </div>
            <div class="d-flex justify-content-center">
              <ImageText title="主題美食" img="/pictures/travel/main-1.png" />
              <ImageText title="住宿資訊" img="/pictures/travel/main-2.png" />
              <ImageText title="主題景點" img="/pictures/travel/main-3.png" />
              <ImageText title="推薦旅遊" img="/pictures/travel/main-4.png" />
              <ImageText title="觀光公車" img="/pictures/travel/main-5.png" />
            </div>
          </div>
          <div className="d-flex flex-column align-items-center justify-content-center big-block">
            <div className="d-flex align-items-center justify-content-center home-title home-title-green my-3 w-100">
              交通資訊
            </div>
            <div className="d-flex my-3">
              <Circle
                title="即時路況"
                radius="10vw"
                backgroundcolor="#F7F7F7"
                backgroundimage="/pictures/travel/traffic-1.png"
                mx="5"
                width="100%"
              />
              <Circle
                title="公車資訊"
                radius="10vw"
                backgroundcolor="#F7F7F7"
                backgroundimage="/pictures/travel/traffic-2.png"
                mx="5"
                width="100%"
              />
              <Circle
                title="即時公車動態"
                radius="10vw"
                backgroundcolor="#F7F7F7"
                backgroundimage="/pictures/travel/traffic-3.png"
                mx="5"
                width="100%"
              />
              <Circle
                title="停車資訊"
                radius="10vw"
                backgroundcolor="#F7F7F7"
                backgroundimage="/pictures/travel/traffic-4.png"
                mx="5"
                width="100%"
              />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default DiscoverKeelung;
