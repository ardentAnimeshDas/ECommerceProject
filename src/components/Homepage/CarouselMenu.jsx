import React, { useState } from 'react';
import '../../css/Carousel.css';

const CarouselMenu = () => {
  const images = [
    'Images/smartwatch.png',
    'Images/iphone.png',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    console.log("Animesh")
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <>
      <div className="custom-carousel-container col">
        <button className="carousel-button" onClick={prevSlide}>Prev</button>
        <div className="carousel-slide">
          <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
        </div>
        <button className="carousel-button" onClick={nextSlide}>Next</button>
      </div>
    </>
  );
};

export default CarouselMenu;
