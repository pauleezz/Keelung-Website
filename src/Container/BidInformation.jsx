import React, { Component } from "react";

import ImageContent from "../Components/ImageContent.jsx";
import ImageBlock from "../Components/ImageBlock.jsx";
import Navbar from "../Components/Navbar.jsx";
import Footer from "../Components/Footer.jsx";

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
            ["市政資訊", "/", "/"],
            ["招標資訊", "/"],
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
