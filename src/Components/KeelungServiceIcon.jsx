import React, { Component } from "react";
import "../CSS/Home.css";

class KeelungServiceIcon extends Component {
  render() {
    const { icon_img, text, href, colnum, hint1, hint2, hint3,hint4} = this.props;
    const a = `d-flex align-items-center justify-content-center ${colnum}`;

    return (
      <div className={a} style={{display: 'inline'}}>
        <button className="icon_but my-3">
          <div className="d-flex flex-column align-items-center justify-content-center">
            <a href={href}>
              <img src={`/pictures/${icon_img}`} style={{ width: "50%" }} />
              <div className="" style={{ fontWeight: "bold", fontSize:"x-large"}}>
                {text}
              </div>
              <div className="mask">
                <span>{hint1}</span>
                <span>{hint2}</span>
                <span>{hint3}</span>
                <span>{hint4}</span>
              </div>
            </a>
          </div>
        </button>
      </div>
    );
  }
}
export default KeelungServiceIcon;
