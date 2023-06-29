import { useState, useEffect } from 'react';
import './Controller.css';
import Welcome from '../Pages/Welcome/Welcome';
import Hotels from '../Pages/Hotels/Hotels';
import ModalSlider from '../Components/ModalWindows/ModalWindow';
import Deals from '../Pages/Deals/Deals';
import AboutUs from '../Pages/AboutUs/AboutUs';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import BookNow from '../Pages/BookNow/BookNow';
import Testimonials from '../Pages/Testimonials/Testimonials';
import Footer from '../Components/Footers/Footer';
import HotelSlider from '../Components/Sliders/HotelSlider';
import model from './Model';

// This exports the whole icon packs for Brand and Solid and Regular.
library.add(fas, far, fab);

// TO DO: Add a section title to form
// TO DO: Form submition (You will be contacted soon 😁)
function Controller() {
  // States

  const [hotels, setHotels] = useState([]);

  const [advantages, setAdvantages] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    model.initApplication(setHotels, setAdvantages, setTestimonials);
  }, []);

  return (
    <div className="App wrapper min-h-screen block">
      <Welcome />
      <Hotels hotels={hotels} />
      <Deals />
      <AboutUs data={advantages} />
      <BookNow
        hotels={hotels}
        formData={formData}
        setFormData={setFormData}
        validateName={model.validateInputedName}
        validateCheckIn={model.validateCheckInDate}
        validateGuests={model.validateGuests}
        validateHotels={model.validateHotels}
        validateNights={model.validateNights}
        getHotelPrice={model.getHotelPrice}
      />
      <Testimonials data={testimonials} />
      <Footer />
    </div>
  );
}

export default Controller;
