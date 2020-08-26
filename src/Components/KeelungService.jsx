import React, { Component } from 'react';
import "../CSS/Home.css"
import KeelungServiceIcon from "../Components/KeelungServiceIcon.jsx";

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
                    />
                    <KeelungServiceIcon
                      icon_img="icon-02.png"
                      text="社會福利"
                      href="/keelung-service/medical"
                      colnum = "col-3"
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
                    />
                    <KeelungServiceIcon
                      icon_img="icon-05.png"
                      text="勞工就業"
                      href="/keelung-service/medical"
                      colnum = "col-3"
                    />
                    <KeelungServiceIcon
                      icon_img="icon-06.png"
                      text="教育學習"
                      href="/keelung-service/medical"
                      colnum = "col-3"
                    />
                    <KeelungServiceIcon
                      icon_img="icon-07.png"
                      text="文化休閒"
                      href="/keelung-service/medical"
                      colnum = "col-3"
                    />
                    <KeelungServiceIcon
                      icon_img="icon-08.png"
                      text="交通服務"
                      href="/keelung-service/medical"
                      colnum = "col-3"
                    />
                    <KeelungServiceIcon
                      icon_img="icon-09.png"
                      text="戶籍身份"
                      href="/keelung-service/medical"
                      colnum = "col-3"
                    />
                    <KeelungServiceIcon
                      icon_img="icon-10.png"
                      text="買屋賣屋"
                      href="/keelung-service/medical"
                      colnum = "col-3"
                    />
                    <KeelungServiceIcon
                      icon_img="icon-11.png"
                      text="法律服務"
                      href="/keelung-service/medical"
                      colnum = "col-3"
                    />
                    <KeelungServiceIcon
                      icon_img="icon-12.png"
                      text="環境保護"
                      href="/keelung-service/medical"
                      colnum = "col-3"
                    />
                  </div>
                  <div
                    class="tab-pane fade row w-75"
                    id="pills-crowd"
                    role="tabpanel"
                    aria-labelledby="pills-crowd-tab"
                  >
                    <KeelungServiceIcon
                      icon_img="icon-13.png"
                      text="基隆市民"
                      href="/keelung-service/medical"
                      colnum = "col-4"
                    />
                    <KeelungServiceIcon
                      icon_img="icon-14.png"
                      text="旅遊觀光"
                      href="/keelung-service/medical"
                      colnum = "col-4"
                    />
                    <KeelungServiceIcon
                      icon_img="icon-15.png"
                      text="非基隆市民"
                      href="/keelung-service/medical"
                      colnum = "col-4"
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

{/* <div className="d-flex align-items-center justify-content-center">
              <div className="col-12">
                <ul
                  class="nav nav-pills d-flex align-items-center justify-content-center mb-3 "
                  id="pills-tab"
                  role="tablist"
                >
                  <li class="nav-item">
                    <a
                      class="nav-link active switch_left"
                      //className="switch_left"
                      id="pills-topic-tab"
                      data-toggle="pill"
                      href="#pills-topic"
                      role="tab"
                      aria-controls="pills-topic"
                      aria-selected="true"
                    >
                      主題服務
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link switch_right"
                      //className="switch_right"
                      id="pills-crowd-tab"
                      data-toggle="pill"
                      href="#pills-crowd"
                      role="tab"
                      aria-controls="pills-crowd"
                      aria-selected="false"
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
                    />
                    <KeelungServiceIcon
                      icon_img="icon-02.png"
                      text="社會福利"
                    />
                    <KeelungServiceIcon
                      icon_img="icon-03.png"
                      text="觀光旅遊"
                    />
                    <KeelungServiceIcon
                      icon_img="icon-04.png"
                      text="市民快線"
                    />
                    <KeelungServiceIcon
                      icon_img="icon-05.png"
                      text="勞工就業"
                    />
                    <KeelungServiceIcon
                      icon_img="icon-06.png"
                      text="教育學習"
                    />
                    <KeelungServiceIcon
                      icon_img="icon-07.png"
                      text="文化休閒"
                    />
                    <KeelungServiceIcon
                      icon_img="icon-08.png"
                      text="交通服務"
                    />
                    <KeelungServiceIcon
                      icon_img="icon-09.png"
                      text="戶籍身份"
                    />
                    <KeelungServiceIcon
                      icon_img="icon-10.png"
                      text="買屋賣屋"
                    />
                    <KeelungServiceIcon
                      icon_img="icon-11.png"
                      text="法律服務"
                    />
                    <KeelungServiceIcon
                      icon_img="icon-12.png"
                      text="環境保護"
                    />
                  </div>
                  <div
                    class="tab-pane fade row w-75"
                    id="pills-crowd"
                    role="tabpanel"
                    aria-labelledby="pills-crowd-tab"
                  >
                    <KeelungServiceIcon
                      icon_img="icon-13.png"
                      text="基隆市民"
                    />
                    <KeelungServiceIcon
                      icon_img="icon-14.png"
                      text="旅遊觀光"
                    />
                    <KeelungServiceIcon
                      icon_img="icon-15.png"
                      text="非基隆市民"
                    />
                  </div>
                </div>
              </div>
            </div> */}