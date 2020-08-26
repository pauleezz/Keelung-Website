import React, { Component } from 'react';

import ImageContent from "../Components/ImageContent.jsx";
import ImageBlock from "../Components/ImageBlock.jsx";
import Navbar from "../Components/Navbar.jsx";
import Footer from "../Components/Footer.jsx";

class EnterpriseInvestment extends Component {
    render() {
        return (
          <div>
            <Navbar />
            <ImageContent
              img="/pictures/enterprise-investment/enterprise-investment_bg.png"
              title="企業投資"
              href={[
                ["首頁", "/", "/"],
                ["基隆服務", "/#keelung-service", "/"],
                ["企業投資", ""],
              ]}
            />
            <div className="app">
              <div className="my-5">
                <div className="d-flex row w-100">
                  <ImageBlock
                    src="/pictures/enterprise-investment/enterprise-investment-1.png"
                    title="企業融資"
                    content="玉山銀行協助企業進行融資，提供短中長期週轉融資、信保基金保證、聯合授信(聯貸)、廠辦設備融資貸款、政府專案貸款，方便資金調度等多項服務。"
                    href=""
                  />
                  <ImageBlock
                    src="/pictures/enterprise-investment/enterprise-investment-2.png"
                    title="創業輔導"
                    content="基隆市青年創業貸款利息補貼 - 新創圓夢網 - 經濟部中小企業處。"
                    href=""
                  />
                  <ImageBlock
                    src="/pictures/enterprise-investment/enterprise-investment-3.png"
                    title="產業登記"
                    content="基隆市政府產業發展處。"
                    href=""
                  />
                  <ImageBlock
                    src="/pictures/enterprise-investment/enterprise-investment-4.png"
                    title="產業查詢"
                    content="基隆市政府產業發展處。"
                    href=""
                  />
                  <ImageBlock
                    src="/pictures/enterprise-investment/enterprise-investment-5.png"
                    title="發展獎勵"
                    content="基隆市政府產業發展處。"
                    href=""
                  />
                  <ImageBlock
                    src="/pictures/enterprise-investment/enterprise-investment-6.png"
                    title="商業及工廠登記查詢"
                    content="基隆市政府產業發展處。"
                    href=""
                  />
                  <ImageBlock
                    src="/pictures/enterprise-investment/enterprise-investment-7.png"
                    title="創業貸款"
                    content="基隆市青年創業貸款利息補貼 - 新創圓夢網 - 經濟部中小企業處。"
                    href=""
                  />
                  <ImageBlock
                    src="/pictures/enterprise-investment/enterprise-investment-8.png"
                    title="採購招標"
                    content="基隆採購之招標方式，包含公開招標、選擇性招標及限制性招標。"
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

export default EnterpriseInvestment;