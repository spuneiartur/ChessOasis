import { useState } from 'react';
import SectionHeader from '../../Components/SectionHeader/SectionHeader';
import TestimonialsSlider from '../../Components/Sliders/TestimonialsSlider';
import './Testimonials.css';
import SliderArrowBtn from '../../Components/Sliders/SliderArrowBtn';

export default function Testimonials({ data }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const onClickChangeSlideNext = e => {
    setCurrentSlide(currentSlide + 1);
  };

  const onClickChangeSlidePrev = e => {
    setCurrentSlide(currentSlide - 1);
  };

  return (
    <section
      className="testimonials__section section"
      id="testimonials-section"
    >
      <SectionHeader
        title={'Guest Testimonials'}
        text={'Hear What Our Visitors Have to Say about ChessOasis!'}
      />
      <div className="testimonials__bg _ibg">
        {currentSlide !== 0 && (
          <SliderArrowBtn
            side={'left'}
            onClickChangeSlide={onClickChangeSlidePrev}
          />
        )}
        {currentSlide !== data.length - 1 && (
          <SliderArrowBtn
            side={'right'}
            onClickChangeSlide={onClickChangeSlideNext}
          />
        )}
        <img
          src="/Assets/Testimonials/testimonials_bg.jpg"
          alt="testimonials-bg"
        />
        <div className="testimonials__container _container">
          <TestimonialsSlider customers={data} currentSlide={currentSlide} />
        </div>
      </div>
    </section>
  );
}
