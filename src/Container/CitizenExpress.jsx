import React, { Component } from 'react';

import ImageContent from "../Components/ImageContent.jsx";
import ImageBlock from "../Components/ImageBlock.jsx";
import Navbar from "../Components/Navbar.jsx";
import Footer from "../Components/Footer.jsx";

class CitizenExpress extends Component {
    render() {
        return (
          <div>
            <Navbar />
            <ImageContent
              img="/pictures/citizen-express/citizen-express_bg.png"
              title="市民快線"
              href={[
                ["首頁", "/", "/"],
                ["基隆服務", "", "/"],
                ["市民快線", ""],
              ]}
            />
            <div className="app">
              <div className="my-5">
                <div className="d-flex row w-100">
                  <ImageBlock
                    src="/pictures/citizen-express/citizen-express-1.png"
                    title="市政信箱"
                    content="政府處理人民陳情之單一系統，可讓民眾網站及APP（市民卡APP）填報市政建議或市容查報案件，並提供案件查詢及熱門問答服務。"
                    href=""
                  />
                  <ImageBlock
                    src="/pictures/citizen-express/citizen-express-2.png"
                    title="1999服務"
                    content="若您於暫停服務期間撥打1999，將無法查詢案件辦理情形及提供案件受理編號。造成不便，敬請見諒，謝謝。"
                    href=""
                  />
                  <ImageBlock
                    src="/pictures/citizen-express/citizen-express-3.png"
                    title="訴願審議"
                    content="訴願審議委員會委員，由本機關高級職員及遴聘社會公正人士、學者、專家擔任之；其中社會公正人士、學者、專家人數不得少於2分之1。"
                    href=""
                  />
                  <ImageBlock
                    src="/pictures/citizen-express/citizen-express-4.png"
                    title="常見問答"
                    content="政府處理人民陳情之單一系統，可讓民眾網站及APP（市民卡APP）填報市政建議或市容查報案件，並提供案件查詢及熱門問答服務。"
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

export default CitizenExpress;