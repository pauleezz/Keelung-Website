import React, { Component } from 'react';

class FullWidthBlock extends Component {
    render() {
        return (
            <div
            className={
              `bg-light-block py-${this.props.py} my-${this.props.my} ` +
              this.props.className
            }
            style={{ background: "#F7F7F7" }}
          >
            {this.props.children}
          </div>
        );
    }
}

export default FullWidthBlock;