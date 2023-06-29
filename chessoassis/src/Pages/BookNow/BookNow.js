import React, { useState } from 'react';
import BookForm from '../../Components/Forms/BookForm';
import './BookNow.css';
import SectionHeader from '../../Components/SectionHeader/SectionHeader';
import PreviewCard from '../../Components/Cards/FormDataCard';

export default function BookNow({
  hotels,
  formData,
  setFormData,
  validateName,
  validateCheckIn,
  validateGuests,
  validateHotels,
  validateNights,
  getHotelPrice,
}) {
  const [selectedHotel, setSelectedHotel] = useState({});
  const defaultImg = '/Assets/BookNow/form_img.jpg';

  return (
    <section className="booknow__section section" id="booknow-section">
      <SectionHeader
        title={'Book Now'}
        text={'Secure Your Reservation Today'}
      />
      <div className="booknow__container _container">
        <div className="booknow__content">
          <div className="book__now_image _ibg">
            {Object.keys(selectedHotel).length > 0 ? (
              <img src={selectedHotel.mainImg} alt="booknow" />
            ) : (
              <img src={defaultImg} alt="booknow" />
            )}
          </div>
          <div className="booknow__form_box">
            <BookForm
              hotels={hotels}
              setSelectedHotel={setSelectedHotel}
              formData={formData}
              setFormData={setFormData}
              nightsDefaultValue={7}
              guestsDefaultValue={2}
              breakfastDefaultValue={false}
              validateName={validateName}
              validateCheckIn={validateCheckIn}
              validateGuests={validateGuests}
              validateHotels={validateHotels}
              validateNights={validateNights}
              getHotelPrice={getHotelPrice}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
