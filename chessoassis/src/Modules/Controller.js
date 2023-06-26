import { useState } from 'react';
import './Controller.css';
import Welcome from '../Pages/Welcome/Welcome';
import Hotels from '../Pages/Hotels/Hotels';
import ModalSlider from '../Components/ModalWindows/ModalSlider';
import Deals from '../Pages/Deals/Deals';
import AboutUs from '../Pages/AboutUs/AboutUs';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import BookNow from '../Pages/BookNow/BookNow';
import Testimonials from '../Pages/Testimonials/Testimonials';

// This exports the whole icon packs for Brand and Solid.
library.add(fas, far);

function Controller() {
  const [isSliderOpen, setIsSliderOpen] = useState(false);

  const openSlider = () => {
    setIsSliderOpen(true);
  };

  const closeSlider = e => {
    if (e.currentTarget === e.target) {
      setIsSliderOpen(false);
    }
  };

  return (
    <div className="App wrapper min-h-screen block">
      {isSliderOpen && <ModalSlider closeSlider={closeSlider} />}
      <Welcome />
      <Hotels openSlider={openSlider} />
      <Deals />
      <AboutUs />
      <BookNow />
      <Testimonials />
    </div>
  );
}

export default Controller;
