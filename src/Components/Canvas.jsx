import React, { Component } from "react";

class Canvas extends Component {
  render() {
    return (
      <div className="bg-block">
        <div className="bg-title d-flex">
          <div className="d-flex flex-column">
            <div className="title-big">KEELUNG</div>
            <div className="d-flex align-items-center">
              <div className="title-medium">基隆</div>
              <div className="d-flex" id="reborn">
                <div
                  id="reborn-orange"
                  className="d-flex align-items-center justify-content-center px-4"
                >
                  市港
                </div>
                <div
                  id="reborn-green"
                  className="d-flex align-items-center justify-content-center px-4"
                >
                  再生
                </div>
              </div>
            </div>
            <div className="title-small">IS CHANGING</div>
          </div>
          <div className="vertical">
            基隆正在改變中
            <br />
            帶來海洋城市的新風貌與新能量
            <br />
            與您魅力見面
          </div>
        </div>

        <img src="pictures/img_bg.png" className="w-100 bg-img" />
      </div>
    );
  }
}

export default Canvas;
