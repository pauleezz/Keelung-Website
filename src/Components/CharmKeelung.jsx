import React, { Component } from 'react';

class CharmKeelung extends Component {
    render() {
        return (
          <div className="d-flex flex-column align-items-center justify-content-center big-block">
            <div className="d-flex flex-column align-items-center justify-content-center home-title">
              <span className="home-title-gray">THE CHARM OF KEELUNG</span>
              <span className="home-title-green">魅力基隆</span>
            </div>
            <div
              id="carouselExampleControls"
              class="carousel slide w-50"
              data-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                    class="d-block w-100"
                    src="/pictures/Charming Keelung-1.png"
                    alt="First slide"
                  />
                </div>
                <div class="carousel-item">
                  <img
                    class="d-block w-100"
                    src="/pictures/Charming Keelung-2.png"
                    alt="First slide"
                  />
                </div>
                <div class="carousel-item">
                  <img
                    class="d-block w-100"
                    src="/pictures/Charming Keelung-4.png"
                    alt="First slide"
                  />
                </div>
                <div class="carousel-item">
                  <img
                    class="d-block w-100"
                    src="/pictures/Charming Keelung-5.png"
                    alt="First slide"
                  />
                </div>
                <div class="carousel-item">
                  <img
                    class="d-block w-100"
                    src="/pictures/Charming Keelung-6.png"
                    alt="First slide"
                  />
                </div>
                <div class="carousel-item">
                  <img
                    class="d-block w-100"
                    src="/pictures/Charming Keelung-7.png"
                    alt="First slide"
                  />
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
              <div className="d-flex justify-content-end">
                <button className="small-green-button button-charm small-shadow">
                  更多內容
                </button>
              </div>
            </div>
          </div>
        );
    }
}

export default CharmKeelung;