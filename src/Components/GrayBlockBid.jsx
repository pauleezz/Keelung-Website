import React, { Component } from "react";

class GrayBlockBid extends Component {
  render() {
    const { time, title, content, tag, number } = this.props;
    return (
      <div className="d-flex gray-box my-3">
        <div className="d-flex flex-column align-items-center justify-content-center bold col-3">
          <div>{time[0]}</div>
          <div>|</div>
          <div>{time[1]}</div>
        </div>
        <div className="d-flex flex-column justify-content-between col-9">
          <div className="d-flex flex-column justify-content-start">
            <div className="d-flex align-items-center">
              <div
                style={{
                  background: tag[1],
                  color: "#FFFFFF",
                  borderRadius: "50px",
                  width: "40px",
                  height: "20px",
                  fontSize: "10px",
                }}
                className="d-flex align-items-center justify-content-center mr-2"
              >
                {tag[0]}
              </div>
              <div className="bold" style={{ fontSize: "20px" }}>
                {title}
              </div>
            </div>

            <div className="my-1 gray">案號：{number}</div>
          </div>

          <div className="d-flex flex-column gray" style={{ fontSize: "14px" }}>
            {content[0]} <br />
            {content[1]}
          </div>
        </div>
      </div>
    );
  }
}

export default GrayBlockBid;
