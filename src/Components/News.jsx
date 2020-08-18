import React, { Component } from 'react';

class News extends Component {
    render() {
        return (
          <div className="big-block d-flex">
            <div
              id="carouselExampleControls"
              class="carousel slide col-6 news-slide"
              data-ride="carousel"
            >
              <ol class="carousel-indicators">
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="0"
                  class="active"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="1"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="2"
                ></li>
              </ol>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                    class="d-block w-100"
                    src="https://picsum.photos/250/250?random=1"
                    alt="First slide"
                  />
                  <div class="carousel-caption d-none d-md-block">
                    <h5>...</h5>
                    <p>...</p>
                  </div>
                </div>
                <div class="carousel-item">
                  <img
                    class="d-block w-100"
                    src="https://picsum.photos/250/250?random=1"
                    alt="Second slide"
                  />
                  <div class="carousel-caption d-none d-md-block">
                    <h5>...</h5>
                    <p>...</p>
                  </div>
                </div>
                <div class="carousel-item">
                  <img
                    class="d-block w-100"
                    src="https://picsum.photos/250/250?random=1"
                    alt="Second slide"
                  />
                  <div class="carousel-caption d-none d-md-block">
                    <h5>...</h5>
                    <p>...</p>
                  </div>
                </div>
              </div>
              <a
                class="carousel-control-prev"
                href="#carouselExampleControls"
                role="button"
                data-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Previous</span>
              </a>
              <a
                class="carousel-control-next"
                href="#carouselExampleControls"
                role="button"
                data-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
            <div className="col-6">
              <div className="d-flex flex-column align-items-end justify-content-center home-title mb-3">
                <span className="home-title-gray">NEWS</span>
                <span className="home-title-green">訊息快報</span>
              </div>
            </div>
          </div>
        );
    }
}

export default News;