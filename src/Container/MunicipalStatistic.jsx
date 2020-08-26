import React, { Component } from "react";

import ImageContent from "../Components/ImageContent.jsx";
import ImageBlock from "../Components/ImageBlock.jsx";
import Navbar from "../Components/Navbar.jsx";
import Footer from "../Components/Footer.jsx";

class MunicipalStatistic extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <ImageContent
          img="/statistic/img_bg.png"
          title="市政統計"
          href={[
            ["首頁", "/", "/"],
            ["市政資訊", "", "/"],
            ["市政統計", ""],
          ]}
        />
        <div className="app">
          <div className="d-flex flex-column align-items-center justify-content-center big-block">
            <div
              className="d-flex justify-content-between align-items-center"
              style={{ width: "90%", borderBottom: "solid 4px #DDDDDD" }}
            >
              <div className="d-flex justify-content-start home-title home-title-green my-3">
                市政統計
              </div>
              <div class="search-container">
                <form class="d-flex align-items-center">
                  <div>
                    <label for="class">年度:&emsp;</label>
                    <select id="class">
                      <option value="parrot">職權職掌</option>
                      <option value="spider">地理教師敘薪</option>
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
                </tr>
                <tr>
                  <td class="text-center">109年度</td>
                  <td class="text-center">市政統計109年6月</td>
                </tr>
                <tr>
                  <td class="text-center">109年度</td>
                  <td class="text-center">市政統計109年5月</td>
                </tr>
                <tr>
                  <td class="text-center">109年度</td>
                  <td class="text-center">市政統計109年4月</td>
                </tr>
                <tr>
                  <td class="text-center">109年度</td>
                  <td class="text-center">市政統計109年3月</td>
                </tr>
                <tr>
                  <td class="text-center">109年度</td>
                  <td class="text-center">市政統計109年2月</td>
                </tr>
                <tr>
                  <td class="text-center">109年度</td>
                  <td class="text-center">市政統計109年1月</td>
                </tr>
                <tr>
                  <td class="text-center">108年度</td>
                  <td class="text-center">市政統計(年資料)108年</td>
                </tr>
                <tr>
                  <td class="text-center">108年度</td>
                  <td class="text-center">市政統計108年12月</td>
                </tr>
                <tr>
                  <td class="text-center">108年度</td>
                  <td class="text-center">市政統計108年11月</td>
                </tr>
                <tr>
                  <td class="text-center">108年度</td>
                  <td class="text-center">市政統計108年10月</td>
                </tr>
                <tr>
                  <td class="text-center">108年度</td>
                  <td class="text-center">市政統計108年9月</td>
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

export default MunicipalStatistic;
