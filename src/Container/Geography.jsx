import React, { Component } from "react";

import ImageContent from "../Components/ImageContent.jsx";
import ImageBlock from "../Components/ImageBlock.jsx";
import Footer from "../Components/Footer.jsx";

class Geography extends Component {
  render() {
    return (
      <div>
        <ImageContent
          img="/pictures/geography/img_bg.png"
          title="地理環境"
          href={[
            ["首頁", "/", "/"],
            ["發現基隆", "/", "/"],
            ["地理環境", "/"],
          ]}
        />
        <div className="app">
          <div className="big-block d-flex">
            <div className="d-flex flex-column align-items-center justify-content-center col-5">
              <img
                src="/pictures/geography/geography-1.png"
                style={{ width: "100%" }}
                className="my-3"
              />
              <img
                src="/pictures/geography/geography-2.png"
                style={{ width: "100%" }}
                className="my-3"
              />
            </div>
            <div className="col-7">
              <div className="d-flex justify-content-start home-title home-title-green my-3 w-100">
                基隆地理環境
              </div>
              &emsp;&emsp;基隆位於台灣最北端，北臨東海，基隆嶼及和平島屏障於外。基隆港是北台灣最大的天然良港，其港區範圍深入市區之自然地形，為港灣城市極其少見之特例。也因此，基隆港不僅牽動著本市產業發展，亦影響著都市景觀。
              在地形方面，除了基隆港區為風口地形外，其餘地區則為環山所圍繞。
              <br />
              <br />
              &emsp;&emsp;在行政區域劃分方面，本市共分為七個區，即中正區、信義區、仁愛區、中山區、安樂區、暖暖區與七堵區，其中七堵區面積最大，占有本市面積42.38%，仁愛區最小。此外，本市另有七個附屬島嶼，即和平島、中山仔嶼、桶盤嶼、基隆嶼、彭佳嶼、棉花嶼及花瓶嶼。每一個區域和島嶼都有其獨特的自然景緻與人文風貌。
              <br />
              <br />
              &emsp;&emsp;根據統計至2016年11月底止，基隆市全市人口為372,062人，其中原住民計有9,268人，約佔全市人口數2.49%，在全台除原鄉外，基隆市原住民人數比例為相當高的地區；基隆市的新住民人數更已達10,110人，人數佔基隆市人口比例2.72%，全台居冠。
              <br />
              <br />
              &emsp;&emsp;在基隆有29個宗親會社會團體
              ，計有26姓氏組成15姓宗親會參與主普輪值中元祭典活動，計有34個同鄉會社會團體，以從事同鄉各鄉長間之情感聯結及會務發展工作。
              <br />
              <br />
              &emsp;&emsp;回顧歷史上西班牙、荷蘭、日本等時期的佔領統治與許多居住遺跡，更能夠充分展現出海洋城市多元、包容的廣闊襟懷。
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Geography;
