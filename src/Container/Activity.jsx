import React, { Component } from 'react';

import ImageContent from "../Components/ImageContent.jsx";
import Navbar from "../Components/Navbar.jsx";
import Footer from "../Components/Footer.jsx";
import TableContent from "../Components/TableContent.jsx";

class Activity extends Component {
    render() {
        return (
          <div>
            <Navbar />
            <ImageContent
              img="/pictures/news/activity_bg.png"
              title="活動訊息"
              href={[
                ["首頁", "/", "/"],
                ["訊息快報", "/", "/"],
                ["活動訊息", "/"],
              ]}
            />
            <div className="app">
              <div className="d-flex flex-column align-items-center justify-content-center big-block">
                <div
                  className="d-flex justify-content-between align-items-center"
                  style={{ width: "90%", borderBottom: "solid 4px #DDDDDD" }}
                >
                  <div className="d-flex justify-content-start home-title home-title-green my-3">
                    活動訊息
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
                    <TableContent
                      date="2020/08/05"
                      title="慎終追遠緬懷祖先~南榮公墓秋祭祭典"
                      tag={["祭典", "#707070"]}
                      dep="民政處"
                      num="10"
                    />
                    <TableContent
                      date="2020/07/21"
                      title="109年8月11日(星期二)辦理陸軍第0116梯次常備兵役軍事訓練役男護(輸)送入營"
                      tag={["兵役", "#65B017"]}
                      dep="民政處"
                      num="30"
                    />
                    <TableContent
                      date="2020/07/21"
                      title="109年8月19日(星期三)辦理海軍艦艇兵第023梯次常備兵役軍事訓練役男護(輸)送入營"
                      tag={["兵役", "#65B017"]}
                      dep="民政處"
                      num="14"
                    />
                    <TableContent
                      date="2020/07/21"
                      title="109年8月19日(星期三)辦理海軍陸戰隊第069梯次常備兵役軍事訓練役男護(輸)送入營"
                      tag={["兵役", "#65B017"]}
                      dep="民政處"
                      num="5"
                    />
                    <TableContent
                      date="2020/07/21"
                      title="109年8月24日(星期一)辦理補充兵第372梯次役男護(輸)送入營及交接報到"
                      tag={["兵役", "#65B017"]}
                      dep="民政處"
                      num="11"
                    />
                    <TableContent
                      date="2020/07/21"
                      title="2020潮境海灣節系列活動開放報名囉！"
                      tag={["節日", "#FA990D"]}
                      dep="產業發展處"
                      num="187"
                    />
                    <TableContent
                      date="2020/07/08"
                      title="行政院舉辦「性別平等意象LOGO設計徵選活動"
                      tag={["兵役", "#65B017"]}
                      dep="民政處"
                      num="36"
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

export default Activity;