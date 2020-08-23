import React, { Component } from "react";

class GreenBlockImage extends Component {
  renderServices = (serviceList) =>
    serviceList.map((item) => (
      <div className="d-flex mb-3 green-block w-100">
        <img src={item[0]} className="w-50" />
        <div className="d-flex align-items-center justify-content-center w-50">
          {item[1]}
        </div>
      </div>
    ));
  render() {
    return (
      <div className="d-flex flex-column align-items-center justify-content-center my-5">
        <h1 className=" home-title home-title-green my-4">
          {this.props.title}
        </h1>
        <div className="d-flex flex-wrap col-12">
          {this.renderServices(this.props.serviceList)}
        </div>
      </div>
    );
  }
}

export default GreenBlockImage;
