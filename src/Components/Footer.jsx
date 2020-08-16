import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <>
        <div className="footer">
          <div className="d-flex footer-content w-100">
            <div className="d-flex flex-column align-items-start col-3">
              <div className="d-flex flex-column align-items-center font-weight-bold mb-3">
                <span style={{ fontSize: "30px" }}>基隆市政府</span>
                <span style={{ fontSize: "11px" }}>
                  Keelung City Government
                </span>
              </div>
              <div style={{ fontSize: "13px" }}>
                <div className="mb-3">(20201)基隆市中正區義一路1號</div>
                <div className="mb-3">
                  市府總機 (02)2420-1122
                  <br /> 市民熱線 1999(24小時服務專線)
                  <br /> 1999外縣市請撥(02)2192-0917
                </div>
                <div className="mb-3">服務時間：08:00-12:00；13:30-17:30</div>
                <div className="d-flex justify-content-around my-3">
                  <button
                    style={{
                      width: "110px",
                      height: "45px",
                      background: "#569A3F",
                      fontSize: "13px",
                      color: "#FFFFFF",
                    }}
                  >
                    本府位置圖
                  </button>
                  <button
                    style={{
                      width: "110px",
                      height: "45px",
                      background: "#F08922",
                      fontSize: "13px",
                      color: "#FFFFFF",
                    }}
                  >
                    使用意見調查
                  </button>
                </div>
                <div>
                  更新日期 109 - 08 - 15
                  <br /> 瀏覽人次 330,934,776
                </div>
              </div>
            </div>
            <div className="d-flex col-3">
              <div className="d-flex flex-column w-50">
                <div className="footer-block">
                  <span className="footer-title mb-3">訊息快報</span>
                  <ul className="footer-list">
                    <li>最新公告</li>
                    <li>活動訊息</li>
                    <li>市政新聞</li>
                  </ul>
                </div>
                <div className="footer-block">
                  <span className="footer-title mb-3">發現基隆</span>
                  <ul className="footer-list">
                    <li>歷史沿革</li>
                    <li>基隆簡介</li>
                    <li>地理環境</li>
                  </ul>
                </div>
              </div>
              <div className="d-flex flex-column w-50">
                <div className="footer-block">
                  <span className="footer-title mb-3">市府團隊</span>
                  <ul className="footer-list">
                    <li>市長介紹</li>
                    <li>副市長介紹</li>
                    <li>組織架構</li>
                    <li>市政顧問</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="d-flex flex-column col-3">
              <div className="footer-block">
                <span className="footer-title mb-3">基隆服務</span>
                <div className="d-flex">
                  <div className="w-50">
                    <span className="footer-subtitle mb-3">主題服務</span>
                    <ul className="footer-list">
                      <li>醫療保健</li>
                      <li>社會福利</li>
                      <li>觀光旅遊</li>
                      <li>市民快線</li>
                      <li>勞工就業</li>
                      <li>教育學習</li>
                      <li>文化休閒</li>
                      <li>交通服務</li>
                      <li>戶籍身份</li>
                      <li>買屋賣屋</li>
                      <li>法律服務</li>
                      <li>環境能源</li>
                    </ul>
                  </div>
                  <div className="w-50">
                    <span className="footer-subtitle mb-3">分眾服務</span>
                    <ul className="footer-list">
                      <li>基隆市民</li>
                      <li>觀光旅遊</li>
                      <li>非基隆市民</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="footer-block">
                <span className="footer-title mb-3">市政資訊</span>
                <ul className="footer-list">
                  <li>招標資訊</li>
                  <li>徵才資訊</li>
                  <li>施政計畫</li>
                  <li>市政統計</li>
                  <li>政府公開資訊</li>
                  <li>常見問題</li>
                </ul>
              </div>
            </div>
            <div className="d-flex flex-column col-3">
              <div className="footer-block">
                <span className="footer-title mb-3">機關網站</span>
                <div className="d-flex">
                  <div className="w-50">
                    <span className="footer-subtitle mb-3">本府各處網站</span>
                    <ul className="footer-list">
                      <li>社會處</li>
                      <li>地政處</li>
                      <li>交通處</li>
                      <li>產業發展處</li>
                      <li>綜合發展處</li>
                      <li>政風處</li>
                      <li>主計處</li>
                      <li>人事處</li>
                      <li>都市發展處</li>
                      <li>工務處</li>
                      <li>教育處</li>
                      <li>財政處</li>
                      <li>民政處</li>
                      <li>觀光及城市行銷處</li>
                    </ul>
                    <span className="footer-subtitle mb-3">區公所網站</span>
                    <ul className="footer-list">
                      <li>七堵區公所</li>
                      <li>暖暖區公所</li>
                      <li>中山區公所</li>
                      <li>仁愛區公所</li>
                      <li>信義區公所</li>
                      <li>中正區公所</li>
                      <li>安樂區公所</li>
                    </ul>
                  </div>
                  <div className="w-50">
                    <span className="footer-subtitle mb-3">地政事務所網站</span>
                    <ul className="footer-list">
                      <li>基隆市地政事務所</li>
                    </ul>
                    <span className="footer-subtitle mb-3">戶政事務所網站</span>
                    <ul className="footer-list">
                      <li>七堵戶政事務所</li>
                      <li>安樂戶政事務所</li>
                      <li>中正戶政事務所</li>
                    </ul>
                    <span className="footer-subtitle mb-3">附屬機關網站</span>
                    <ul className="footer-list">
                      <li>基隆家庭教育中心</li>
                      <li>動物保護防疫所</li>
                      <li>文化局</li>
                      <li>市立體育場</li>
                      <li>稅務局</li>
                      <li>市立仁愛之家</li>
                      <li>市立殯葬管理所</li>
                      <li>市立醫院</li>
                      <li>公車處</li>
                      <li>環保局</li>
                      <li>衛生局</li>
                      <li>消防局</li>
                      <li>警察局</li>
                    </ul>
                    <span className="footer-subtitle mb-3">單位通訊</span>
                    <span className="footer-subtitle mb-3">機關業務介紹</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <section className="copyright">
            © 2020 基隆市政府 版權所有 資訊安全政策 | 隱私權政策 | 資料開放宣告
            建議使用 Chrome 或 IE9 以上版本瀏覽
          </section>
        </div>
      </>
    );
  }
}

export default Footer;
