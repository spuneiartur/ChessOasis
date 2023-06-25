import React, { useState } from 'react';
import './HotelSlider.css';
import SliderArrowBtn from './SliderArrowBtn';
import SliderDots from './SliderDots';

export default function HotelSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    '../../Assets/Hotels/Sensei Lanai Hawaii/main.jpg',
    '../../Assets/Hotels/Sensei Lanai Hawaii/img1.jpg',
    '../../Assets/Hotels/Sensei Lanai Hawaii/img2.jpg',
    '../../Assets/Hotels/Sensei Lanai Hawaii/img3.jpg',
    '../../Assets/Hotels/Sensei Lanai Hawaii/img4.jpg',
    '../../Assets/Hotels/Sensei Lanai Hawaii/img5.jpg',
  ];

  return (
    <div className="slider">
      <SliderArrowBtn side="left" />
      <SliderArrowBtn side="right" />
      <div className="slider__content _ibg">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="hotel"
            className={`slider__img ${currentSlide === index && 'active'}`}
          />
        ))}
      </div>
      <SliderDots count={3} currentSlide={currentSlide} />
    </div>
  );
}
