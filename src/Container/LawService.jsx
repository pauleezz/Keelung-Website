import React, { Component } from 'react';

import ImageContent from "../Components/ImageContent.jsx";
import ImageBlock from "../Components/ImageBlock.jsx";
import Footer from "../Components/Footer.jsx";

class LawService extends Component {
    render() {
        return (
          <div>
            <ImageContent
              img="/pictures/law-service/law-service_bg.png"
              title="法律服務"
              href={[
                ["首頁", "/", "/"],
                ["基隆服務", "/", "/"],
                ["法律服務", "/"],
              ]}
            />
            <div className="app">
              <div className="my-5">
                <div className="d-flex row w-100">
                  <ImageBlock
                    src="/pictures/sightseeing/sightseeing-2.png"
                    title="法律諮詢服務"
                    content="文字文字文字。"
                    href=""
                  />
                  <ImageBlock
                    src="/pictures/sightseeing/sightseeing-2.png"
                    title="主管法規查詢"
                    content="文字文字文字。"
                    href=""
                  />
                  <ImageBlock
                    src="/pictures/sightseeing/sightseeing-2.png"
                    title="法規審議"
                    content="文字文字文字。"
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

export default LawService;