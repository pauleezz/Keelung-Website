import React, { Component } from "react";

class ImageBlock extends Component {
  render() {
    const { src, title, content, href } = this.props;

    return (
      <div className="col-12 col-xl-6">
        <div
          className="d-flex align-items-center justify-content-center gray-box small-shadow px-3 py-3 my-3 mx-3"
          style={{ height: "auto", minHeight: "180px", overflow:"hidden" }}
        >
          <div class="d-flex align-items-center justify-content-center col-3">
            <img src={src} style={{ width: "95%", minWidth: "100px"}} />
          </div>

          <div
            className="d-flex flex-column justify-content-between mx-1 col-8"
          >
            <div style={{ fontSize: "22px", fontWeight: "bold" }}>{title}</div>
            <div style={{ fontSize: "14px" }}>{content}</div>
          </div>
          <div className="triangle mx-2 col-1"></div>
        </div>
      </div>
    );
  }
}

export default ImageBlock;
