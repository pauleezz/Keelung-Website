import React, { Component } from "react";

import ImageContent from "../Components/ImageContent.jsx";
import Navbar from "../Components/Navbar.jsx";
import Footer from "../Components/Footer.jsx";

class Administration extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <ImageContent
          img="/pictures/admin_bg.png"
          title="市政顧問"
          href={[
            ["首頁", "/", "/"],
            ["市府團隊", "/", "/"],
            ["市政顧問", "/"],
          ]}
        />
        <div className="app">
          <div style={{ position: "relative" }}>
            <div className="m-5">
              <div className="home-title home-title-green my-3">
                基隆市市政顧問
              </div>
              <div className="py-3" style={{ background: "#F7F7F7" }}>
                <table class="table table-borderless">
                  <tbody>
                    <tr>
                      <td>干文男</td> <td>王台珍</td> <td>王武雄</td>
                      <td>王金山</td>
                      <td>王薇君</td> <td>王錦鐘</td> <td>田再庭</td>
                      <td>朱德祥</td>
                      <td>江宏志</td> <td>吳永乾</td>
                    </tr>
                    <tr>
                      <td>吳俊仁</td>
                      <td>吳楷銘</td>
                      <td>呂英世</td> <td>李伯元</td>
                      <td>李清逢</td> <td>李儒謙</td>
                      <td>李麗珍</td> <td>李騰龍</td> <td>杜恒誼</td>
                      <td>杜智明</td>
                    </tr>
                    <tr>
                      <td>沈學榮</td> <td>念其森</td> <td>周 怡</td>
                      <td>周俊吉</td>
                      <td>林士恭</td> <td>林大永</td> <td>林文雄</td>
                      <td>林平侯</td> <td>林本源</td> <td>林正峰</td>
                    </tr>
                    <tr>
                      <td>林正常</td> <td>林金水</td>
                      <td>林振國</td> <td>林崑海</td> <td>林盛豐</td>{" "}
                      <td>林景吉</td>
                      <td>林朝宗</td> <td>林榮吉</td> <td>林麗珍</td>{" "}
                      <td>林明智</td>
                    </tr>
                    <tr>
                      <td>妙璋法師</td>
                      <td>邱再興</td> <td>柯孫達</td>
                      <td>洪英正</td> <td>洪團樟</td>
                      <td>洪麗芬</td> <td>洪森永</td>
                      <td>倪再福</td> <td>郝廣才</td> <td>施世明</td>{" "}
                    </tr>
                    <tr>
                      <td>馬詠睿</td>
                      <td>張志清</td>
                      <td>張金華</td> <td>張國恩</td> <td>張堅華</td>
                      <td>張清風</td> <td>張朝明</td> <td>張新仁</td>{" "}
                      <td>張錦煌</td>
                      <td>莊錚中</td>{" "}
                    </tr>
                    <tr>
                      <td>陳文龍</td> <td>陳世斌</td>
                      <td>陳枝松</td> <td>陳建宏</td> <td>陳紀元</td>{" "}
                      <td>陳重光</td>
                      <td>陳振豐</td>
                      <td>陳詔文</td>
                      <td>陳傳文</td> <td>陳萬成</td>
                    </tr>
                    <tr>
                      <td>陳荔彤</td> <td>陳東財</td> <td>陳江山</td>{" "}
                      <td>陳志成</td>
                      <td>徐莉莉</td> <td>張漢土</td>
                      <td>彭瑞祺</td> <td>游日興</td>
                      <td>游祥耀</td> <td>程文俊</td>
                    </tr>
                    <tr>
                      <td>童　永</td> <td>黃　華</td>
                      <td>黃丁風</td> <td>黃大銘</td> <td>黃余葉</td>{" "}
                      <td>黃良雄</td>
                      <td>黃明發</td> <td>黃振國</td> <td>黃勝雄</td>{" "}
                      <td>黃越綏</td>
                    </tr>
                    <tr>
                      <td>曾紀嚴</td> <td>楊吉利</td> <td>楊其文</td>{" "}
                      <td>楊思勤</td>
                      <td>詹春陽</td> <td>廖瓊枝</td>
                      <td>趙素貞</td> <td>劉美德</td>
                      <td>劉慶璋</td> <td>練台生</td>
                    </tr>
                    <tr>
                      <td>蔡枝協</td> <td>蔡國智</td>
                      <td>蔡裕明</td> <td>蔡讚雄</td> <td>鄭文煜</td>{" "}
                      <td>鄭錦洲</td>
                      <td>鄭林清良</td> <td>謝木土</td> <td>謝江湖</td>
                      <td>謝春輝</td>
                    </tr>
                    <tr>
                      <td>謝修平</td> <td>韓良圻</td> <td>簡浴沂</td>
                      <td>顏志發</td> <td>顏張琴喨</td> <td>魏倫文</td>
                      <td>魏偉航</td> <td>魏雅庵</td> <td>釋心常</td>{" "}
                      <td>藍許清</td>
                    </tr>
                    <tr>
                      <td>顧立雄</td>
                      <td>許季睦</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default Administration;
