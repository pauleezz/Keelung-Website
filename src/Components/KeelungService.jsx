import React, { Component } from 'react';
import "../CSS/Home.css"
import KeelungServiceIcon from "../Components/KeelungServiceIcon.jsx";
import CrowdIcon from "../Components/CrowdIcon.jsx";
class KeelungService extends Component {
    render() {
        return (
          <div
            className="d-flex flex-column justify-content-center big-block"
            id="keelung-service"
          >
            <div className="d-flex flex-column align-items-center justify-content-center home-title mb-4">
              <span className="home-title-gray">KEELUNG SERVICE</span>
              <span className="home-title-green">基隆服務</span>
            </div>
            <div className="d-flex align-items-center justify-content-center">
              <div className="col-12">
                <ul
                  class="nav nav-pills d-flex align-items-center justify-content-center mb-3 "
                  id="pills-tab"
                  role="tablist"
                >
                  <li class="nav-item">
                    <a
                      class="nav-link active d-flex justify-content-center normal"
                      id="pills-topic-tab"
                      data-toggle="pill"
                      href="#pills-topic"
                      role="tab"
                      aria-controls="pills-topic"
                      aria-selected="true"
                      style={{ width: "200px" }}
                    >
                      主題服務
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link d-flex justify-content-center normal"
                      id="pills-crowd-tab"
                      data-toggle="pill"
                      href="#pills-crowd"
                      role="tab"
                      aria-controls="pills-crowd"
                      aria-selected="false"
                      style={{ width: "200px" }}
                    >
                      分眾服務
                    </a>
                  </li>
                </ul>
                <div
                  class="d-flex align-items-center justify-content-center tab-content"
                  id="pills-tabContent"
                >
                  <div
                    class="d-flex tab-pane fade show active row w-75"
                    id="pills-topic"
                    role="tabpanel"
                    aria-labelledby="pills-topic-tab"
                  >
                    <KeelungServiceIcon
                      icon_img="icon-01.png"
                      text="醫療保健"
                      href="/keelung-service/medical"
                      colnum = "col-3"
                      hint1="Covid專區"
                      hint2="防疫政策"
                      hint3="醫療補助"
                      hint4="政策宣導"
                    />
                    <KeelungServiceIcon
                      icon_img="icon-02.png"
                      text="社會福利"
                      href="/keelung-service/medical"
                      colnum = "col-3"
                      hint1="長照專區"
                      hint2="生育津貼"
                      hint3="社會關懷"
                      hint4="急難救助"
                    />
                    <KeelungServiceIcon
                      icon_img="icon-03.png"
                      text="觀光旅遊"
                      href="/keelung-service/medical"
                      colnum = "col-3"
                      hint1="主題美食"
                      hint2="主題景點"
                      hint3="住宿資訊"
                      hint4="觀光公車"
                    />
                    <KeelungServiceIcon
                      icon_img="icon-04.png"
                      text="市民快線"
                      href="/keelung-service/medical"
                      colnum = "col-3"
                      hint1="線上陳情"
                      hint2="訴願審議"
                      hint3="1999服務"
                      hint4="常見問答"
                    />
                    <KeelungServiceIcon
                      icon_img="icon-05.png"
                      text="勞工就業"
                      href="/keelung-service/medical"
                      colnum = "col-3"
                      hint1="職場權益"
                      hint2="退休福利"
                      hint3="徵才資訊"
                      hint4="勞工權益"
                    />
                    <KeelungServiceIcon
                      icon_img="icon-06.png"
                      text="教育學習"
                      href="/keelung-service/medical"
                      colnum = "col-3"
                      hint1="幼兒教育"
                      hint2="國小"
                      hint3="國中"
                      hint4="高中"
                    />
                    <KeelungServiceIcon
                      icon_img="icon-07.png"
                      text="文化休閒"
                      href="/keelung-service/medical"
                      colnum = "col-3"
                      hint1="藝文活動"
                      hint2="體育賽事"
                      hint3="運動場館"
                      hint4="圖書館藏"
                    />
                    <KeelungServiceIcon
                      icon_img="icon-08.png"
                      text="交通服務"
                      href="/keelung-service/medical"
                      colnum = "col-3"
                      hint1="監理服務"
                      hint2="路平專案"
                      hint3="即時路況"
                      hint4="罰鍰規費"
                    />
                    <KeelungServiceIcon
                      icon_img="icon-09.png"
                      text="戶籍身份"
                      href="/keelung-service/medical"
                      colnum = "col-3"
                      hint1="戶籍登記"
                      hint2="結婚登記"
                      hint3="身分證換發"
                      hint4="門牌檢索"
                    />
                    <KeelungServiceIcon
                      icon_img="icon-10.png"
                      text="買屋賣屋"
                      href="/keelung-service/medical"
                      colnum = "col-3"
                      hint1="住宅補貼"
                      hint2="價格查詢"
                      hint3="土地房屋稅務"
                      hint4="地政查詢"
                    />
                    <KeelungServiceIcon
                      icon_img="icon-11.png"
                      text="法律服務"
                      href="/keelung-service/medical"
                      colnum = "col-3"
                      hint1="法律諮詢"
                      hint2="法規查詢"
                      hint3="法規審議"
                    />
                    <KeelungServiceIcon
                      icon_img="icon-12.png"
                      text="環境保護"
                      href="/keelung-service/medical"
                      colnum = "col-3"
                      hint1="環保政策"
                      hint2="垃圾清理"
                      hint3="水情水利"
                      hint4="能源補助"
                    />
                  </div>
                  <div
                    class="tab-pane fade row w-75"
                    id="pills-crowd"
                    role="tabpanel"
                    aria-labelledby="pills-crowd-tab"
                  >
                    <CrowdIcon
                      icon_img="icon-13.png"
                      text="基隆市民"
                      href="/keelung-service/medical"
                      colnum = "col-4"
                      hint1="徵才資訊"
                      hint2="企業資訊"
                      hint3="房屋稅務"
                      hint4="交通服務"
                    />
                    <CrowdIcon
                      icon_img="icon-14.png"
                      text="旅遊觀光"
                      href="/keelung-service/medical"
                      colnum = "col-4"
                      hint1="魅力基隆"
                      hint2="主題旅遊"
                      hint3="交通資訊"
                      hint4="近期活動"
                    />
                    <CrowdIcon
                      icon_img="icon-15.png"
                      text="非基隆市民"
                      href="/keelung-service/medical"
                      colnum = "col-4"
                      hint1="徵才資訊"
                      hint2="企業資訊"
                      hint3="房屋稅務"
                      hint4="交通服務"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* <div class="d-flex flex-column align-items-center justify-content-center">
              <nav className="w-100">
                <div
                  class="d-flex justify-content-center align-items-center nav nav-tabs"
                  id="nav-tab"
                  role="tablist"
                >
                  <a
                    class="nav-item nav-link active d-flex justify-content-center normal"
                    id="nav-home-tab"
                    data-toggle="tab"
                    href="#nav-home"
                    role="tab"
                    aria-controls="nav-home"
                    aria-selected="true"
                    style={{ width: "200px" }}
                  >
                    主題服務
                  </a>
                  <a
                    class="nav-item nav-link d-flex justify-content-center normal"
                    id="nav-profile-tab"
                    data-toggle="tab"
                    href="#nav-profile"
                    role="tab"
                    aria-controls="nav-profile"
                    aria-selected="false"
                    style={{ width: "200px" }}
                  >
                    分眾服務
                  </a>
                </div>
              </nav>
              <div class="tab-content" id="nav-tabContent">
                <div
                  class="d-flex align items-center justify-content-center row tab-pane fade show active my-5"
                  id="nav-home"
                  role="tabpanel"
                  aria-labelledby="nav-home-tab"
                >
                  <KeelungServiceIcon
                    icon_img="icon-01.png"
                    text="醫療保健"
                    href="/keelung-service/medical"
                    colnum="col-3"
                  />
                  <KeelungServiceIcon
                    icon_img="icon-02.png"
                    text="社會福利"
                    href="/keelung-service/medical"
                    colnum="col-3"
                  />
                  <KeelungServiceIcon
                    icon_img="icon-03.png"
                    text="觀光旅遊"
                    href="/keelung-service/medical"
                    colnum="col-3"
                  />
                  <KeelungServiceIcon
                    icon_img="icon-04.png"
                    text="市民快線"
                    href="/keelung-service/medical"
                    colnum="col-3"
                  />
                  <KeelungServiceIcon
                    icon_img="icon-05.png"
                    text="勞工就業"
                    href="/keelung-service/medical"
                    colnum="col-3"
                  />
                  <KeelungServiceIcon
                    icon_img="icon-06.png"
                    text="教育學習"
                    href="/keelung-service/medical"
                    colnum="col-3"
                  />
                  <KeelungServiceIcon
                    icon_img="icon-07.png"
                    text="文化休閒"
                    href="/keelung-service/medical"
                    colnum="col-3"
                  />
                  <KeelungServiceIcon
                    icon_img="icon-08.png"
                    text="交通服務"
                    href="/keelung-service/medical"
                    colnum="col-3"
                  />
                  <KeelungServiceIcon
                    icon_img="icon-09.png"
                    text="戶籍身份"
                    href="/keelung-service/medical"
                    colnum="col-3"
                  />
                  <KeelungServiceIcon
                    icon_img="icon-10.png"
                    text="買屋賣屋"
                    href="/keelung-service/medical"
                    colnum="col-3"
                  />
                  <KeelungServiceIcon
                    icon_img="icon-11.png"
                    text="法律服務"
                    href="/keelung-service/medical"
                    colnum="col-3"
                  />
                  <KeelungServiceIcon
                    icon_img="icon-12.png"
                    text="環境保護"
                    href="/keelung-service/medical"
                    colnum="col-3"
                  />
                </div>
                <div
                  class="d-flex tab-pane fade"
                  id="nav-profile"
                  role="tabpanel"
                  aria-labelledby="nav-profile-tab"
                >
                  <KeelungServiceIcon
                    icon_img="icon-13.png"
                    text="基隆市民"
                    href="/keelung-service/medical"
                    colnum="col-4"
                  />
                  <KeelungServiceIcon
                    icon_img="icon-14.png"
                    text="旅遊觀光"
                    href="/keelung-service/medical"
                    colnum="col-4"
                  />
                  <KeelungServiceIcon
                    icon_img="icon-15.png"
                    text="非基隆市民"
                    href="/keelung-service/medical"
                    colnum="col-4"
                  />
                </div>
              </div>
            </div> */}
          </div>
        );
    }
}

export default KeelungService;