import React, { Component } from 'react';

import ImageContent from "../Components/ImageContent.jsx";
import Navbar from "../Components/Navbar.jsx";
import Footer from "../Components/Footer.jsx";

class Activity extends Component {
    render() {
        return (
          <div>
            <Navbar />
            <ImageContent
              img="/pictures/news/activity_bg.png"
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