import React, { Component } from "react";
import "../CSS/Home.css";

class CrowdIcon extends Component {
  render() {
    const { icon_img, text, href, colnum, hint1, hint2, hint3,hint4} = this.props;
    const a = `d-flex align-items-center justify-content-center ${colnum}`;

    return (
      <div className={a} style={{display: 'inline'}}>
        <button className="icon_crowd_but my-3">
          <div className="d-flex flex-column align-items-center justify-content-center">
            <a href={href}>
              <img src={`/pictures/${icon_img}`} style={{ width: "50%" }} />
              <div className="" style={{fontSize:"x-large"}}>
                {text}
              </div>
              <div className="crowd_mask">
                <div style={{fontSize:"x-large"}}>{text}</div>
                <div className="crowd_mask_col">
                    <li style={{float:"left"}}>{hint1}</li>
                    <li style={{float:"left"}}>{hint2}</li>
                    <li style={{float:"left"}}>{hint3}</li>
                    <li style={{float:"left"}}>{hint4}</li>
                </div>          
            </div>
            </a>
          </div>
        </button>
      </div>
    );
  }
}
export default CrowdIcon;
