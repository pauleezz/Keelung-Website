import React, { Component } from "react";

class GrayBlock extends Component {
  render() {
    const { time, title, content } = this.props;
    return (
      <div className="d-flex gray-box my-3">
        <div className="d-flex flex-column align-items-center justify-content-center bold col-3">
          <div>{time[0]}</div>
          <div>|</div>
          <div>{time[1]}</div>
        </div>
        <div className="d-flex flex-column justify-content-between col-9">
          <div className="bold" style={{ fontSize: "20px" }}>
            {title}
          </div>
          <div className="d-flex flex-column gray">
            資格條件:
            <br />
            {content}
          </div>
        </div>
      </div>
    );
  }
}

export default GrayBlock;
