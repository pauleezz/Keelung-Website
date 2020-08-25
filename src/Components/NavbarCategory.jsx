import React, { Component } from "react";

class NavbarCategory extends Component {
  render() {
    const {categories, colnum} = this.props;
    

    function renderCatregories(categories) {
      return categories.map((category) => (
        <div className={colnum}>
          <a className="dropdown-item green-item" href={category[1]}>
            &gt;&emsp;{category[0]}
          </a>
        </div>
      ));
    }
    return (
      <>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            {this.props.category}
          </a>
          <div
            className="dropdown-menu menu-expand"
            aria-labelledby="navbarDropdown"
          >
            <div className="d-flex col-12 flex-column">{renderCatregories(categories)}</div>
          </div>
        </li>
      </>
    );
  }
}

export default NavbarCategory;
