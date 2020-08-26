import React, { Component } from "react";

import ImageContent from "../Components/ImageContent.jsx";
import Navbar from "../Components/Navbar.jsx";
import Footer from "../Components/Footer.jsx";
import FullWidthBlock from "../Components/FullWidthBlock.jsx";

class RecruitmentInformation extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <ImageContent
          img="/pictures/recruitment-information/img_bg.png"
          title="徵才資訊"
          href={[
            ["首頁", "/", "/"],
            ["市政資訊", "", "/"],
            ["徵才資訊", ""],
          ]}
        />
        <div className="app">
          <div className="d-flex flex-column align-items-center justify-content-center big-block">
            <div
              className="d-flex justify-content-end"
              style={{ width: "85%" }}
            >
              <div className="green-buttons small-shadow green-buttons-active">
                簡易版
              </div>
              <div className="green-buttons small-shadow">詳細版</div>
            </div>
            <div
              className="d-flex justify-content-between align-items-center"
              style={{ width: "85%", borderBottom: "solid 4px #DDDDDD" }}
            >
              <div className="d-flex justify-content-start home-title home-title-green my-3">
                徵才資訊
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
            <div style={{ width: "85%" }}>
              <table>
                <tr>
                  <th class="text-center">發布時間</th>
                  <th class="text-center">標題</th>
                  <th class="text-center">名額</th>
                </tr>
                <tr>
                  <td class="text-center">2020/08/21</td>
                  <td>
                    <div class="d-flex ">
                      <div class="table-tag" style={{ background: "#F08922" }}>
                        正式
                      </div>
                      區公所 安樂區公所-里幹事
                    </div>
                  </td>
                  <td class="text-center">1名</td>
                </tr>
                <tr>
                  <td class="text-center">2020/08/19</td>
                  <td>
                    <div class="d-flex ">
                      <div class="table-tag" style={{ background: "#707070" }}>
                        臨時
                      </div>
                      動物保護防疫所-臨時人員(動保員)
                    </div>
                  </td>
                  <td class="text-center">3名</td>
                </tr>
                <tr>
                  <td class="text-center">2020/08/19</td>
                  <td>
                    <div class="d-flex ">
                      <div class="table-tag" style={{ background: "#707070" }}>
                        臨時
                      </div>
                      動物保護防疫所-臨時人員(動保員)
                    </div>
                  </td>
                  <td class="text-center">1名</td>
                </tr>
                <tr>
                  <td class="text-center">2020/08/19</td>
                  <td>
                    <div class="d-flex ">
                      <div class="table-tag" style={{ background: "#569A3F" }}>
                        約聘
                      </div>
                      動物保護防疫所-約聘人員
                    </div>
                  </td>
                  <td class="text-center">1名</td>
                </tr>
                <tr>
                  <td class="text-center">2020/08/19</td>
                  <td>
                    <div class="d-flex ">
                      <div class="table-tag" style={{ background: "#569A3F" }}>
                        臨時
                      </div>
                      中正戶政事務所-戶籍員所-約聘人員
                    </div>
                  </td>
                  <td class="text-center">1名</td>
                </tr>
                <tr>
                  <td class="text-center">2020/08/19</td>
                  <td>
                    <div class="d-flex ">
                      <div class="table-tag" style={{ background: "#F08922" }}>
                        正式
                      </div>
                      綜合發展處 法制科- 科員
                    </div>
                  </td>
                  <td class="text-center">1名</td>
                </tr>
                <tr>
                  <td class="text-center">2020/08/18</td>
                  <td>
                    <div class="d-flex ">
                      <div class="table-tag" style={{ background: "#707070" }}>
                        臨時
                      </div>
                      社會處 身心障礙福利科-身心障礙者生涯轉銜服務社工員
                    </div>
                  </td>
                  <td class="text-center">1名</td>
                </tr>
              </table>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default RecruitmentInformation;
