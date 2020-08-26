import React, { Component } from "react";
import ImageContent from "../Components/ImageContent.jsx";
import Navbar from "../Components/Navbar.jsx";
import Footer from "../Components/Footer.jsx";

class History extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <ImageContent
          img="/pictures/history/img_bg.png"
          title="歷史沿革"
          href={[
            ["首頁", "/", "/"],
            ["發現基隆", "/know-keelung/discover-keelung", "/"],
            ["歷史沿革", ""],
          ]}
        />
        <div className="app">
          <div className="d-flex flex-column">
            <div className="d-flex align-items-center big-block">
              <div className="col-6">
                <div className="d-flex flex-column justify-content-center home-title mb-3">
                  <span className="home-title-green">荷西與明鄭時期</span>
                </div>
                <div>
                  基隆，舊名雞籠。
                  <br />
                  明朝末年，日人豐臣秀吉獲悉基隆蘊藏硫磺，欲出兵謀併台灣，中途遇颱風而返，卻為基隆一連串的兵禍連結展開序幕。
                  <br />
                  <br />
                  1626年，西班牙派出遠征隊從呂宋出發，在社寮島登陸，也就是今日基隆的和平島。隨即在島上西南端修築「聖薩爾瓦多城」。1642年，荷蘭人北上攻佔社寮島後，將「聖薩爾瓦多城」改名為「北荷蘭」。
                  <br />
                  <br />
                  1668年，鄭經派軍討伐荷蘭人，荷蘭人兵敗，臨去之前，曾在社寮島的岩洞內刻字留念，後來被稱為「番字洞」。
                </div>
              </div>
              <div className="col-6">
                <div className="d-flex row">
                  <img
                    src="/pictures/history/History_1.png"
                    className="col-6"
                  />
                  <img
                    src="/pictures/history/History_2.png"
                    className="col-6"
                  />
                  <img
                    src="/pictures/history/History_3.png"
                    className="col-6"
                  />
                  <img
                    src="/pictures/history/History_4.png"
                    className="col-6"
                  />
                </div>
              </div>
            </div>
            <div className="d-flex align-items-center big-block">
              <div className="col-6">
                <div className="d-flex">
                  <img
                    src="/pictures/history/History_5.png"
                    className="col-6"
                  />
                  <img
                    src="/pictures/history/History_4_dn.png"
                    className="col-6"
                  />
                </div>
              </div>
              <div className="col-6">
                <div className="d-flex flex-column justify-content-center home-title mb-3">
                  <span className="home-title-green">清朝統治時期</span>
                </div>
                <div>
                  清代中期開始，基隆的發展變得極為迅速，主要與其礦產有密切的關係。
                  <br />
                  <br />
                  基隆河流域不但產出沙金，且蘊藏有豐富的優質煤礦。
                  1875年，清廷將前此一直沿用的「雞籠」名稱改為「基隆」，以取其「基地昌隆」的吉祥意義。
                </div>
              </div>
            </div>
            <div className="d-flex align-items-center big-block">
              <div className="col-6">
                <div className="d-flex flex-column justify-content-center home-title mb-3">
                  <span className="home-title-green">日本統治時期</span>
                </div>
                <div>
                  1895年，日人統治台灣的第一年，基隆港即積極籌劃展開五期的築港工程。此後，基隆市的經貿地位變得日益重要。
                  <br />
                  <br />
                  1916年，基隆港的貿易額已超過淡水，甚至一度超越高雄港，而成為台灣最主要的商港。
                  <br />
                  <br />
                  1924至1931年，基隆升格為「市」，成為當時台灣第四大都市。
                  <br />
                  <br />
                  1941年，太平洋戰事爆發，基隆由於其主要物資吞吐港及海軍基地的地位，在大戰末期首當其衝，成為美軍轟炸的首要目標。
                </div>
              </div>
              <div className="col-6">
                <div className="d-flex">
                  <img
                    src="/pictures/history/History_7.png"
                    className="col-6"
                  />
                  <img
                    src="/pictures/history/History_8.png"
                    className="col-6"
                  />
                </div>
              </div>
            </div>
            <div className="d-flex align-items-center big-block">
              <div className="col-6">
                <div className="d-flex">
                  <img
                    src="/pictures/history/History_9.png"
                    className="col-6"
                  />
                  <img
                    src="/pictures/history/History_10.png"
                    className="col-6"
                  />
                </div>
              </div>
              <div className="col-6">
                <div className="d-flex flex-column justify-content-center home-title mb-3">
                  <span className="home-title-green">臺灣時期</span>
                </div>
                <div>
                  1945年國民政府來台接收後，基隆港在基隆市政府及港務局的合作下積極展開重建工作，由於台灣北部人口眾多，產業發達，使得位於經濟腹地的基隆港營運業務蒸蒸日上，港埠設施日趨完善。
                  <br />
                  <br />
                  到了民國73年時已躍居為世界排名第七的貨櫃港。
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default History;
