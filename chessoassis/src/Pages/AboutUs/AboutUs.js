import { useState } from 'react';
import './AboutUs.css';
import SectionHeader from '../../Components/SectionHeader/SectionHeader';
import InfoCard from '../../Components/Cards/InfoCard';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SliderArrowBtn from '../../Components/Sliders/SliderArrowBtn';

export default function AboutUs() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const cardsData = [
    {
      title: 'Unrivaled Customer Satisfaction',
      description:
        'Our top priority is ensuring your utmost satisfaction, providing personalized service and exceeding your expectations at every turn.',
      icon: 'fas fa-user-tie',
    },
    {
      title: 'Seamless Booking Experience',
      description:
        'Enjoy a user-friendly platform, hassle-free reservations, and personalized customer support for a smooth journey.',
      icon: 'fas fa-computer-mouse',
    },
    {
      title: 'Unbeatable Value',
      description:
        'Experience exceptional value with competitive prices, exclusive discounts, and special perks for our valued guests.',
      icon: 'fas fa-hand-holding-dollar',
    },
    {
      title: 'Luxurious Accommodations',
      description:
        'Discover a selection of luxurious accommodations tailored to your preferences, ensuring a comfortable and unforgettable stay.',
      icon: 'fas fa-star',
    },
    {
      title: 'World-Class Dining',
      description:
        'Savor exquisite cuisine prepared by renowned chefs, offering a diverse range of culinary delights to tantalize your taste buds.',
      icon: 'fas fa-utensils',
    },
    {
      title: 'Unforgettable Experiences',
      description:
        'Immerse yourself in unforgettable experiences, from exciting tours and activities to relaxing spa treatments and more.',
      icon: 'fas fa-face-smile-beam',
    },
  ];

  const onClickChangeSlideNext = e => {
    console.log('next');
    setCurrentSlide(currentSlide + 1);
  };

  const onClickChangeSlidePrev = e => {
    setCurrentSlide(currentSlide - 1);
  };

  return (
    <section className="about__section">
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
        {currentSlide !== cardsData.length - 3 && (
          <SliderArrowBtn
            side={'right'}
            onClickChangeSlide={onClickChangeSlideNext}
          />
        )}
        <img src="/Assets/About/about_bg.jpg" alt="about-bg" />
        <div className="about__container _container">
          <div className="about__content">
            {cardsData.map((card, index) => (
              <InfoCard
                key={index}
                style={{
                  transform: `translateX(${-currentSlide * 106}%)`,
                }}
                icon={card.icon}
                title={card.title}
                text={card.description}
                btnText={'see reviews'}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
