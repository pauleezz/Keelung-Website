import React, { Component } from "react";

import NewsList from "../Components/NewsList.jsx";

class News extends Component {
  render() {
    return (
      <div className="big-block d-flex row">
        <div className="col-12 col-lg-6" style={{ display: "inline-block" }}>
          <img src="/pictures/icon-16.png" id="news-down" />
          <div
            id="carouselExampleControls"
            class="carousel slide news-slide news-up"
            data-ride="carousel"
          >
            <ol class="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                class="active"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="1"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="2"
              ></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  class="d-block w-100"
                  src="/pictures/ShowImgashx.png"
                  alt="First slide"
                />
                <div class="carousel-caption d-none d-md-block">
                  <h6>友善動物五部曲!</h6>
                  <p>
                    狗狗森友會22日碧砂漁港熱鬧登場 寵物遊艇趴名額有限先搶先贏!
                  </p>
                </div>
              </div>
              <div class="carousel-item">
                <img
                  class="d-block w-100"
                  src="/pictures/ShowImgashx.png"
                  alt="Second slide"
                />
                <div class="carousel-caption d-none d-md-block">
                  <h6>友善動物五部曲!</h6>
                  <p>
                    狗狗森友會22日碧砂漁港熱鬧登場 寵物遊艇趴名額有限先搶先贏!
                  </p>
                </div>
              </div>
              <div class="carousel-item">
                <img
                  class="d-block w-100"
                  src="/pictures/ShowImgashx.png"
                  alt="Second slide"
                />
                <div class="carousel-caption d-none d-md-block">
                  <h6>友善動物五部曲!</h6>
                  <p>
                    狗狗森友會22日碧砂漁港熱鬧登場 寵物遊艇趴名額有限先搶先贏!
                  </p>
                </div>
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

        <div className="col-12 col-lg-6">
          <div className="d-flex flex-column align-items-end justify-content-center home-title mb-3">
            <span className="home-title-gray">NEWS</span>
            <span className="home-title-green">訊息快報</span>
          </div>
          <div className="d-flex flex-column align-items-center">
            <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
              <li class="nav-item">
                <a
                  class="nav-link active"
                  id="pills-home-tab"
                  data-toggle="pill"
                  href="#pills-home"
                  role="tab"
                  aria-controls="pills-home"
                  aria-selected="true"
                >
                  最新公告
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  id="pills-profile-tab"
                  data-toggle="pill"
                  href="#pills-profile"
                  role="tab"
                  aria-controls="pills-profile"
                  aria-selected="false"
                >
                  活動訊息
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  id="pills-contact-tab"
                  data-toggle="pill"
                  href="#pills-contact"
                  role="tab"
                  aria-controls="pills-contact"
                  aria-selected="false"
                >
                  市政新聞
                </a>
              </li>
            </ul>
            <div class="tab-content" id="pills-tabContent">
              <div
                class="tab-pane fade show active"
                id="pills-home"
                role="tabpanel"
                aria-labelledby="pills-home-tab"
              >
                <ul>
                  <NewsList
                    time="2020-08-07"
                    title="各縣市殯葬類公告(1090723-1090731)"
                    tag={["民政處", "#FA990D"]}
                    number="1"
                    color="#65B017"
                  />

                  <li>實價資訊輕鬆查APP，帶您隨時掌握市場行情！</li>
                  <li>產業發展處公開甄選臨時人員甄選結果</li>
                  <li>基隆市中小企業圓夢貸款</li>
                </ul>
              </div>
              <div
                class="tab-pane fade"
                id="pills-profile"
                role="tabpanel"
                aria-labelledby="pills-profile-tab"
              >
                <ul>
                  <li>慎終追遠緬懷祖先~南榮公墓秋祭祭典</li>
                  <li>
                    109年8月11日(星期二)辦理陸軍第0116梯次常
                    備兵役軍事訓練役男護(輸)送入營及交接報到
                  </li>
                  <li>
                    109年8月19日(星期三)辦理海軍艦艇兵第023梯
                    次常備兵役軍事訓練役男護(輸)送入營及交接報到
                  </li>
                </ul>
              </div>
              <div
                class="tab-pane fade"
                id="pills-contact"
                role="tabpanel"
                aria-labelledby="pills-contact-tab"
              >
                <ul>
                  <li>『爸』氣十足親子活動 林右昌與大家歡度「88節」</li>
                  <li>仁壽里都市降溫綠農園 降溫節能成效高</li>
                  <li>表揚資深護理人員 林右昌肯定護理人員辛勤努力</li>
                  <li>
                    主持全市模範父親及好人好事代表表揚大會
                    林右昌盼讓社會更加喜樂幸福
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default News;
