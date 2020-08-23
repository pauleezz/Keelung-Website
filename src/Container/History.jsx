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
            ["發現基隆", "/", "/"],
            ["歷史沿革", "/"],
          ]}
        />
        <div className="app">
          <div className="d-flex flex-column align-items-start justify-content-center home-title mb-3">
            <span className="home-title-green">荷西與明鄭時期</span>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default History;
