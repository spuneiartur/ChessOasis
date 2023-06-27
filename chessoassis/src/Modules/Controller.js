import { useState, useEffect } from 'react';
import './Controller.css';
import Welcome from '../Pages/Welcome/Welcome';
import Hotels from '../Pages/Hotels/Hotels';
import ModalSlider from '../Components/ModalWindows/ModalSlider';
import Deals from '../Pages/Deals/Deals';
import AboutUs from '../Pages/AboutUs/AboutUs';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import BookNow from '../Pages/BookNow/BookNow';
import Testimonials from '../Pages/Testimonials/Testimonials';
import Footer from '../Components/Footers/Footer';
import model from './Model';

// This exports the whole icon packs for Brand and Solid and Regular.
library.add(fas, far, fab);

function Controller() {
  // States
  const [isSliderOpen, setIsSliderOpen] = useState(false);
  const [hotels, setHotels] = useState(model.getHotels());
  const [currentHotel, setCurrentHotel] = useState({});
  const [advantages, setAdvantages] = useState(model.getAdvantages());
  const [testimonials, setTestimonials] = useState(model.getTestimonials());

  const openSlider = hotel => {
    setCurrentHotel(hotel);
    setIsSliderOpen(true);

    console.log(currentHotel);
    console.log(hotel);
  };

  const closeSlider = e => {
    if (e.currentTarget === e.target) {
      setIsSliderOpen(false);
    }
  };

  return (
    <div className="App wrapper min-h-screen block">
      {isSliderOpen && (
        <ModalSlider closeSlider={closeSlider} hotel={currentHotel} />
      )}
      <Welcome />
      <Hotels openSlider={openSlider} hotels={hotels} />
      <Deals />
      <AboutUs data={advantages} />
      <BookNow />
      <Testimonials data={testimonials} />
      <Footer />
    </div>
  );
}

export default Controller;
