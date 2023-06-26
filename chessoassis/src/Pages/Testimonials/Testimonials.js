import { useState } from 'react';
import SectionHeader from '../../Components/SectionHeader/SectionHeader';
import TestimonialsSlider from '../../Components/Sliders/TestimonialsSlider';
import './Testimonials.css';
import SliderArrowBtn from '../../Components/Sliders/SliderArrowBtn';

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const customers = [
    {
      image: '/Assets/Testimonials/cust_1.jpg',
      fname: 'NET REYNOLDS',
      testimonial:
        'My stay at this hotel was absolutely fantastic. The attention to detail and level of service provided by the staff were impeccable. The rooms were elegant and comfortable, and the amenities exceeded my expectations. I highly recommend this hotel to anyone looking for a memorable experience.',
      rating: 5,
    },
    {
      image: '/Assets/Testimonials/cust_2.jpg',
      fname: 'David Laggott',
      testimonial:
        'The service at this hotel exceeded my expectations. The staff went above and beyond to ensure my stay was comfortable and enjoyable. I will definitely be returning!',
      rating: 5,
    },
  ];

  const onClickChangeSlideNext = e => {
    if (currentSlide === customers.length - 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const onClickChangeSlidePrev = e => {
    if (currentSlide === 0) {
      setCurrentSlide(customers.length - 1);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
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
        <SliderArrowBtn
          side={'left'}
          onClickChangeSlide={onClickChangeSlideNext}
        />
        <SliderArrowBtn
          side={'right'}
          onClickChangeSlide={onClickChangeSlidePrev}
        />
        <img
          src="/Assets/Testimonials/testimonials_bg.jpg"
          alt="testimonials-bg"
        />
        <div className="testimonials__container _container">
          <TestimonialsSlider
            customers={customers}
            currentSlide={currentSlide}
          />
        </div>
      </div>
    </section>
  );
}
