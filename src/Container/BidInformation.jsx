import React, { Component } from "react";

import ImageContent from "../Components/ImageContent.jsx";
import ImageBlock from "../Components/ImageBlock.jsx";
import Navbar from "../Components/Navbar.jsx";
import Footer from "../Components/Footer.jsx";
import TableContent from "../Components/TableContent.jsx";

class BidInformation extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <ImageContent
          img="/pictures/bid-information/img_bg.png"
          title="招標資訊"
          href={[
            ["首頁", "/", "/"],
            ["市政資訊", "", "/"],
            ["招標資訊", ""],
          ]}
        />
        <div className="app">
          <div className="d-flex flex-column align-items-center justify-content-center big-block">
            <div
              className="d-flex justify-content-end"
              style={{ width: "85%" }}
            >
              <div className="green-buttons small-shadow green-buttons-active">
                <a href="/municipal-information/bid-information-simplify">
                  簡易版
                </a>
              </div>
              <div className="green-buttons small-shadow">
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
                <form class="d-flex align-items-center">
                  <div>
                    <label for="class">類別:&emsp;</label>
                    <select id="class">
                      <option value="parrot">全部</option>
                      <option value="goldfish">其他</option>
                    </select>
                  </div>
                  <div>
                    <label for="class">狀態:&emsp;</label>
                    <select id="class">
                      <option value="parrot">已公告</option>
                      <option value="parrot">未公告</option>
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
                  <th class="text-center">招標狀態</th>
                  <th class="text-center">公告次數</th>
                </tr>
                <TableContent
                  date="2020/08/10"
                  title="碇內國中108年度老舊廁所整修工程"
                  tag={["工程", "#65B017"]}
                  dep="已公告"
                  num="3"
                />
                <TableContent
                  date="2020/08/07"
                  title="德和國小附設幼兒園109年增班工程"
                  tag={["工程", "#65B017"]}
                  dep="已公告"
                  num="3"
                />
                <TableContent
                  date="2020/08/07"
                  title="基隆市建德國小附設幼兒園109年度幼兒園增班工程"
                  tag={["工程", "#65B017"]}
                  dep="已公告"
                  num="3"
                />
                <TableContent
                  date="2020/08/07"
                  title="基隆市中山國民小學西棟大樓校舍耐震能力改善計畫補強工程"
                  tag={["工程", "#65B017"]}
                  dep="已公告"
                  num="3"
                />
                <TableContent
                  date="2020/08/07"
                  title="基隆八斗國民小學日照樓耐震能力補強工程"
                  tag={["工程", "#65B017"]}
                  dep="已公告"
                  num="3"
                />
                <TableContent
                  date="2020/08/07"
                  title="108年老舊廁所環境設備改善工程"
                  tag={["工程", "#65B017"]}
                  dep="已公告"
                  num="3"
                />
                <TableContent
                  date="2020/08/07"
                  title="中正國小仁愛樓結構補強工程"
                  tag={["工程", "#65B017"]}
                  dep="已公告"
                  num="3"
                />
                <TableContent
                  date="2020/08/06"
                  title="109A11瑪陵坑溪水質水量保護區回饋金環境改善工程(單價標)"
                  tag={["財務", "#FA990D"]}
                  dep="已公告"
                  num="3"
                />
                <TableContent
                  date="2020/08/05"
                  title="通仁街107巷67號前巷道邊坡災害復建工程"
                  tag={["工程", "#65B017"]}
                  dep="已公告"
                  num="3"
                />
                <TableContent
                  date="2020/08/05"
                  title="室外球場修繕工程"
                  tag={["工程", "#65B017"]}
                  dep="已公告"
                  num="3"
                />
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

export default BidInformation;
