import React, { Component } from "react";

class GreenBlockWithoutTitle extends Component {
  renderServices = (serviceList) =>
    serviceList.map((item) => (
      <div
        className={
          "d-flex align-items-center justify-content-center mb-2 col-" +
          this.props.colnum
        }
      >
        <div className="d-flex align-items-center justify-content-center green-block ">
          {item}
        </div>
      </div>
    ));
  render() {
    return (
      <div className="d-flex flex-column align-items-center justify-content-center my-5">
        <div className="d-flex flex-wrap col-12">
          {this.renderServices(this.props.serviceList)}
        </div>
      </div>
    );
  }
}

export default GreenBlockWithoutTitle;
