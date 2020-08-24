import React, { Component } from "react";

import NewsList from "../Components/NewsList.jsx";

class News extends Component {
  render() {
    return (
      <div className="big-block d-flex row">
        <div className="d-flex align-items-center justify-content-center col-12 col-lg-5">
          <img
            class="d-block"
            src="/pictures/ShowImgashx.png"
            alt="First slide"
            style={{width: "80%"}}
          />
        </div>

        <div className="col-12 col-lg-7">
          <div className="d-flex flex-column align-items-end justify-content-center home-title mb-3">
            <span className="home-title-gray">NEWS</span>
            <span className="home-title-green">訊息快報</span>
          </div>
          <div
            className="d-flex flex-column align-items-center"
            style={{ height: "350px" }}
          >
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
                <NewsList
                  time="2020-08-07"
                  title="各縣市殯葬類公告(1090723-1090731)"
                  tag={["民政處", "#FA990D"]}
                  number="1"
                  color="#65B017"
                />
                <NewsList
                  time="2020-08-05"
                  title="實價資訊輕鬆查APP，帶您隨時掌握市場行情！"
                  tag={["地政處", "#6849A4"]}
                  number="２"
                  color="#65B017"
                />
                <NewsList
                  time="2020-08-03"
                  title="產業發展處公開甄選臨時人員甄選結果"
                  tag={["產業發展處", "#569A3F"]}
                  number="３"
                  color="#65B017"
                />
                <NewsList
                  time="2020-07-31"
                  title="基隆市中小企業圓夢貸款"
                  tag={["產業發展處", "#569A3F"]}
                  number="４"
                  color="#65B017"
                />
              </div>
              <div
                class="tab-pane fade"
                id="pills-profile"
                role="tabpanel"
                aria-labelledby="pills-profile-tab"
              >
                <NewsList
                  time="2020-08-07"
                  title="慎終追遠緬懷祖先~南榮公墓秋祭祭典"
                  tag={["產業發展處", "#F08922"]}
                  number="1"
                  color="#F08922"
                />
                <NewsList
                  time="2020-07-21"
                  title="109年8月11日(星期二)辦理陸軍第0116梯次常
                  備兵役軍事訓練役男護(輸)送入營及交接報到"
                  tag={["產業發展處", "#F08922"]}
                  number="2"
                  color="#F08922"
                />
                <NewsList
                  time="2020-07-21"
                  title="109年8月19日(星期三)辦理海軍艦艇兵第023梯
                  次常備兵役軍事訓練役男護(輸)送入營及交接報到"
                  tag={["產業發展處", "#F08922"]}
                  number="3"
                  color="#F08922"
                />
              </div>
              <div
                class="tab-pane fade"
                id="pills-contact"
                role="tabpanel"
                aria-labelledby="pills-contact-tab"
              >
                <NewsList
                  time="2020-08-08"
                  title="『爸』氣十足親子活動 林右昌與大家歡度「88節」"
                  tag={["", "#6849A4"]}
                  number="1"
                  color="#6849A4"
                />
                <NewsList
                  time="2020-08-07"
                  title="仁壽里都市降溫綠農園 降溫節能成效高"
                  tag={["", "#6849A4"]}
                  number="2"
                  color="#6849A4"
                />
                <NewsList
                  time="2020-08-07"
                  title="表揚資深護理人員 林右昌肯定護理人員辛勤努力"
                  tag={["", "#6849A4"]}
                  number="3"
                  color="#6849A4"
                />
                <NewsList
                  time="2020-08-07"
                  title="主持全市模範父親及好人好事代表表揚大會
                  林右昌盼讓社會更加喜樂幸福"
                  tag={["", "#6849A4"]}
                  number="4"
                  color="#6849A4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default News;
