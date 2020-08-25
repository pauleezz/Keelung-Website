import React, { Component } from "react";

import ImageContent from "../Components/ImageContent.jsx";
import Navbar from "../Components/Navbar.jsx";
import Footer from "../Components/Footer.jsx";
import GrayBlockBid from "../Components/GrayBlockBid.jsx";

class BidInformationDetail extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <ImageContent
          img="/pictures/bid-information/img_bg.png"
          title="招標資訊"
          href={[
            ["首頁", "/", "/"],
            ["政府服務", "/", "/"],
            ["招標資訊", "/"],
          ]}
        />
        <div className="app">
          <div className="d-flex flex-column align-items-center justify-content-center big-block">
            <div
              className="d-flex justify-content-end"
              style={{ width: "85%" }}
            >
              <div className="green-buttons small-shadow">
                <a href="/municipal-information/bid-information-simplify">
                  簡易版
                </a>
              </div>
              <div className="green-buttons small-shadow green-buttons-active">
                <a href="/municipal-information/bid-information-detail">
                  詳細版
                </a>
              </div>
            </div>
            <div
              className="d-flex justify-content-between align-items-center"
              style={{ width: "85%", borderBottom: "solid 4px #DDDDDD" }}
            >
              <div className="d-flex justify-content-start home-title home-title-green my-3">
                招標資訊
              </div>
              <div class="search-container">
                <form>
                  <input type="text" placeholder="輸入關鍵字" />
                  <button type="submit">
                    <i class="fa fa-search"></i>
                  </button>
                </form>
              </div>
            </div>
            <div
              className="d-flex pt-3 px-4"
              style={{ width: "85%", color: "#707070" }}
            >
              <div className="d-flex align-items-center justify-content-center col-3">
                招標時間
              </div>
              <div className="d-flex align-items-center justify-content-center col-9">
                招標內容
              </div>
            </div>

            <GrayBlockBid
              time={["2020 - 08 - 21", "2020 - 08 - 31"]}
              title="108年老舊廁所環境設備改善工程"
              number="109A112"
              content={[
                "一、得標廠商得將押標金轉為履約保證金。",
                "二、投標廠商應確實瞭解採購標案內容，並請詳閱投標須知及有關文件後投標...",
              ]}
              tag={["工程", "#65B017"]}
            />
            <GrayBlockBid
              time={["2020 - 08 - 21", "2020 - 08 - 31"]}
              title="基隆市八斗國民小學日照樓耐震能力補強工程"
              number="109A114"
              content={[
                "一、得標廠商得將押標金轉為履約保證金。",
                "二、投標廠商應確實瞭解採購標案內容，並請詳閱投標須知及有關文件後投標...",
              ]}
              tag={["工程", "#65B017"]}
            />
            <GrayBlockBid
              time={["2020 - 08 - 19", "2020 - 08 - 21"]}
              title="禮堂防水隔熱暨禮堂整修工程"
              number="109A116"
              content={[
                "一、得標廠商得將押標金轉為履約保證金。",
                "二、投標廠商應確實瞭解採購標案內容，並請詳閱投標須知及有關文件後投標...",
              ]}
              tag={["工程", "#65B017"]}
            />
            <GrayBlockBid
              time={["2020 - 08 - 19", "2020 - 08 - 21"]}
              title="109A11瑪陵坑溪水質水量保護區回饋金環境改善工程(單價標)"
              number="109A11"
              content={[
                "一、得標廠商得將押標金轉為履約保證金。",
                "二、投標廠商應確實瞭解採購標案內容，並請詳閱投標須知及有關文件後投標...",
              ]}
              tag={["財務", "#FA990D"]}
            />
            <GrayBlockBid
              time={["2020 - 08 - 20", "2020 - 08 - 26"]}
              title="基隆市建德國小附設幼兒園109年度幼兒園增班工程"
              number="109A115"
              content={[
                "一、得標廠商得將押標金轉為履約保證金。",
                "二、投標廠商應確實瞭解採購標案內容，並請詳閱投標須知及有關文件後投標...",
              ]}
              tag={["工程", "#65B017"]}
            />
            <GrayBlockBid
              time={["2020 - 08 - 19", "2020 - 09 - 02"]}
              title="西定及中和等二里內路面等工程"
              number="109A103"
              content={[
                "一、得標廠商得將押標金轉為履約保證金。",
                "二、投標廠商應確實瞭解採購標案內容，並請詳閱投標須知及有關文件後投標...",
              ]}
              tag={["工程", "#65B017"]}
            />
            <GrayBlockBid
              time={["2020 - 07 - 24", "2020 - 07 - 31"]}
              title="武崙里里民活動中心鋁窗更新工程"
              number="10909"
              content={[
                "一、得標廠商得將押標金轉為履約保證金。",
                "二、投標廠商應確實瞭解採購標案內容，並請詳閱投標須知及有關文件後投標...",
              ]}
              tag={["工程", "#65B017"]}
            />
          </div>

          <Footer />
        </div>
      </div>
    );
  }
}

export default BidInformationDetail;
