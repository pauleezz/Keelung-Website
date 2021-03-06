import React, { Component } from "react";

import ImageContent from "../Components/ImageContent.jsx";
import Navbar from "../Components/Navbar.jsx";
import Footer from "../Components/Footer.jsx";

class PublicInfo extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <ImageContent
          img="/pictures/public-info/img_bg.png"
          title="政府公開資訊"
          href={[
            ["首頁", "/", "/"],
            ["市政資訊", "", "/"],
            ["政府公開資訊", ""],
          ]}
        />
        <div className="app">
          <div className="d-flex flex-column align-items-center justify-content-center big-block">
            <div
              className="d-flex justify-content-between align-items-center"
              style={{ width: "90%", borderBottom: "solid 4px #DDDDDD" }}
            >
              <div className="d-flex justify-content-center home-title home-title-green my-3 w-100">
                政府公開資訊
              </div>
            </div>
            <div style={{ width: "85%" }}>
              <table>
                <tr>
                  <th class="text-center">年度</th>
                </tr>
                <tr>
                  <td class="text-center">前瞻基礎建設計畫</td>
                </tr>
                <tr>
                  <td class="text-center">公務出國報告</td>
                </tr>
                <tr>
                  <td class="text-center">政府機關之組織、職掌</td>
                </tr>
                <tr>
                  <td class="text-center">政府機關之組織單位通訊</td>
                </tr>
                <tr>
                  <td class="text-center">行政指導有關文書</td>
                </tr>
                <tr>
                  <td class="text-center">施政計畫</td>
                </tr>
                <tr>
                  <td class="text-center">市政統計、統計資料庫、統計年報</td>
                </tr>
                <tr>
                  <td class="text-center">研究報告</td>
                </tr>
                <tr>
                  <td class="text-center">委外研究計畫</td>
                </tr>
                <tr>
                  <td class="text-center">預算書</td>
                </tr>
                <tr>
                  <td class="text-center">決算書</td>
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

export default PublicInfo;
