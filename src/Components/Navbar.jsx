import React, { Component } from "react";

import NavbarCategory from "../Components/NavbarCategory.jsx";
import NavbarCategoryDetail from "../Components/NavbarCategoryDetail.jsx";

class Navbar extends Component {
  render() {
    return (
      <div className="d-flex nav-bar">
        <div className="d-flex mx-3 col-3">
          <a href="/" className="d-flex align-items-center">
            <img
              src="/pictures/keelung-logo-02.png"
              style={{ width: "50px", height: "50px" }}
            />
            <div className="d-flex flex-column ml-2">
              <span className="nav-bar-logo">基隆市政府</span>
              <span className="nav-bar-logo-en">Keelung City Government</span>
            </div>
          </a>
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
                  categories={[
                    ["最新公告", "/news/latest"],
                    ["活動訊息", "/news/activity"],
                    ["市政新聞", "/news/municipal-news"],
                  ]}
                  colnum="col-4"
                />
                <NavbarCategory
                  category="認識基隆"
                  categories={[
                    ["基隆簡介", "/know-keelung/keelung-intro"],
                    ["歷史沿革", "/know-keelung/history"],
                    ["地理環境", "/know-keelung/geography"],
                    ["發現基隆", "/know-keelung/discover-keelung"],
                  ]}
                  colnum="col-3"
                />
                <NavbarCategory
                  category="市府團隊"
                  categories={[
                    ["市長介紹", "/about/mayor"],
                    ["副市長介紹", "/about/vice-mayor"],
                    ["組織架構", "/about/organization"],
                    ["市政顧問", "/about/administration"],
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
                    [
                      "徵才資訊",
                      "/municipal-information/recruitment-information-simplify",
                    ],
                    [
                      "招標資訊",
                      "/municipal-information/bid-information-simplify",
                    ],
                    ["施政計畫", "/municipal-information/plan"],
                    ["市政統計", "/municipal-information/municipal-statistic"],
                    ["市政公開資訊", "/municipal-information/public-info"],
                    ["常見問題", "/municipal-information/FAQ"],
                  ]}
                  colnum="col-4"
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
          <div className="d-flex align-items-center justify-content-center nav-bar-green w-50">
            <div className="d-flex align-items-center justify-content-center">
              <img src="/pictures/search-02.png" style={{ width: "20px" }} />
              ｜<img src="/pictures/chinese-02.png" style={{ width: "20px" }} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
