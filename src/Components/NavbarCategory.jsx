import React, { Component } from "react";

class NavbarCategory extends Component {
  render() {
    const categories = this.props.categories;

    function renderCatregories(categories) {
      return categories.map((category) => (
        <a className="dropdown-item" href="#">
          {category}
        </a>
      ));
    };
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
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            {renderCatregories(categories)}
          </div>
        </li>
      </>
    );
  }
}

export default NavbarCategory;
