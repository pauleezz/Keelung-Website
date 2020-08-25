import React, { Component } from "react";

class SideBar extends Component {
  render() {
    return (
      <div className="d-flex flex-column align-items-center justify-content-center sidenav">
        <div class=" d-flex green-sidebar flex-column align-items-center justify-content-center">
          <a href="#">
            <div className="d-flex flex-column align-items-center sidebar-item">
              <img src="/pictures/sidebar/icon-1-02.png" />
              <div>置頂</div>
            </div>
          </a>
          <a href="#keelung-service">
            <div className="d-flex flex-column align-items-center sidebar-item">
              <img src="/pictures/sidebar/icon-1-03.png" />
              <div>基隆服務</div>
            </div>
          </a>
          <a href="#online-apply">
            <div className="d-flex flex-column align-items-center sidebar-item">
              <img src="/pictures/sidebar/icon-1-04.png" />
              <div>補助/申辦專區</div>
            </div>
          </a>
          <a href="#news">
            <div className="d-flex flex-column align-items-center sidebar-item">
              <img src="/pictures/sidebar/icon-1-05.png" />
              <div>訊息快報</div>
            </div>
          </a>
          <a href="#charm">
            <div className="d-flex flex-column align-items-center sidebar-item">
              <img src="/pictures/sidebar/icon-1-06.png" />
              <div>魅力基隆</div>
            </div>
          </a>
          <a href="#revolution">
            <div className="d-flex flex-column align-items-center sidebar-item">
              <img src="/pictures/sidebar/icon-1-07.png" />
              <div>基隆再進化</div>
            </div>
          </a>
          <a href="#statistic">
            <div className="d-flex flex-column align-items-center">
              <img src="/pictures/sidebar/icon-1-08.png" />
              <div>統計指標</div>
            </div>
          </a>
        </div>
        <div className="orange-circle d-flex flex-column align-items-center justify-content-center">
          <a href="/keelung-service/covid19">
            <div className="d-flex flex-column align-items-center">
              <img src="/pictures/sidebar/mask-02.png" />
              <div>防疫專區</div>
            </div>
          </a>
        </div>
      </div>
    );
  }
}

export default SideBar;
