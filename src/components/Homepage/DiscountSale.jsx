import React, { useState } from "react";
import "../../css/Carousel.css";

const DiscountSale = () => {
  return (
    <>
      <div className="custom-carousel-container col">
        <div className="carousel-slide">
          <img src="Images/iphone.png" alt="iphone" />
        </div>
        <div className="carousel-div">
          <h1>10% OFF</h1>
          <h1>NEW YEAR</h1>
          <h1>SALE</h1>
          <button>SHOP SALE</button>
        </div>
      </div>
    </>
  );
};

export default DiscountSale;
