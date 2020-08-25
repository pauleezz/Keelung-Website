import React, { Component } from "react";
import "../CSS/Home.css";

class KeelungServiceIcon extends Component {
  render() {
    const { icon_img, text, href, colnum } = this.props;
    const a = `d-flex align-items-center justify-content-center ${colnum}`;

    return (
      <div className={a} style={{display: 'inline'}}>
        <button className="icon_but my-3">
          <div className="d-flex flex-column align-items-center justify-content-center">
            <a href={href}>
              <img src={`/pictures/${icon_img}`} style={{ width: "40%" }} />
              <div className="" style={{ fontWeight: "bold" }}>
                {text}
              </div>
            </a>
          </div>
        </button>
      </div>
    );
  }
}
export default KeelungServiceIcon;
