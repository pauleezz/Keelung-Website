import React, { Component } from "react";

import ImageContent from "../Components/ImageContent.jsx";
import ImageBlock from "../Components/ImageBlock.jsx";
import Navbar from "../Components/Navbar.jsx";
import Footer from "../Components/Footer.jsx";

class FAQ extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <ImageContent
          img="/pictures/faq/img_bg.png"
          title="常見問題"
          href={[
            ["首頁", "/", "/"],
            ["市政資訊", "", "/"],
            ["常見問題", ""],
          ]}
        />
        <div className="app">
          <div className="d-flex flex-column align-items-center justify-content-center big-block">
            <div
              className="d-flex justify-content-between align-items-center"
              style={{ width: "90%", borderBottom: "solid 4px #DDDDDD" }}
            >
              <div className="d-flex justify-content-start home-title home-title-green my-3">
                常見問題
              </div>
              <div class="search-container">
                <form class="d-flex align-items-center">
                  <div>
                    <label for="class">發布單位:&emsp;</label>
                    <select id="class">
                      <option value="parrot">人事處</option>
                      <option value="goldfish">其他</option>
                    </select>
                  </div>
                  <div>
                    <label for="class">類別:&emsp;</label>
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
                  <th class="text-center">標題</th>
                  <th class="text-center">類別</th>
                </tr>
                <tr>
                  <td>基隆市政府暨所屬機關臨時人員服務及權益規定如何？</td>
                  <td class="text-center">其他</td>
                </tr>
                <tr>
                  <td>本府所屬學校代理教師敘薪規定如何？</td>
                  <td class="text-center">代理教師敘薪</td>
                </tr>
                <tr>
                  <td>
                    基隆市政府暨所屬機關工友（含技工、駕駛）服務及權益規定如何？
                  </td>
                  <td class="text-center">其他</td>
                </tr>
                <tr>
                  <td>基隆市政府所屬學校代理教師敘薪應注意事項為何？</td>
                  <td class="text-center">代理教師敘薪</td>
                </tr>
                <tr>
                  <td>基隆市政府暨所屬機關編制人員服務及權益規定如何？</td>
                  <td class="text-center">其他</td>
                </tr>
                <tr>
                  <td>
                    若考績年度內，請事、病假合計未超過5日，則當年年終考績是否一定可以拿甲等？
                  </td>
                  <td class="text-center">其他</td>
                </tr>
                <tr>
                  <td>基隆市政府暨所屬機關約聘僱人員服務及權益規定如何？</td>
                  <td class="text-center">其他</td>
                </tr>
                <tr>
                  <td>基隆市政府各處掌理事項為何？</td>
                  <td class="text-center">組織職掌</td>
                </tr>
                <tr>
                  <td>本府所屬二級機關掌理事項為何？</td>
                  <td class="text-center">組織職掌</td>
                </tr>
                <tr>
                  <td>各區公所掌理事項為何？</td>
                  <td class="text-center">組織職掌</td>
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

export default FAQ;
