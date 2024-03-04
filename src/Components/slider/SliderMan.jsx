import React, { Component } from "react";
import img1 from "../../assets/images/team-1.jpg";
import img2 from "../../assets/images/team-2.jpg";
import img3 from "../../assets/images/team-3.jpg";
import img4 from "../../assets/images/team-4.jpg";

export default class SliderMan extends Component {
  state = {
    images: [img1, img2, img3, img4],
    currentIndex: 0,
  };

  goToPrevious = () => {
    this.setState((prevState) => ({
      currentIndex:
        prevState.currentIndex === 0
          ? prevState.images.length - 1
          : prevState.currentIndex - 1,
    }));
  };

  goToNext = () => {
    this.setState((prevState) => ({
      currentIndex:
        prevState.currentIndex === prevState.images.length - 1
          ? 0
          : prevState.currentIndex + 1,
    }));
  };

  stopCarousel = () => {
    clearInterval(this.interval);
    console.log("Carousel stopped");
  };

  startCarousel = () => {
    this.interval = setInterval(this.goToNext, 5000);
    console.log("Carousel started");
  };

  componentDidMount() {
    this.interval = setInterval(this.goToNext, 5000);
    console.log("Component mounted");
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    console.log("Component unmounted");
  }

  render() {
    const { images, currentIndex } = this.state;

    return (
      <>
        <div className="w-50 m-auto">
          <img src={images[currentIndex]} alt="current" />
        </div>
        <div className="row row-cols-4 w-50 m-auto mb-3">
          <button
            type="button"
            onClick={this.goToPrevious}
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
            onClick={this.goToNext}
          >
            right
          </button>
        </div>
      </>
    );
  }
}
