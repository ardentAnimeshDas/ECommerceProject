import React, { useState } from "react";
import "../../css/Carousel.css";
import "../../css/CarouselFooter.css";

const CarouselFooter = () => {
  return (
    <>
      <div id="carouselContent" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner" role="listbox">
        <div className="carousel-item active text-center p-4">
          <p>lorem ipsum (imagine longer text)</p>
        </div>
        <div className="carousel-item text-center p-4">
          <p>lorem ipsum (imagine longer text)</p>
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselContent"
        role="button"
        data-slide="prev"
      >
        <span
          className="carousel-control-prev-icon"
          aria-hidden="true"
        ></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselContent"
        role="button"
        data-slide="next"
      >
        <span
          className="carousel-control-next-icon"
          aria-hidden="true"
        ></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
    </>
  );
};

export default CarouselFooter;
