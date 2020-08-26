import React, { Component } from "react";

import ImageContent from "../Components/ImageContent.jsx";
import Navbar from "../Components/Navbar.jsx";
import Footer from "../Components/Footer.jsx";
import FullWidthBlock from "../Components/FullWidthBlock.jsx";
import GreenBlock from "../Components/GreenBlock.jsx";
import GreenBlockWithoutTitle from "../Components/GreenBlockWithoutTitle.jsx";
import GreenBlockImage from "../Components/GreenBlockImage.jsx";
import Circle from "../Components/Circle.jsx";

class Mail extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <ImageContent
          img="/pictures/mail/img_bg.png"
          title="市政信箱"
          href={[
            ["首頁", "/", "/"],
            ["基隆服務", "/#keelung-service", "/"],
            ["市政信箱", ""],
          ]}
        />
        <div className="app">
          <div className="big-block gray">
            歡迎進入市政信箱，就本市市政之興革或諮詢，提出您的看法與指教。請填寫正確資料以便聯繫及傳送回信，
            您也可以到「信件查詢」項下查詢回覆處理情形。與市政無關之投書（如謾罵、人身攻擊、商業廣告），恕不予處理。
            為確保您的電子信箱未遭他人冒用，確實可收到本府回信，系統會自動發送一封「確認信」，請打開並點選信中的連結網址，完成確認後，我們將盡速依序處理您的來信。如您未收到「確認信」，請至您的「垃圾郵件匣」查看。凡未經您確認的信件，本信箱將不予受理。
            為避免您所投書的陳情信發生無法順利確認情形，建議您的電子信箱地址盡量避免填寫於一般入口網站申請之免費信箱；若您使用的信箱未收到確認信，可能為信箱將此確認信誤判定為垃圾信，請至垃圾信匣中查看，並將市府信箱(Klcg_Service@mail.klcg.gov.tw)設定為白名單。白名單設定方式請參考您的電子信箱使用說明。
            <br />
            <br />
            如投書時遇派送信件失敗或逾24小時後仍未收到確認信，可能是因本系統無法向您所使用的電子郵件信箱派信。目前已確定hinet、pchome之信箱無法成功派送，部分機關或私人公司信箱亦有無法派送成功之情形發生，因此如有前述狀況，麻煩請更換所填寫之電子信箱（如無使用其他信箱，建議可註冊Google的Gmail免費信箱進行投信）。
          </div>
          <div className="big-block">
            <form>
              <div className="d-flex">
                <div class="form-group col-6">
                  <label for="exampleInputEmail1">姓名</label>
                  <input
                    type="email"
                    class="form-control input-block"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div class="form-group col-6">
                  <div>
                    <div className="col-12">
                      <label for="exampleInputEmail1">聯絡地址</label>
                    </div>

                    <div class="d-flex">
                      <div className="col-6">
                        <input
                          type="email"
                          class="form-control input-block"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                        />
                      </div>
                      <div className="col-6">
                        <input
                          type="email"
                          class="form-control input-block"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <input
                        type="email"
                        class="form-control input-block"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex">
                <div class="form-group col-6">
                  <label for="exampleInputEmail1">聯絡電話</label>
                  <input
                    type="email"
                    class="form-control input-block"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div class="form-group col-6">
                  <div className="col-12">
                    <label for="exampleInputEmail1">電子郵件</label>
                    <input
                      type="email"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                  </div>
                </div>
              </div>
              <div class="form-group col-12">
                <label for="exampleInputPassword1">分類</label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div class="form-group col-12">
                <label for="exampleInputPassword1">投書主題</label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div class="form-group col-12">
                <label for="exampleInputPassword1">投書事項</label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div className="d-flex flex-column col-12">
                <button type="submit" class="green-button">
                  檔案上傳
                </button>
                <button type="submit" class="green-button">
                  送出
                </button>
              </div>
            </form>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Mail;
