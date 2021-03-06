import React, { Component } from "react";

import ImageContent from "../Components/ImageContent.jsx";
import Navbar from "../Components/Navbar.jsx";
import Footer from "../Components/Footer.jsx";
import GrayBlock from "../Components/GrayBlock.jsx";

class MunicipalRecruitment extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <ImageContent
          img="/pictures/recruitment-information/img_bg.png"
          title="市府徵才"
          href={[
            ["首頁", "/", "/"],
            ["政府服務", "", "/"],
            ["徵才資訊", ""],
          ]}
        />
        <div className="app">
          <div className="d-flex flex-column align-items-center justify-content-center big-block">
            <div
              className="d-flex justify-content-end"
              style={{ width: "85%" }}
            >
              <div className="green-buttons small-shadow">簡易版</div>
              <div className="green-buttons small-shadow green-buttons-active">
                詳細版
              </div>
            </div>
            <div
              className="d-flex justify-content-between align-items-center"
              style={{ width: "85%", borderBottom: "solid 4px #DDDDDD" }}
            >
              <div className="d-flex justify-content-start home-title home-title-green my-3">
                徵才資訊
              </div>
              <div class="search-container">
                <form>
                  <input type="text" placeholder="輸入關鍵字" />
                  <button type="submit">
                    <i class="fa fa-search"></i>
                  </button>
                </form>
              </div>
            </div>

            <GrayBlock
              time={["2020 - 08 - 21", "2020 - 08 - 31"]}
              title="區公所 安樂區公所-里幹事"
              content="具綜合行政職系任用資格之人員。"
              tag={["正式", "#F08922"]}
            />
            <GrayBlock
              time={["2020 - 08 - 19", "2020 - 08 - 21"]}
              title="動物保護防疫所-臨時人員(動保員)"
              content="具有與擬任工作性質程度相當之技能並熟悉動物保護法足以勝任者，領有動物管制基礎訓練班結業證書及動物保護檢查人員初級訓練班結業證書尤佳。"
              tag={["臨時", "#707070"]}
            />
            <GrayBlock
              time={["2020 - 08 - 19", "2020 - 08 - 21"]}
              title="動物保護防疫所-臨時人員(動保員)"
              content="具有與擬任工作性質程度相當之技能並熟悉動物保護法足以勝任者，領有動物管制基礎訓練班結業證書及動物保護檢查人員初級訓練班結業證書尤佳。"
              tag={["臨時", "#707070"]}
            />
            <GrayBlock
              time={["2020 - 08 - 19", "2020 - 08 - 21"]}
              title=" 動物保護防疫所-約聘人員"
              content="具有與擬任工作性質程度相當之技能並熟悉動物保護法足以勝任者，領有動物管制基礎訓練班結業證書及動物保護檢查人員初級訓練班結業證書尤佳。"
              tag={["約聘", "#569A3F"]}
            />
            <GrayBlock
              time={["2020 - 08 - 20", "2020 - 08 - 26"]}
              title="中正戶政事務所-戶籍員所-約聘人員"
              content="具綜合行政職系任用資格之人員。"
              tag={["約聘", "#569A3F"]}
            />
            <GrayBlock
              time={["2020 - 08 - 19", "2020 - 09 - 02"]}
              title="綜合發展處 法制科- 科員"
              content="1.公務人員高等考試三級考試或其他相當考試法制類科及格人員。 2.大學以上法律系所等相關科系畢業。 3.具法制相關工作經驗2年以上。"
              tag={["正式", "#F08922"]}
            />
            <GrayBlock
              time={["2020 - 07 - 24", "2020 - 07 - 31"]}
              title="社會處 身心障礙福利科-身心障礙者生涯轉銜服務社工員(臨時人員)"
              content="符合具備專門職業及技術人員高等考試社會工作師考試應考資格者。"
              tag={["臨時", "#707070"]}
            />
          </div>

          <Footer />
        </div>
      </div>
    );
  }
}

export default MunicipalRecruitment;
