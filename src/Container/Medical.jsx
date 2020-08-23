import React, { Component } from 'react';

import ImageContent from "../Components/ImageContent.jsx";
import ImageBlock from "../Components/ImageBlock.jsx";
import Footer from "../Components/Footer.jsx";

class Medical extends Component {
    render() {
        return (
          <div>
            <ImageContent
              img="/pictures/covid/covid19_bg.png"
              title="醫療保健"
              href={[
                ["首頁", "/", "/"],
                ["基隆服務", "/", "/"],
                ["醫療保健", "/"],
              ]}
            />
            <div className="app">
              <div className="my-5">
                <div className="home-title home-title-green my-3 w-100">
                  醫療資源
                </div>
                <div className="d-flex row align-items-center justify-content-center w-100">
                  <ImageBlock
                    src="/pictures/medical/medical-1.png"
                    title="醫療補助"
                    content="為保護和增進人體健康、防治疾病,醫療機構所採取的綜合性措施。"
                    href=""
                  />
                  <ImageBlock
                    src="/pictures/medical/medical-2.png"
                    title="慢性病"
                    content="長期的、不能自愈的，也幾乎不能被治愈的疾病。主要是指那些發病率、致殘率、死亡率較高和醫療費用昂貴,並有明確預防措施的疾病。"
                    href=""
                  />
                  <ImageBlock
                    src="/pictures/medical/medical-3.png"
                    title="醫療院所"
                    content="政府有關部門的主導下，社會廣泛參與，通過醫療機構針對貧困人口的患病者實施的恢復其健康、維持其基本生存能力。"
                    href=""
                  />
                  <ImageBlock
                    src="/pictures/medical/medical-4.png"
                    title="健保醫療資訊"
                    content="實施全民醫療保險制度， 為增進全體國民健康，以提供醫療保健服務。"
                    href=""
                  />
                </div>
              </div>
              <div className="my-5">
                <div className="home-title home-title-green my-3 w-100">
                  防疫專區
                </div>
                <div className="d-flex row align-items-center justify-content-center w-100">
                  <ImageBlock
                    src="/pictures/medical/medical-5.png"
                    title="covid專區"
                    content="國際疫情升溫，落實防疫不鬆懈，COVID-19 請參閱衛生福利部疾病管制署提供的 COVID-19 最新資訊。"
                    href=""
                  />
                  <ImageBlock
                    src="/pictures/medical/medical-6.png"
                    title="疫情訊息"
                    content="請參閱衛生福利部疾病管制署提供的最新資訊。"
                    href=""
                  />
                  <ImageBlock
                    src="/pictures/medical/medical-7.png"
                    title="防疫政策"
                    content="請參閱衛生福利部疾病管制署提供的最新資訊。"
                    href=""
                  />
                  <ImageBlock
                    src="/pictures/medical/medical-8.png"
                    title="防疫保健"
                    content="請參閱衛生福利部疾病管制署提供的最新資訊。"
                    href=""
                  />
                </div>
              </div>
              <div className="my-5">
                <div className="home-title home-title-green my-3 w-100">
                  宣導防治
                </div>
                <div className="d-flex row align-items-center justify-content-center w-100">
                  <ImageBlock
                    src="/pictures/medical/medical-9.png"
                    title="心理衛生"
                    content="有發燒、咳嗽、呼吸困難等症狀，請先與診所/醫院聯絡，以便尋求醫療協助。接著，請按照當地衛生主管機關的指示採取必要措施。"
                    href=""
                  />
                  <ImageBlock
                    src="/pictures/medical/medical-10.png"
                    title="菸害防制"
                    content=" 戒菸、二手菸、電子菸、煙、三手菸"
                    href=""
                  />
                  <ImageBlock
                    src="/pictures/medical/medical-11.png"
                    title="肥胖防治"
                    content="熱量攝取過多、欠缺運動及體質問題等，其他如基因缺陷、內分泌異常、藥物影響及精神疾病"
                    href=""
                  />
                  <ImageBlock
                    src="/pictures/medical/medical-12.png"
                    title="健康宣導"
                    content="由國民健康署維護，定位為衛生部門提供衛生教育資訊的入口網站，希望提供民眾及衛生教育人員正確與知識。"
                    href=""
                  />
                  <ImageBlock
                    src="/pictures/medical/medical-13.png"
                    title="酒駕防制"
                    content="台灣酒駕防制社會關懷協會，是臺灣一個非營利組織，關注臺灣的酒駕與關懷弱勢酒駕受難者家屬議題。"
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

export default Medical;