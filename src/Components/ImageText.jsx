import React, { Component } from "react";

class ImageText extends Component {
  render() {
    const { title, img } = this.props;
    return (
      <>
        <div className="d-flex flex-column align-items-center justify-content-center">
          <img
            src={img}
            style={{ width: "80%" }}
          />
          {title}
        </div>
      </>
    );
  }
}

export default ImageText;
