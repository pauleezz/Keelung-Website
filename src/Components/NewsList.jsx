import React, { Component } from "react";

class NewsList extends Component {
  render() {
    const { time, title, tag, number, color } = this.props;

    return (
      <div className="d-flex align-items-center m-3">
        <div className="col-1">
          <div
            className="small-circle d-flex align-items-center justify-content-center"
            style={{ background: color }}
          >
            {number}
          </div>
        </div>

        <div className="mx-3 col-3">{time}</div>
        <div className="d-flex flex-column align-items-start col-8">
          <div
            style={{
              background: tag[1],
              color: "#FFFFFF",
              borderRadius: "50px",
              width: "60px",
              height: "20px",
              fontSize: "10px",
            }}
            className="d-flex align-items-center justify-content-center"
          >
            {tag[0]}
          </div>
          <span style={{ fontWeight: "bold" }}>{title}</span>
        </div>
      </div>
    );
  }
}

export default NewsList;
