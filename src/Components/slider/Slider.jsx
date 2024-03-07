import React, { Component } from "react";
export default class Slider extends Component {
  state = {
    control: false,
  };
  stopCarousel = () => {
    this.setState({ control: false }, () => {
      // console.log(this.state.control);
    });
  };
  startCarousel = () => {
    this.setState({ control: "carousel" }, () => {
      // console.log(this.state.control);
    });
  };
  render() {
    // console.log(this.state.control);
    return (
      <>
        <div
          id="carouselExampleInterval"
          className="carousel slide w-50 m-auto"
          data-bs-ride={this.state.control}
        >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval={1000}>
              <img
                src="https://images.pexels.com/photos/3889818/pexels-photo-3889818.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item" data-bs-interval={1000}>
              <img
                src="https://images.pexels.com/photos/3889818/pexels-photo-3889818.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item" data-bs-interval={1000}>
              <img
                src="https://images.pexels.com/photos/3889818/pexels-photo-3889818.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="d-block w-100"
                alt="..."
              />
            </div>
          </div>
        </div>
        <div className="row row-cols-4 w-50 m-auto mb-3">
          <button
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="prev"
            className="btn btn-info"
          >
            left
          </button>
          <button onClick={this.stopCarousel} className="btn btn-danger">
            stop
          </button>
          <button onClick={this.startCarousel} className="btn btn-success">
            start
          </button>
          <button
            className="btn btn-info"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="next"
          >
            right
          </button>
        </div>
      </>
    );
  }
}
