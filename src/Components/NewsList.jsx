import React, { Component } from 'react';

class NewsList extends Component {

    
    
    render() {
        const {time,title,tag,number, color} = this.props;

        return (
          <div className="d-flex">
            <div
              className="small-circle d-flex align-items-center justify-content-center"
              style={{ background: color }}
            >
              {number}
            </div>
            <div className="mx-3">{time}</div>
            <div className="d-flex flex-column align-items-start">
              <div style={{ background: tag[1], color: "#FFFFFF" }}>
                {tag[0]}
              </div>
              <span style={{ fontWeight: "bold" }}>{title}</span>
            </div>
          </div>
        );
    }
}

export default NewsList;