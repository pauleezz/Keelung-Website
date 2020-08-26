import React, { Component } from "react";

class ImageContentSection extends Component {
  renderhref = (hrefList) =>
    hrefList.map((href) => (
      <div>
        <a href={href[1]} style={{ color: "#1C1C1C" }}>
          {href[0]}
        </a>
        &emsp;{href[2]}&emsp;
      </div>
    ));

  renderSections = (section) => {
    return section.map((s) => (
      <div
        className="mx-4 my-2 d-flex justify-content-center align-items-center"
      >
        <span>
          <a href={s[1]}>{s[0]}</a>
        </span>
      </div>
    ));
  };
  render() {
    const { img, title, href, sectionList, top } = this.props;
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
            top: "18%",
            left: "10%",
            overflow: "hidden",
          }}
          className="d-flex flex-column"
        >
          <span style={{ fontSize: "38px" }}>{title}</span>
          <div className="d-flex">{this.renderhref(href)}</div>
        </div>
        <div
          className="d-flex align-items-center justify-content-center flex-column"
          style={{ position: "relative", top: top, zIndex: "2" }}
        >
          <div className="green-section d-flex row align-items-center justify-content-center">
            {this.renderSections(sectionList)}
          </div>
        </div>
      </div>
    );
  }
}

export default ImageContentSection;
