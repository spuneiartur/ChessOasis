import React, { useState } from 'react';
import './HotelSlider.css';
import SliderArrowBtn from './SliderArrowBtn';
import SliderDots from './SliderDots';

export default function HotelSlider({ hotel }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const onClickRightHandler = () => {
    if (currentSlide === hotel.images.length - 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const onClickLeftHandler = () => {
    if (currentSlide === 0) {
      setCurrentSlide(hotel.images.length - 1);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <div className="hotel__slider">
      <SliderArrowBtn side="left" onClickChangeSlide={onClickLeftHandler} />
      <SliderArrowBtn side="right" onClickChangeSlide={onClickRightHandler} />
      <div className="hotel__slider_content _ibg">
        {hotel.images.map((img, index) => (
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
        count={hotel.images.length}
        currentSlide={currentSlide}
        changeSlide={setCurrentSlide}
      />
    </div>
  );
}
