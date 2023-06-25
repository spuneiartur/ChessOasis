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

  const onClickRightHandler = () => {
    if (currentSlide === images.length - 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
      console.log(currentSlide);
    }
  };

  const onClickLeftHandler = () => {
    if (currentSlide === images.length - 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide - 1);
      console.log(currentSlide);
    }
  };

  return (
    <div className="hotel__slider">
      <SliderArrowBtn side="left" onClickChangeSlide={onClickLeftHandler} />
      <SliderArrowBtn side="right" onClickChangeSlide={onClickRightHandler} />
      <div className="hotel__slider_content _ibg">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="hotel"
            className={`hotel__slider_img`}
            style={{
              transform: `translateX(${(index - currentSlide) * 100}%)`,
            }}
          />
        ))}
      </div>
      <SliderDots
        count={images.length}
        currentSlide={currentSlide}
        changeSlide={setCurrentSlide}
      />
    </div>
  );
}
