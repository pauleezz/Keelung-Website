import React, { Component } from "react";

import ImageContent from "../Components/ImageContent.jsx";
import Navbar from "../Components/Navbar.jsx";
import Footer from "../Components/Footer.jsx";

class Latest extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <ImageContent
          img="/pictures/news/latest_bg.png"
          title="最新公告"
          href={[
            ["首頁", "/", "/"],
            ["訊息快報", "", "/"],
            ["最新公告", ""],
          ]}
        />
        <div className="app">
          <div className="d-flex flex-column align-items-center justify-content-center big-block">
            <div
              className="d-flex justify-content-between align-items-center"
              style={{ width: "90%", borderBottom: "solid 4px #DDDDDD" }}
            >
              <div className="d-flex justify-content-start home-title home-title-green my-3">
                最新公告
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
                </tr>
                <tr>
                  <td class="text-center">2020/08/05</td>
                  <td>
                    <div class="d-flex ">
                      <div class="table-tag" style={{ background: "#707070" }}>
                        殯葬
                      </div>
                      各縣市殯葬類公告(1090723-1090731)
                    </div>
                  </td>
                  <td class="text-center">民政處</td>
                </tr>
                <tr>
                  <td class="text-center">2020/08/05</td>
                  <td>
                    <div class="d-flex ">
                      <div class="table-tag" style={{ background: "#FA990D" }}>
                        實用
                      </div>
                      實價資訊輕鬆查APP，帶您隨時掌握市場行情！
                    </div>
                  </td>
                  <td class="text-center">地政處</td>
                </tr>
                <tr>
                  <td class="text-center">2020/08/04</td>
                  <td>
                    <div class="d-flex ">
                      <div class="table-tag" style={{ background: "#65B017" }}>
                        約聘
                      </div>
                      公告基隆市政府府觀光及城市行銷處(觀光發展科)109年7月14日及15日辦理約僱人員（科員及辦事員職務代理人）公開甄選錄取
                    </div>
                  </td>
                  <td class="text-center">觀光及城市行銷處 </td>
                </tr>
                <tr>
                  <td class="text-center">2020/08/05</td>
                  <td>
                    <div class="d-flex ">
                      <div class="table-tag" style={{ background: "#65B017" }}>
                        約聘
                      </div>
                      產業發展處公開甄選臨時人員甄選結果
                    </div>
                  </td>
                  <td class="text-center">產業發展處</td>
                </tr>
                <tr>
                  <td class="text-center">2020/07/31</td>
                  <td>
                    <div class="d-flex ">
                      <div class="table-tag" style={{ background: "#544F8F" }}>
                        殯葬
                      </div>
                      基隆市中小企業圓夢貸款
                    </div>
                  </td>
                  <td class="text-center">產業發展處</td>
                </tr>
                <tr>
                  <td class="text-center">2020/07/31</td>
                  <td>
                    <div class="d-flex ">
                      <div class="table-tag" style={{ background: "#65B017" }}>
                        約聘
                      </div>
                      產業發展處公開甄選職務代理約僱人員甄選結果
                    </div>
                  </td>
                  <td class="text-center">產業發展處</td>
                </tr>
                <tr>
                  <td class="text-center">2020/07/30</td>
                  <td>
                    <div class="d-flex ">
                      <div class="table-tag" style={{ background: "#FCCA42" }}>
                        登記
                      </div>
                      跨縣市收辦土地登記免奔波-懶人包報你知
                    </div>
                  </td>
                  <td class="text-center">地政處</td>
                </tr>
                <tr>
                  <td class="text-center">2020/07/28</td>
                  <td>
                    <div class="d-flex ">
                      <div class="table-tag" style={{ background: "#707070" }}>
                        殯葬
                      </div>
                      各縣市殯葬類公告(1090713-1090720)
                    </div>
                  </td>
                  <td class="text-center">民政處</td>
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

export default Latest;
