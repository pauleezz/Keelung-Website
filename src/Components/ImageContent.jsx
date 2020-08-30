import React, { Component } from "react";

class ImageContent extends Component {
  renderhref = (hrefList) =>
    hrefList.map((href) => (
      <div>
        <a href={href[1]} style={{ color: "#1C1C1C" }}>
          {href[0]}
        </a>
        &emsp;{href[2]}&emsp;
      </div>
    ));

  render() {
    const { img, title, href} = this.props;

    return (
      <div>
        <img
          src={img}
          style={{
            width: "100%",
            height: "250px",
            overflow: "hidden",
            display: "block",
            position: "relative",
            zIndex: "0",
          }}
        />

        <div
          style={{
            paddingLeft: "4%",
            borderRadius: "50px",
            width: "40%",
            height: "100px",
            fontSize: "18px",
            backgroundImage:
              "linear-gradient(to left, rgba(0,0,0,0), rgba(255,255,255,100))",
            position: "absolute",
            zIndex: "1",
            top: "180px",
            left: "10%",
            overflow: "hidden",
          }}
          className="d-flex flex-column"
        >
          <span style={{ fontSize: "38px" }}>{title}</span>
          <div className="d-flex">{this.renderhref(href)}</div>
        </div>
      </div>
    );
  }
}

export default ImageContent;

// margin: 20px 0;
// 	width: 300px;
// 	height: 100px;
// 	line-height: 100px;
// 	border: 1px solid #ccc;
// 	font-size: 24px;
// 	font-weight: 900;
// 	text-align: center;
// border-radius: 50px;
