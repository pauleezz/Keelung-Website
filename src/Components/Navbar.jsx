import React, { Component } from "react";

import NavbarCategory from "../Components/NavbarCategory.jsx";

class Navbar extends Component {
  render() {
    return (
      <div className="d-flex">
        
      </div>
    );
  }
}

{/* <nav className="navbar navbar-expand-lg navbar-light">
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
      />
      <NavbarCategory
        category="發現基隆"
        categories={["基隆簡介", "歷史沿革", "地理環境"]}
      />
      <NavbarCategory
        category="市府團隊"
        categories={["市長介紹", "副市長介紹", "組織架構", "市政顧問"]}
      />
      <NavbarCategory
        category="基隆服務"
        categories={["基隆簡介", "歷史沿革", "地理環境"]}
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
      />
      <NavbarCategory
        category="機關網站"
        categories={["基隆簡介", "歷史沿革", "地理環境"]}
      />
    </ul>
  </div>
</nav>; */}

export default Navbar;
