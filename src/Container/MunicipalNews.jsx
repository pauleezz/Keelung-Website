import React, { Component } from "react";

import ImageContent from "../Components/ImageContent.jsx";
import Navbar from "../Components/Navbar.jsx";
import Footer from "../Components/Footer.jsx";

class MunicipalNews extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <ImageContent
          img="/pictures/news/news_bg.png"
          title="市政新聞"
          href={[
            ["首頁", "/", "/"],
            ["訊息快報", "/", "/"],
            ["市政新聞", "/"],
          ]}
        />
        <div className="app">
          <div className="d-flex flex-column align-items-center justify-content-center big-block">
            <div
              className="d-flex justify-content-between align-items-center"
              style={{ width: "90%", borderBottom: "solid 4px #DDDDDD" }}
            >
              <div className="d-flex justify-content-start home-title home-title-green my-3">
                市政新聞
              </div>
              <div class="search-container">
                <form class="d-flex align-items-center">
                  <div>
                    <label for="class">發布單位:&emsp;</label>
                    <select id="class">
                      <option value="parrot">全部</option>
                      <option value="goldfish">其他</option>
                    </select>
                  </div>

                  <div>
                    <input type="text" placeholder="輸入關鍵字" />
                    <button type="submit">
                      <i class="fa fa-search"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div style={{ width: "85%" }}>
              <table>
                <tr>
                  <th class="text-center">發布時間</th>
                  <th class="text-center">標題</th>
                  <th class="text-center">發布單位</th>
                  <th class="text-center">瀏覽人次</th>
                </tr>
                <tr>
                  <td class="text-center">2020/08/09</td>
                  <td>『綠色時尚夜-環保夜市Party On』 籲消費支持環保夜市</td>
                  <td class="text-center">觀光及城市行銷處 </td>
                  <td class="text-center">1</td>
                </tr>
                <tr>
                  <td class="text-center">2020/08/08</td>
                  <td>『爸』氣十足親子活動 林右昌與大家歡度「88節」</td>
                  <td class="text-center">觀光及城市行銷處 </td>
                  <td class="text-center">13</td>
                </tr>
                <tr>
                  <td class="text-center">2020/08/07</td>
                  <td>信二分隊RIT訓練</td>
                  <td class="text-center">消防局</td>
                  <td class="text-center">2</td>
                </tr>
                <tr>
                  <td class="text-center">2020/08/07</td>
                  <td>信二路174巷老舊社區住宅用火災警報器宣導安裝</td>
                  <td class="text-center">消防局</td>
                  <td class="text-center">2</td>
                </tr>
                <tr>
                  <td class="text-center">2020/08/07</td>
                  <td>信二路174巷老舊社區住宅用火災警報器宣導安裝</td>
                  <td class="text-center">消防局</td>
                  <td class="text-center">2</td>
                </tr>
                <tr>
                  <td class="text-center">2020/08/07</td>
                  <td>宣導二分隊常年訓練</td>
                  <td class="text-center">消防局</td>
                  <td class="text-center">3</td>
                </tr>
                <tr>
                  <td class="text-center">2020/08/07</td>
                  <td>宣導二分隊常年訓練</td>
                  <td class="text-center">消防局</td>
                  <td class="text-center">3</td>
                </tr>
                <tr>
                  <td class="text-center">2020/08/07</td>
                  <td>信二分隊雲梯車訓練</td>
                  <td class="text-center">消防局 </td>
                  <td class="text-center"></td>
                </tr>
                <tr>
                  <td class="text-center">2020/08/07</td>
                  <td>仁壽里都市降溫綠農園 降溫節能成效高</td>
                  <td class="text-center">環境保護局</td>
                  <td class="text-center">17</td>
                </tr>
                <tr>
                  <td class="text-center">2020/08/07</td>
                  <td>表揚資深護理人員 林右昌肯定護理人員辛勤努力</td>
                  <td class="text-center">觀光及城市行銷處</td>
                  <td class="text-center">24</td>
                </tr>
                <tr>
                  <td class="text-center">2020/08/07</td>
                  <td>陪同總統訪和平島考古遺址 見證台灣400年歷史典範在基隆</td>
                  <td class="text-center">環境保護局</td>
                  <td class="text-center">17</td>
                </tr>
              </table>
            </div>
            <div className="mt-5">
              <nav aria-label="Page navigation example">
                <ul class="pagination justify-content-center">
                  <li class="page-item disabled mx-1">
                    <a class="page-link" href="#" tabindex="-1">
                      <span aria-hidden="true">&laquo;</span>
                      <span class="sr-only">Previous</span>
                    </a>
                  </li>
                  <li class="page-item mx-1">
                    <a class="page-link page-active" href="#">
                      1
                    </a>
                  </li>
                  <li class="page-item mx-1">
                    <a class="page-link page-normal" href="#">
                      2
                    </a>
                  </li>
                  <li class="page-item mx-1">
                    <a class="page-link page-normal" href="#">
                      3
                    </a>
                  </li>
                  <li class="page-item mx-1">
                    <a class="page-link page-normal" href="#">
                      <span aria-hidden="true">&raquo;</span>
                      <span class="sr-only">Next</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default MunicipalNews;
