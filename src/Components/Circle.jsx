import React, { Component } from "react";

class Circle extends Component {
  render() {
      const {title, radius, backgroundcolor, backgroundimage, mx} = this.props;
      const a = `d-flex flex-column align-items-center justify-content-center mx-${mx}`;
    return (
      <>
        <div className={a}>
          <div
            className="circle mb-3"
            style={{
              width: radius,
              height: radius,
              background: backgroundcolor,
            }}
          ><img src={backgroundimage} className="w-100"/></div>
          <span style={{ fontSize: "19px" }}>{title}</span>
        </div>
      </>
    );
  }
}

export default Circle;
