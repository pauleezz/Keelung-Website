import React, { Component } from "react";

import ImageContent from "../Components/ImageContent.jsx";
import Footer from "../Components/Footer.jsx";
import FullWidthBlock from "../Components/FullWidthBlock.jsx";

class KeelungIntro extends Component {
  render() {
    return (
      <div>
        <ImageContent
          img="/pictures/keelung-intro/img_bg.png"
          title="基隆簡介"
          href={[
            ["首頁", "/", "/"],
            ["發現基隆", "/", "/"],
            ["基隆簡介", "/"],
          ]}
        />
        <div className="app">
          <div className="d-flex row big-block" style={{ maxHeight: "720px" }}>
            <div className="d-flex flex-column align-items-center justify-content-center col-12 col-lg-6">
              <img
                src="/pictures/keelung-intro/keelung-intro-1.png"
                style={{ maxWidth: "60%", margin: "30px" }}
              />
              <img
                src="/pictures/keelung-intro/keelung-intro-2.png"
                style={{ maxWidth: "60%", margin: "30px" }}
              />
            </div>
            <div className="d-flex flex-column align-items-center justify-content-center col-12 col-lg-6">
              <div className="d-flex justify-content-start home-title home-title-green my-3 w-100">
                基隆簡介
              </div>
              <div>
                &emsp;基隆市原名雞籠，位於台灣本島最北端，清朝時改名基隆，國民政府來台後設省轄市，全市總面積為132.76平方公里，95%為丘陵地形，三面背山，正面臨海，擁有條件優越的天然深水港灣。
                <br />
                <br />
                　　&emsp;基隆一帶曾經是台灣最大煤礦產地，基隆開港後，除了漁業外，礦業及運輸成為港埠最重要的商業活動。追溯台灣鐵道史，多半以劉銘傳興建基隆到台北段客貨運鐵路為台灣第一條鐵路，其實台灣真正的第一條鐵路，是由八斗子煤礦至基隆海濱的運煤鐵路。最早興建的第二條鐵路也在基隆，台灣最重要的幾項商品煤礦、茶葉、樟腦等都必需經由基隆港運輸，不難想見當時基隆在全台的經濟地位有多麼關鍵。
                <br />
                <br />
                　　&emsp;基隆港全台聞名，港區範圍直入市中心區，是港灣城市中少見的特例。基隆目前共有七個行政區域，另有七個附屬島嶼，分別為和平島、中山仔嶼、桶盤嶼、基隆嶼、彭佳嶼、棉花嶼及花瓶嶼，其中和平島(舊社寮島)、中山仔嶼、桶盤嶼三島今已連為一體，即今日所稱和平島，各區域和島嶼依隨山、海、河、港而有不同的景致與遊賞路線。
              </div>
            </div>
          </div>
          <FullWidthBlock
            py="5"
            my="3"
            className="col-12 d-flex justify-content-center align-items-center"
          >
            <div className="d-flex row">
              <div className="d-flex col-12 col-lg-6 my-3">
                <div className="d-flex flex-column align-items-center justify-content-center col-4">
                  <img
                    src="/pictures/keelung-intro/badge.png"
                    style={{ width: "100%" }}
                  />
                  <div className="home-title-green mt-3 bold">基隆市徽</div>
                </div>
                <div
                  className="d-flex flex-column align-items-center justify-content-center col-8"
                  style={{ fontSize: "14px" }}
                >
                  本市市徽的藍色缺口圓環代表基隆自然環境港埠。黃綠色山形，象徵基隆係一綿延丘陵地。
                  <br />
                  <br />
                  貨櫃船形「基隆」兩字，象徵基隆主要港市人文環境。
                  <br />
                  又象徵著隨著航運演進，基隆必然會發展成台灣最大貨櫃吞吐港。
                </div>
              </div>
              <div className="d-flex col-12 col-lg-6 my-3">
                <div className="d-flex flex-column align-items-center justify-content-center col-4">
                  <img
                    src="/pictures/keelung-intro/song.png"
                    style={{ width: "100%" }}
                  />
                  <div className="home-title-green mt-3 bold">基隆市市歌</div>
                </div>
                <div
                  className="d-flex flex-column align-items-center justify-content-center col-8"
                  style={{ fontSize: "14px" }}
                >
                  美麗基隆雄踞北台灣　依山傍海壯闊的港灣　中正公園觀音菩薩展慈顏　海門天險巍峨古砲保民安啊～
                  <br />
                  朝思暮想基隆是我的故鄉
                  <br />
                  <br />
                  鷹翔九霄嘯傲北海岸　碧波萬頃國際船艦通航　廟口夜市海鮮小吃遠飄香　
                  慶讚中元萬點水燈長夜光芒啊～ 魂牽夢縈　我願與你永相伴
                </div>
              </div>
            </div>
          </FullWidthBlock>
          <div className="d-flex row big-block">
            <div className="d-flex col-12 col-lg-6 my-3">
              <div className="d-flex flex-column align-items-center justify-content-center col-4">
                <img
                  src="/pictures/keelung-intro/tree.png"
                  style={{ width: "100%" }}
                />
                <div className="home-title-green mt-3 bold">基隆市樹</div>
              </div>
              <div className="d-flex flex-column align-items-center justify-content-center col-8">
                <div
                  class="d-flex justify-content-start bold w-100 mb-3"
                  style={{ fontSize: "20px" }}
                >
                  楓香
                </div>
                <div style={{ fontSize: "14px" }}>
                  本市之市樹為楓香，屬於金縷梅科楓樹屬之落葉大喬木，葉互生，三至七個掌狀淺裂，雌雄異花，頭狀花序。楓香極為高大，生長速度快、樹形呈現自然形態之圓錐三角形，饒富觀賞。
                </div>
              </div>
            </div>
            <div className="d-flex col-12 col-lg-6 my-3">
              <div className="d-flex flex-column align-items-center justify-content-center col-4">
                <img
                  src="/pictures/keelung-intro/flower.png"
                  style={{ width: "100%" }}
                />
                <div className="home-title-green mt-3 bold">基隆市花</div>
              </div>
              <div className="d-flex flex-column align-items-center justify-content-center col-8">
                <div
                  class="d-flex justify-content-start bold w-100 mb-3"
                  style={{ fontSize: "20px" }}
                >
                  紫薇
                </div>
                <div style={{ fontSize: "14px" }}>
                  本市之市花為紫薇，屬於千屈菜科，落葉喬木，幹及枝光滑，俗名百日紅，即指花期甚長之意。花於夏季綻開，桃、赤紫及白色等皆有，枝幹成自然彎曲，狀態伸展，樹容極為特殊。
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex flex-column row big-block">
            <div className="d-flex my-3">
              <div className="d-flex flex-column col-5">
                <img
                  src="/pictures/keelung-intro/bird.png"
                  style={{ width: "100%" }}
                />
                <div className="d-flex align-items-center justify-content-center home-title-green mt-3 bold">
                  基隆市鳥
                </div>
              </div>
              <div className="d-flex flex-column col-7">
                <div
                  class="d-flex justify-content-start bold w-100 mb-3"
                  style={{ fontSize: "20px" }}
                >
                  老鷹
                </div>
                <div style={{ fontSize: "14px" }}>
                  本市之市鳥為老鷹，又名來葉、厲翼、黑鳶，往昔從台灣頭到台灣尾，自低海拔山區、平至海邊，只要抬頭看天空，必能見其在高空盤旋。
                  <br />
                  <br />
                  成鳥全身大致為暗褐色，羽綠淡褐色。頭部、腹面有淡褐色縱斑。尾羽略長，有不明顯之淡褐色橫斑。飛行時，雙翼狹長，尾略呈開剪形。幼鳥則體色較淡，有明顯之斑點。常出現於海岸、河口、湖泊、港口地帶，基隆港為目前最容易觀察、親近和欣賞的地點，也因此，老鷹為基隆市野鳥學會之會鳥。目前為野生動物保育法公告之保育類動物，現僅存不及百隻。
                </div>
              </div>
            </div>
            <div className="d-flex my-3">
              <div className="d-flex flex-column col-5">
                <img
                  src="/pictures/keelung-intro/fish.png"
                  style={{ width: "100%" }}
                />
                <div className="d-flex align-items-center justify-content-center home-title-green mt-3 bold">
                  基隆市魚
                </div>
              </div>
              <div className="d-flex flex-column col-7">
                <div
                  class="d-flex justify-content-start bold w-100 mb-3"
                  style={{ fontSize: "20px" }}
                >
                  黑鯛
                </div>
                <div style={{ fontSize: "14px" }}>
                  本市之市魚為黑鯛，學名為Acanthopagrus schlegelii
                  ，又名烏格、黑格、厚唇 ，棲息深度在3 - 50
                  公尺，分布於西太平洋區，包括日本、韓國、台灣及大陸沿海等地，台灣地區主要在東部、北部、西部及離島之澎湖海域。
                  <br />
                  <br />
                  黑鯛屬於溫、熱帶沿岸雜食性底棲魚類，全年均產，尤以秋季至翌年春季之肉質較佳，為各地魚市場上常見的高級食用魚，味道鮮美。喜棲於砂泥底之內灣水域，有時會進入河口。對鹽分及水溫的適應能力極強，可以在任何鹽度水體中飼養，水溫介於l0
                  ~ 32℃時仍能適應生存，幼魚期全為雄性，到3-4年生才轉變為雌性。
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default KeelungIntro;
