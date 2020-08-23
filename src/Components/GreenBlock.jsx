import React, { Component } from 'react';

class GreenBlock extends Component {
  renderServices = (serviceList) =>
    serviceList.map((item) => (
      <div
        className={
          "d-flex align-items-center justify-content-center green-block col-" +
          this.props.colnum
        }
      >
        <div className="mb-2"></div>
        {item}
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

export default GreenBlock;