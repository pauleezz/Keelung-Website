import React, { Component } from 'react';

import ImageContent from "../Components/ImageContent.jsx";
import Footer from "../Components/Footer.jsx";

class OnlineApplyService extends Component {
    render() {
        return (
          <div>
            <ImageContent
              img="/pictures/online-apply_bg.png"
              title="補助申請服務"
              href={[
                ["首頁", "/", "/"],
                ["市府團隊", "/", "/"],
                ["組織架構", "/", "/"],
                ["單位通訊", "/"],
              ]}
            />
            <div className="app"></div>
            <Footer />
          </div>
        );
    }
}

export default OnlineApplyService;