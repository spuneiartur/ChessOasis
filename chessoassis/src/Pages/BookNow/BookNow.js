import React, { useState } from 'react';
import BookForm from '../../Components/Forms/BookForm';
import './BookNow.css';

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
              title={'Book Now'}
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
