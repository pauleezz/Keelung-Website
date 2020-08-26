import React, { Component } from "react";
import "../CSS/Footer.css";

class Footer extends Component {
  render() {
    return (
      <>
        <div className="footer">
          <div className="d-flex footer-content row w-100">
            <div className="d-flex flex-column align-items-start col-12 col-xl-3 col-md-6">
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
                    <a href="https://www.klcg.gov.tw/tw/Default/GovMap.aspx">
                      本府位置圖
                    </a>
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
                    <a href="https://goo.gl/forms/GI8YtQcBdHNM16k52">
                      使用意見調查
                    </a>
                  </button>
                </div>
                <div className="footer-list">
                  更新日期 109 - 08 - 15
                  <br /> 瀏覽人次 330,934,776
                </div>
                <div class="d-flex mt-5">
                  <img
                    src="/pictures/keelung-resident/contact-07.png"
                    className="col-3"
                  />
                  <img
                    src="/pictures/keelung-resident/contact-08.png"
                    className="col-3"
                  />
                  <img
                    src="/pictures/keelung-resident/contact-09.png"
                    className="col-3"
                  />
                </div>
              </div>
            </div>
            <div className="d-flex col-12 col-xl-3 col-md-6">
              <div className="d-flex flex-column w-50">
                <div className="footer-block">
                  <span className="footer-title mb-3">訊息快報</span>
                  <ul className="footer-list">
                    <li>
                      <a href="/news/latest">最新公告</a>
                    </li>
                    <li>
                      <a href="/news/activity">活動訊息</a>
                    </li>
                    <li>
                      <a href="/news/municipal-news">市政新聞</a>
                    </li>
                  </ul>
                </div>
                <div className="footer-block">
                  <span className="footer-title mb-3">發現基隆</span>
                  <ul className="footer-list">
                    <li>
                      <a href="/know-keelung/history">歷史沿革</a>
                    </li>
                    <li>
                      <a href="/know-keelung/keelung-intro">基隆簡介</a>
                    </li>
                    <li>
                      <a href="/know-keelung/geography">地理環境</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="d-flex flex-column w-50">
                <div className="footer-block">
                  <span className="footer-title mb-3">市府團隊</span>
                  <ul className="footer-list">
                    <li>
                      <a href="/about/mayor">市長介紹</a>
                    </li>
                    <li>
                      <a href="/about/vice-mayor">副市長介紹</a>
                    </li>
                    <li>
                      <a href="/about/organization">組織架構</a>
                    </li>
                    <li>
                      <a href="/about/administration">市政顧問</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="d-flex flex-column col-12 col-xl-3 col-md-6">
              <div className="footer-block">
                <span className="footer-title mb-3">基隆服務</span>
                <div className="d-flex">
                  <div className="w-50">
                    <span className="footer-subtitle mb-3">主題服務</span>
                    <ul className="footer-list">
                      <li>
                        <a href="/keelung-service/medical">醫療保健</a>
                      </li>
                      <li>
                        <a href="/keelung-service/social-welfare">社會福利</a>
                      </li>
                      <li>
                        <a href="/keelung-service/sightseeing">觀光旅遊</a>
                      </li>
                      <li>
                        <a href="/keelung-service/citizen-express">市民快線</a>
                      </li>
                      <li>
                        <a href="/keelung-service/labor-employment">勞工就業</a>
                      </li>
                      <li>
                        <a href="/keelung-service/education">教育學習</a>
                      </li>
                      <li>
                        <a href="/keelung-service/leisure">文化休閒</a>
                      </li>
                      <li>
                        <a href="/keelung-service/traffic">交通服務</a>
                      </li>
                      <li>
                        <a href="/keelung-service/household">戶籍身份</a>
                      </li>
                      <li>
                        <a href="/keelung-service/housing">買屋賣屋</a>
                      </li>
                      <li>
                        <a href="/keelung-service/law-service">法律服務</a>
                      </li>
                      <li>
                        <a href="/keelung-service/environment">環境能源</a>
                      </li>
                    </ul>
                  </div>
                  <div className="w-50">
                    <span className="footer-subtitle mb-3">分眾服務</span>
                    <ul className="footer-list">
                      <li>
                        <a href="/keelung-service/keelung-resident">基隆市民</a>
                      </li>
                      <li>
                        <a href="/keelung-service/travel">觀光旅遊</a>
                      </li>
                      <li>
                        <a href="/keelung-service/non-keelung-resident">
                          非基隆市民
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="footer-block">
                <span className="footer-title mb-3">市政資訊</span>
                <ul className="footer-list">
                  <li>
                    <a href="/municipal-information/bid-information-simplify">招標資訊</a>
                    
                  </li>
                  <li>
                    <a href="/municipal-information/recruitment-information">
                      徵才資訊
                    </a>
                  </li>
                  <li>
                    <a href="/municipal-information/plan"></a>施政計畫
                  </li>
                  <li>
                    <a href="/municipal-information/municipal-statistic"></a>
                    市政統計
                  </li>
                  <li>
                    <a href="/municipal-information/public-info"></a>
                    政府公開資訊
                  </li>
                  <li>
                    <a href="/municipal-information/FAQ"></a>常見問題
                  </li>
                </ul>
              </div>
            </div>
            <div className="d-flex flex-column col-12 col-xl-3  col-sm-6">
              <div className="footer-block">
                <span className="footer-title mb-3">機關網站</span>
                <div className="d-flex">
                  <div className="w-50">
                    <div className="mx-1">
                      <span className="footer-subtitle mb-3">本府各處網站</span>
                      <ul className="footer-list">
                        <li>
                          <a href="https://social.klcg.gov.tw/" target="_blank">
                            社會處&ensp;
                            <i class="fa fa-external-link"></i>
                          </a>
                        </li>
                        <li>
                          <a href="https://land.klcg.gov.tw/" target="_blank">
                            地政處&ensp;
                            <i class="fa fa-external-link"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://tourism.klcg.gov.tw/"
                            target="_blank"
                          >
                            交通處&ensp;
                            <i class="fa fa-external-link"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://economy.klcg.gov.tw/"
                            target="_blank"
                          >
                            產業發展處&ensp;
                            <i class="fa fa-external-link"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://development.klcg.gov.tw/"
                            target="_blank"
                          >
                            綜合發展處&ensp;
                            <i class="fa fa-external-link"></i>
                          </a>
                        </li>
                        <li>
                          <a href="https://ethics.klcg.gov.tw/" target="_blank">
                            政風處&ensp;
                            <i class="fa fa-external-link"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://accounting.klcg.gov.tw/"
                            target="_blank"
                          >
                            主計處&ensp;
                            <i class="fa fa-external-link"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://personnel.klcg.gov.tw/"
                            target="_blank"
                          >
                            人事處&ensp;
                            <i class="fa fa-external-link"></i>
                          </a>
                        </li>
                        <li>
                          <a href="https://urban.klcg.gov.tw/" target="_blank">
                            都市發展處&ensp;
                            <i class="fa fa-external-link"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://publicworks.klcg.gov.tw/"
                            target="_blank"
                          >
                            工務處&ensp;
                            <i class="fa fa-external-link"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.kl.edu.tw/v7/eduweb/"
                            target="_blank"
                          >
                            教育處&ensp;
                            <i class="fa fa-external-link"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://financial.klcg.gov.tw/"
                            target="_blank"
                          >
                            財政處&ensp;
                            <i class="fa fa-external-link"></i>
                          </a>
                        </li>
                        <li>
                          <a href="https://civil.klcg.gov.tw/" target="_blank">
                            民政處&ensp;
                            <i class="fa fa-external-link"></i>
                          </a>
                        </li>
                        <li>
                          <a href="https://city.klcg.gov.tw/" target="_blank">
                            觀光及城市行銷處&ensp;
                            <i class="fa fa-external-link"></i>
                          </a>
                        </li>
                      </ul>
                      <span className="footer-subtitle mb-3">區公所網站</span>
                      <ul className="footer-list">
                        <li>
                          <a href="http://www.klct.gov.tw/" target="_blank">
                            七堵區公所&ensp;
                            <i class="fa fa-external-link"></i>
                          </a>
                        </li>
                        <li>
                          <a href="http://www.klnn.gov.tw/" target="_blank">
                            暖暖區公所&ensp;
                            <i class="fa fa-external-link"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="http://www.kljs.gov.tw/home.php"
                            target="_blank"
                          >
                            中山區公所&ensp;
                            <i class="fa fa-external-link"></i>
                          </a>
                        </li>
                        <li>
                          <a href="http://www.klra.gov.tw/" target="_blank">
                            仁愛區公所&ensp;
                            <i class="fa fa-external-link"></i>
                          </a>
                        </li>
                        <li>
                          <a href="http://www.klsy.gov.tw/" target="_blank">
                            信義區公所&ensp;
                            <i class="fa fa-external-link"></i>
                          </a>
                        </li>
                        <li>
                          <a href="http://www.klzz.gov.tw/" target="_blank">
                            中正區公所&ensp;
                            <i class="fa fa-external-link"></i>
                          </a>
                        </li>
                        <li>
                          <a href="http://www.klal.gov.tw/" target="_blank">
                            安樂區公所&ensp;
                            <i class="fa fa-external-link"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="w-50">
                    <div className="mx-1">
                      <span className="footer-subtitle mb-3">
                        地政事務所網站
                      </span>
                      <ul className="footer-list">
                        <li>
                          <a
                            href="http://www.sinyi-land.gov.tw/"
                            target="_blank"
                          >
                            基隆市地政事務所&ensp;
                            <i class="fa fa-external-link"></i>
                          </a>
                        </li>
                      </ul>
                      <span className="footer-subtitle mb-3">
                        戶政事務所網站
                      </span>
                      <ul className="footer-list">
                        <li>
                          <a
                            href="http://www.cidu-house.gov.tw/"
                            target="_blank"
                          >
                            七堵戶政事務所 &ensp;
                            <i class="fa fa-external-link"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="http://www.anle-house.gov.tw/"
                            target="_blank"
                          >
                            安樂戶政事務所&ensp;
                            <i class="fa fa-external-link"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="http://www.kljj-house.gov.tw/"
                            target="_blank"
                          >
                            中正戶政事務所&ensp;
                            <i class="fa fa-external-link"></i>
                          </a>
                        </li>
                      </ul>
                      <span className="footer-subtitle mb-3">附屬機關網站</span>
                      <ul className="footer-list">
                        <li>
                          <a
                            href="http://kl.familyedu.moe.gov.tw/"
                            target="_blank"
                          >
                            基隆家庭教育中心&ensp;
                            <i class="fa fa-external-link"></i>
                          </a>
                        </li>
                        <li>
                          <a href="http://www.klaphio.gov.tw/" target="_blank">
                            動物保護防疫所&ensp;
                            <i class="fa fa-external-link"></i>
                          </a>
                        </li>
                        <li>
                          <a href="http://www.klccab.gov.tw/" target="_blank">
                            文化局&ensp;
                            <i class="fa fa-external-link"></i>
                          </a>
                        </li>
                        <li>
                          <a href="http://klms.klcg.gov.tw/" target="_blank">
                            市立體育場&ensp;
                            <i class="fa fa-external-link"></i>
                          </a>
                        </li>
                        <li>
                          <a href="http://www.kltb.gov.tw/" target="_blank">
                            稅務局&ensp;
                            <i class="fa fa-external-link"></i>
                          </a>
                        </li>
                        <li>
                          <a href="http://www.klrah.gov.tw/" target="_blank">
                            市立仁愛之家&ensp;
                            <i class="fa fa-external-link"></i>
                          </a>
                        </li>
                        <li>
                          <a href="http://www.klms.gov.tw/" target="_blank">
                            市立殯葬管理所&ensp;
                            <i class="fa fa-external-link"></i>
                          </a>
                        </li>
                        <li>
                          <a href="http://www.kmh.gov.tw/" target="_blank">
                            市立醫院&ensp;
                            <i class="fa fa-external-link"></i>
                          </a>
                        </li>
                        <li>
                          <a href="http://www.klcba.gov.tw/" target="_blank">
                            公車處&ensp;
                            <i class="fa fa-external-link"></i>
                          </a>
                        </li>
                        <li>
                          <a href="http://www.klepb.gov.tw/" target="_blank">
                            環保局&ensp;
                            <i class="fa fa-external-link"></i>
                          </a>
                        </li>
                        <li>
                          <a href="http://www.klchb.gov.tw/" target="_blank">
                            衛生局&ensp;
                            <i class="fa fa-external-link"></i>
                          </a>
                        </li>
                        <li>
                          <a href="http://www.klfd.gov.tw/" target="_blank">
                            消防局&ensp;
                            <i class="fa fa-external-link"></i>
                          </a>
                        </li>
                        <li>
                          <a href="http://www.klg.gov.tw/" target="_blank">
                            警察局&ensp;
                            <i class="fa fa-external-link"></i>
                          </a>
                        </li>
                      </ul>
                      <span className="footer-subtitle mb-3">單位通訊</span>
                      <span className="footer-subtitle mb-3">機關業務介紹</span>
                    </div>
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
