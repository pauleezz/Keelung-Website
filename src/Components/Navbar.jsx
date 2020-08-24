import React, { Component } from "react";

import NavbarCategory from "../Components/NavbarCategory.jsx";
import NavbarCategoryDetail from "../Components/NavbarCategoryDetail.jsx";

class Navbar extends Component {
  render() {
    return (
      <div className="d-flex nav-bar">
        <div className="d-flex align-items-center mx-3 col-3">
          <img
            src="/pictures/keelung-logo-02.png"
            style={{ width: "50px", height: "50px" }}
          />
          <div className="d-flex flex-column ml-2">
            <span className="nav-bar-logo">基隆市政府</span>
            <span className="nav-bar-logo-en">Keelung City Government</span>
          </div>
        </div>
        <div className="col-7">
          <div className="d-flex justify-content-end nav-bar-gray my-1">
            <a href="#">
              <div className="mx-2 nav-bar-gray">網站導覽</div>
            </a>

            <a href="#">
              <div className="mx-2 nav-bar-gray">RSS訂閱</div>
            </a>

            <a href="#">
              <div className="mx-2 nav-bar-gray">本日熱門</div>
            </a>

            <a href="#">
              <div className="mx-2 nav-bar-gray">ENGLISH</div>
            </a>
          </div>

          <nav className="navbar navbar-expand-lg navbar-light">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse NavbarCategory"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav w-100 justify-content-around">
                <NavbarCategory
                  category="訊息快報"
                  categories={["最新公告", "活動訊息", "市政新聞"]}
                  colnum="col-4"
                />
                <NavbarCategory
                  category="認識基隆"
                  categories={["基隆簡介", "歷史沿革", "地理環境", "發現基隆"]}
                  colnum="col-3"
                />
                <NavbarCategory
                  category="市府團隊"
                  categories={[
                    "市長介紹",
                    "副市長介紹",
                    "組織架構",
                    "市政顧問",
                  ]}
                  colnum=""
                />
                {/* <NavbarCategory
                  category="基隆服務"
                  categories={["基隆簡介", "歷史沿革", "地理環境"]}
                /> */}
                <NavbarCategoryDetail
                  category="基隆服務"
                  categories={[
                    [
                      "主題服務",
                      [
                        "醫療保健",
                        "文化休閒",
                        "社會福利",
                        "交通服務",
                        "觀光旅遊",
                        "戶籍身份",
                        "市民快線",
                        "買屋賣屋",
                        "勞工就業",
                        "法律服務",
                        "教育學習",
                        "環境能源",
                      ],
                      ["col-6"],
                    ],
                    [
                      "分眾服務",
                      ["基隆市民", "觀光旅遊", "非基隆市民"],
                      ["col-12"],
                    ],
                  ]}
                />
                <NavbarCategory
                  category="市政資訊"
                  categories={[
                    "徵才資訊",
                    "招標資訊",
                    "施政計畫",
                    "市政統計",
                    "市政公開資訊",
                    "常見問題",
                  ]}
                  colnum=""
                />
                <NavbarCategoryDetail
                  category="機關網站"
                  categories={[
                    [
                      "本府各處網站",
                      [
                        "社會處",
                        "地政處",
                        "交通處",
                        "產業發展處",
                        "綜合發展處",
                        "政風處",
                        "主計處",
                      ],
                      ["col-12"],
                    ],
                    [
                      "附屬機關網站",
                      [
                        "基隆家庭教育中心",
                        "動物保護防疫所",
                        "文化局",
                        "市立體育場",
                        "稅務局",
                        "市立仁愛之家",
                        "市立殯葬管理所",
                        "市立醫院",
                        "公車處",
                        "環保局",
                        "衛生局",
                        "消防局",
                        "警察局",
                      ],
                      ["col-12"],
                    ],
                  ]}
                />
                {/* <NavbarCategory
                  category="機關網站"
                  categories={["基隆簡介", "歷史沿革", "地理環境"]}
                  colnum=""
                /> */}
              </ul>
            </div>
          </nav>
        </div>
        <div className="d-flex col-2">
          <div className="d-flex align-items-center justify-content-center nav-bar-green">
            <div className="d-flex align-items-center justify-content-center">
              <img src="/pictures/search-02.png" style={{ width: "20%" }} />
              ｜中
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
