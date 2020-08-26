import React, { Component } from "react";

class Circle extends Component {
  render() {
      const {title, radius, backgroundcolor, backgroundimage, mx, width} = this.props;
      const a = `d-flex flex-column align-items-center justify-content-center mx-${mx}`;
    return (
      <>
        <div className={a}>
          <div
            className="d-flex align-items-center justify-content-center circle mb-3"
            style={{
              width: radius,
              height: radius,
              background: backgroundcolor,
            }}
          >
            <img
              src={backgroundimage}
              style={{ width , color: "#65B017" }}
            />
          </div>
          <span style={{ fontSize: "19px" }}>{title}</span>
        </div>
      </>
    );
  }
}

export default Circle;
