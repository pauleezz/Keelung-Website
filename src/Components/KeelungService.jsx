import React, { Component } from 'react';
import "../CSS/Home.css"
import KeelungServiceIcon from "../Components/KeelungServiceIcon.jsx";
class KeelungService extends Component {
  // const a =()=>{}
    render() {
        return (
          <div className="big-block">
            <div className="d-flex flex-column align-items-center justify-content-center home-title mb-5">
              <span className="home-title-gray">KEELUNG SERVICE</span>
              <span className="home-title-green">基隆服務</span>
            </div>
            <div className="d-flex align-items-center justify-content-center mb-5">
              <a 
                id="topic_service" 
                className="switch_left"
                data-toggle="topic"
                href="#topic"
                role="tab"
                aria-controls="topic"
                aria-selected="true">主題服務</a>
              <a 
                id="crowd_service" 
                className="switch_right"
                data-toggle="topic"
                href="#topic"
                role="tab"
                aria-controls="topic"
                aria-selected="false">分眾服務</a>
            </div>

            <div id="row1" className="d-flex align-items-center justify-content-around px-5 mt-5 ">
              <KeelungServiceIcon
                icon_img="icon-01.png"
                text="醫療保健"/>
              <KeelungServiceIcon
                icon_img="icon-02.png"
                text="社會福利"/>
              <KeelungServiceIcon
                icon_img="icon-03.png"
                text="觀光旅遊"/>
              <KeelungServiceIcon
                icon_img="icon-04.png"
                text="市民快線"/>
            </div>
            <div id="row2" className="d-flex align-items-center justify-content-around px-5 mt-4">
              <KeelungServiceIcon
                icon_img="icon-05.png"
                text="勞工就業"/>
              <KeelungServiceIcon
                icon_img="icon-06.png"
                text="教育學習"/>
              <KeelungServiceIcon
                icon_img="icon-07.png"
                text="文化休閒"/>
              <KeelungServiceIcon
                icon_img="icon-08.png"
                text="交通服務"/>
            </div>
            <div id="row3" className="d-flex align-items-center justify-content-around px-5 mt-4">
              <KeelungServiceIcon
                icon_img="icon-09.png"
                text="戶籍身份"/>
              <KeelungServiceIcon
                icon_img="icon-10.png"
                text="買屋賣屋"/>
              <KeelungServiceIcon
                icon_img="icon-11.png"
                text="法律服務"/>
              <KeelungServiceIcon
                icon_img="icon-12.png"
                text="環境保護"/>
            </div>   
          </div>
        );
    }
}

export default KeelungService;