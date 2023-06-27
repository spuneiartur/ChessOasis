import { useState } from 'react';
import './AboutUs.css';
import SectionHeader from '../../Components/SectionHeader/SectionHeader';
import InfoCard from '../../Components/Cards/InfoCard';
import SliderArrowBtn from '../../Components/Sliders/SliderArrowBtn';

export default function AboutUs({ data }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const onClickChangeSlideNext = e => {
    console.log('next');
    setCurrentSlide(currentSlide + 1);
  };

  const onClickChangeSlidePrev = e => {
    setCurrentSlide(currentSlide - 1);
  };

  return (
    <section className="about__section section" id="about-section">
      <SectionHeader
        title={'Why Choose Us'}
        text={
          'Experience Unmatched Hospitality and Unforgettable Memories with Us'
        }
      />
      <div className="about__bg _ibg">
        {currentSlide !== 0 && (
          <SliderArrowBtn
            side={'left'}
            onClickChangeSlide={onClickChangeSlidePrev}
          />
        )}
        {currentSlide !== data.length - 3 && (
          <SliderArrowBtn
            side={'right'}
            onClickChangeSlide={onClickChangeSlideNext}
          />
        )}
        <img src="/Assets/About/about_bg.jpg" alt="about-bg" />
        <div className="about__container _container">
          <div className="about__content">
            {data.map((advantage, index) => (
              <InfoCard
                key={index}
                style={{
                  transform: `translateX(${-currentSlide * 106}%)`,
                }}
                icon={advantage.icon}
                title={advantage.title}
                text={advantage.description}
                btnText={'see reviews'}
                btnScrollTo={'#testimonials-section'}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
