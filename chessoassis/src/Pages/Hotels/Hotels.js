import React, { useState } from 'react';
import HotelCard from '../../Components/Cards/HotelCard';
import SectionHeader from '../../Components/SectionHeader/SectionHeader';
import ModalWindow from '../../Components/ModalWindows/ModalWindow';
import HotelSlider from '../../Components/Sliders/HotelSlider';
import './Hotels.css';

export default function Hotels({ hotels }) {
  const [isSliderOpen, setIsSliderOpen] = useState(false);
  const [currentHotel, setCurrentHotel] = useState({});

  const openSlider = hotel => {
    setCurrentHotel(hotel);
    setIsSliderOpen(true);
  };

  const closeSlider = e => {
    if (e.currentTarget === e.target) {
      setIsSliderOpen(false);
    }
  };
  return (
    <section className="hotels__section section" id="hotels-section">
      {isSliderOpen && (
        <ModalWindow
          closeSlider={closeSlider}
          children={<HotelSlider hotel={currentHotel} />}
        />
      )}
      <div className="hotels__container _container">
        <SectionHeader
          title={'Our hotels'}
          text={`The most searched hotels in ${new Date().toLocaleString(
            'default',
            { month: 'long' }
          )}`}
        />
        <div className="hotels__grid">
          {hotels.map((hotel, index) => (
            <HotelCard key={index} openSlider={openSlider} hotel={hotel} />
          ))}
        </div>
      </div>
    </section>
  );
}
