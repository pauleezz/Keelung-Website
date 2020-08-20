import React, { Component } from 'react';
import "../CSS/Home.css"

class KeelungService extends Component {
  // const a =()=>{}
    render() {
        return (
          <div className="big-block">
            <div className="d-flex flex-column align-items-center justify-content-center home-title mb-3">
              <span className="home-title-gray">KEELUNG SERVICE</span>
              <span className="home-title-green">基隆服務</span>
            </div>
            <div className="d-flex align-items-center justify-content-center mt-5">
              <button className="switch_left">主題服務</button>
              <button className="switch_right">分眾服務</button>
            </div>
            <div className="d-flex flex-wrap mt-5 icon_but">
                <button>icon_01</button>
                <button>icon_02</button>
                <button>icon_03</button>
                <button>icon_04</button>
                <button>icon_05</button>
                <button>icon_06</button>
                <button>icon_07</button>
                <button>icon_08</button>
                <button>icon_09</button>
                <button>icon_10</button>
                <button>icon_11</button>
                <button>icon_12</button>
                <button>icon_13</button>
                <button>icon_14</button>
                <button>icon_15</button>
                <button>icon_16</button>
              </div>
            
          </div>
        );
    }
}

export default KeelungService;