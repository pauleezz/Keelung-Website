import React, { Component } from 'react';



class Supervisor extends Component {
  renderName = (name) => {
    return name.map((each) => (
      <>
        <img src={each[1]} style={{ width: "50%" }} />
        <h5 className="my-3">{each[0]}</h5>
      </>
    ));
  };

  renderStudy = (study) => {
    return study.map((each) => <li>{each}</li>);
  };

  renderHistory = (study) => {
    return study.map((each) => <li>{each}</li>);
  };
  render() {
    return (
      <div className="d-flex row">
        <div className="d-flex align-items-center justify-content-center col-12 col-lg-7 my-5">
          <div
            className="d-flex flex-column align-items-center justify-content-center"
            style={{ background: "#F7F7F7" }}
          >
            {this.renderName(this.props.name)}
          </div>
        </div>

        <div className="col-12 col-lg-5">
          <div className="bg-white px-5 py-3 my-5">
            <h4 className="my-3">{this.props.name[0][0]}</h4>
            <div className="my-4">
              <h6
                className="b-green-title"
                style={{ borderBottom: "solid 2px #236C0A" }}
              >
                學歷
              </h6>
              <ul>{this.renderStudy(this.props.study)}</ul>
            </div>
            <div className="my-4">
              <h6
                className="b-green-title"
                style={{ borderBottom: "solid 2px #236C0A" }}
              >
                經歷
              </h6>
              <ul>{this.renderHistory(this.props.history)}</ul>
            </div>
          </div>
        </div>
        
      </div>
    );
  }
}

export default Supervisor;