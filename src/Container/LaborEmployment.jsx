import React, { Component } from 'react';

import ImageContentSection from "../Components/ImageContentSection.jsx";
import ImageBlock from "../Components/ImageBlock.jsx";
import Navbar from "../Components/Navbar.jsx";
import Footer from "../Components/Footer.jsx";

class LaborEmployment extends Component {
    render() {
        return (
          <div>
            <Navbar />
            <ImageContentSection
              img="/pictures/labor-employment/labor-employment_bg.png"
              title="勞工就業"
              href={[
                ["首頁", "/", "/"],
                ["基隆服務", "/#keelung-service", "/"],
                ["勞工就業", ""],
              ]}
              sectionList={[
                ["徵才資訊", "/"],
                ["勞工權益", "/"],
                ["職場權益", "/"],
                ["退休福利", "/"],
              ]}
              top="-26px"
            />
            <div className="app">
              <div className="my-5">
                <div className="home-title home-title-green my-3 w-100">
                  徵才資訊
                </div>
                <div className="d-flex row w-100">
                  <ImageBlock
                    src="/pictures/labor-employment/labor-employment-1.png"
                    title="台灣就業通"
                    content="台灣就業通人生職涯好夥伴，企業徵才好幫手、求職網提供求職者多元化職缺、 就業新聞、徵才活動訊息、產業、分眾與計畫專區、政策資源、職涯評測、升學就業等。"
                    href=""
                  />
                  <ImageBlock
                    src="/pictures/labor-employment/labor-employment-2.png"
                    title="企業徵才"
                    content="企業徵才、徵人、招募人才，提供人才資料庫查詢。"
                    href=""
                  />
                  <ImageBlock
                    src="/pictures/labor-employment/labor-employment-3.png"
                    title="市府徵才"
                    content="企業徵才、徵人、招募人才等，可刊登於市府網站，並收取求職者應徵履歷。"
                    href=""
                  />
                </div>
              </div>
              <div className="my-5">
                <div className="home-title home-title-green my-3 w-100">
                  勞工權益
                </div>
                <div className="d-flex row w-100">
                  <ImageBlock
                    src="/pictures/labor-employment/labor-employment-4.png"
                    title="失業給付"
                    content="瞭解更多申請失業給付應檢附證明文件及請領手續等資訊。"
                    href=""
                  />
                  <ImageBlock
                    src="/pictures/labor-employment/labor-employment-5.png"
                    title="職前訓練"
                    content="勞動部勞動力發展署、台灣就業通職業訓練整合網站。"
                    href=""
                  />
                </div>
              </div>
              <div className="my-5">
                <div className="home-title home-title-green my-3 w-100">
                  職場權益
                </div>
                <div className="d-flex row w-100">
                  <ImageBlock
                    src="/pictures/labor-employment/labor-employment-6.png"
                    title="勞動申訴"
                    content="勞工申訴專區. 職場平權簡介及申訴管道 等資訊管道。"
                    href=""
                  />
                  <ImageBlock
                    src="/pictures/labor-employment/labor-employment-7.png"
                    title="就業安全"
                    content="就業安全制度定義及相關意涵、就業安全制度相關理論及概念等相關政策及法令資訊。"
                    href=""
                  />
                  <ImageBlock
                    src="/pictures/labor-employment/labor-employment-8.png"
                    title="勞資爭議"
                    content="勞方與資方雙方當事人基於法令、團體協約、勞動契約之規定所為權利義務之衍生的種種爭議。"
                    href=""
                  />
                  <ImageBlock
                    src="/pictures/labor-employment/labor-employment-9.png"
                    title="職場平權"
                    content="為促進就業平等、避免職場性別刻板印象造成職場性別歧視、職場性騷擾並保障國民就業平等。"
                    href=""
                  />
                </div>
              </div>
              <div className="my-5">
                <div className="home-title home-title-green my-3 w-100">
                  勞工權益
                </div>
                <div className="d-flex row w-100">
                  <ImageBlock
                    src="/pictures/labor-employment/labor-employment-10.png"
                    title="退休福利"
                    content="掌理勞動政策規劃、國際勞動事務之合作及研擬等資訊。"
                    href=""
                  />
                </div>
              </div>
              <Footer />
            </div>
          </div>
        );
    }
}

export default LaborEmployment;