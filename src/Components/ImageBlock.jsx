import React, { Component } from 'react';

class ImageBlock extends Component {
    
    render() {
        const {src,title, content, href} = this.props;

        return (
          <div
            className="d-flex align-items-center justify-content-center gray-box small-shadow px-3 py-3 my-3 mx-3 col-12 col-xl-5"
            style={{height:"220px"}}
          >
            <img src={src} className="col-4" style={{width: "25%"}}/>
            <div className="mx-1 col-6">
                <div style={{fontSize: "28px", fontWeight: "bold"}}>{title}</div>
                <div style={{fontSize: "16px"}}>{content}</div>
            </div>
            <div className="triangle mx-2 col-2"></div>
          </div>
        );
    }
}

export default ImageBlock;