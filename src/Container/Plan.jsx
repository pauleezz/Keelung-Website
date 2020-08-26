import React, { Component } from "react";

import ImageContent from "../Components/ImageContent.jsx";
import Navbar from "../Components/Navbar.jsx";
import Footer from "../Components/Footer.jsx";

class Plan extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <ImageContent
          img="/pictures/plan/img_bg.png"
          title="施政計畫"
          href={[
            ["首頁", "/", "/"],
            ["市政資訊", "", "/"],
            ["施政計畫", ""],
          ]}
        />
        <div className="app">
          <div className="d-flex flex-column align-items-center justify-content-center big-block">
            <div
              className="d-flex justify-content-between align-items-center"
              style={{ width: "90%", borderBottom: "solid 4px #DDDDDD" }}
            >
              <div className="d-flex justify-content-start home-title home-title-green my-3">
                施政計畫
              </div>
              <div class="search-container">
                <form class="d-flex align-items-center">
                  <div>
                    <label for="class">年度:&emsp;</label>
                    <select id="class">
                      <option value="parrot">請選擇</option>
                      <option value="goldfish">其他</option>
                    </select>
                  </div>
                  <div>
                    <label for="class">類別:&emsp;</label>
                    <select id="class">
                      <option value="parrot">請選擇</option>
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
                  <th class="text-center">年度</th>
                  <th class="text-center">標題</th>
                  <th class="text-center">類別</th>
                  <th class="text-center">瀏覽人次</th>
                </tr>
                <tr>
                  <td class="text-center">109年度</td>
                  <td>基隆市議會第19屆第3次定期會市長施政總報告</td>
                  <td class="text-center">市長施政總報告</td>
                  <td class="text-center">3</td>
                </tr>
                <tr>
                  <td class="text-center">109年度</td>
                  <td>基隆市政府中程施政計畫(109至112年度)</td>
                  <td class="text-center">中程施政計畫</td>
                  <td class="text-center">3</td>
                </tr>
                <tr>
                  <td class="text-center">108年度</td>
                  <td>108年度施政計畫績效成果報告</td>
                  <td class="text-center">年度施政計畫</td>
                  <td class="text-center">3</td>
                </tr>
                <tr>
                  <td class="text-center">108年度</td>
                  <td>109年度施政計畫</td>
                  <td class="text-center">年度施政計畫</td>
                  <td class="text-center">3</td>
                </tr>
                <tr>
                  <td class="text-center">108年度</td>
                  <td>99年度績效成果報告</td>
                  <td class="text-center">年度施政計畫</td>
                  <td class="text-center">3</td>
                </tr>
                <tr>
                  <td class="text-center">108年度</td>
                  <td>基隆市議會第19屆第2次定期會市長施政總報告</td>
                  <td class="text-center">市長施政總報告</td>
                  <td class="text-center">3</td>
                </tr>
                <tr>
                  <td class="text-center">108年度</td>
                  <td>基隆市議會第19屆第1次定期會市長施政總報告</td>
                  <td class="text-center">市長施政總報告</td>
                  <td class="text-center">3</td>
                </tr>
                <tr>
                  <td class="text-center">108年度</td>
                  <td>108年度施政計畫</td>
                  <td class="text-center">年度施政計畫</td>
                  <td class="text-center">3</td>
                </tr>
                <tr>
                  <td class="text-center">107年度</td>
                  <td>107年度施政績效成果報告</td>
                  <td class="text-center">年度施政計畫</td>
                  <td class="text-center">3</td>
                </tr>
                <tr>
                  <td class="text-center">107年度</td>
                  <td>基隆市議會第18屆第8次定期會市長施政總報告</td>
                  <td class="text-center">市長施政總報告</td>
                  <td class="text-center">3</td>
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

export default Plan;
