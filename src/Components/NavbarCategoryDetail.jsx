import React, { Component } from "react";

class NavbarCategoryDetail extends Component {
  render() {
    const { categories, detail } = this.props;

    function renderCatregories(categories) {
      return categories.map(
        (category) => {
          return (
            <div
              className="d-flex flex-column align-items-center justify-content-center mx-4"
              style={{ width: "auto" }}
            >
              <div className="green-item mb-2">&gt; {category[0]}</div>
              <div className="d-flex align-items-center justify-content-center row w-100">
                {category[1].map((item) => {
                  return (
                    <div className={category[2]}>
                      <div className="">
                        <div
                          className="d-flex align-items-center justify-content-center my-1"
                          style={{ width: "130px", fontSize: "14px" }}
                        >
                          <a
                            href={item[1]}
                            style={{
                              color: "#707070",
                              textDecoration: "none",
                              width: "100%",
                            }}
                          >
                            {item[0]}
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        }

        //
      );
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
            <div className="d-flex align-items-start">
              {renderCatregories(categories)}
            </div>
          </div>
        </li>
      </>
    );
  }
}

export default NavbarCategoryDetail;
