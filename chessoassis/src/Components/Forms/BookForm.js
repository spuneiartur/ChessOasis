import React, { useEffect, useState } from 'react';
import ButtonForWhite from '../Buttons/ButtonForWhite';
import AnimationDots from '../LoadingAnimations/AnimationDots';
import './BookForm.css';
import ComputedBookPrice from '../ComputedPrice/ComputedBookPrice';
import InputErrorBox from '../ErrorBoxes/InputErrorBox';

export default function BookForm({
  hotels,
  setSelectedHotel,
  formData,
  setFormData,
  validateName,
}) {
  const [animationIsActive, setAnimationIsActive] = useState(true);
  const [error, setError] = useState({});
  const [price, setPrice] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const hotelSelectOnChange = e => {
    let selectedHotel = hotels.find(hotel => hotel.id === +e.target.value);
    selectedHotel = selectedHotel ? selectedHotel : {};

    setSelectedHotel(selectedHotel);
  };

  const nameInputOnBlur = e => {
    const isError = !validateName(e.target.value, setErrorMessage);
    if (isError) {
      e.currentTarget.value = errorMessage;
    }
    setError(prevState => {
      return { ...prevState, name: isError };
    });
  };

  const nameOnFocus = e => {
    if (error.name) {
      e.currentTarget.value = '';
      setError(prevState => {
        return { ...prevState, name: false };
      });
    }
  };

  return (
    <form className="book__form">
      <h2 className="book__form_title">Book Now</h2>
      <label htmlFor="f-name">Full Name</label>
      <input
        type="text"
        id="f-name"
        name="fname"
        required
        className={error.name ? 'error' : undefined}
        onBlur={nameInputOnBlur}
        onFocus={nameOnFocus}
        onChange={e => setFormData({ ...formData, name: e.target.value })}
      />
      <label htmlFor="select-hotels">Select preferred hotel:</label>

      <select
        name="hotels"
        id="select-hotels"
        required
        defaultValue={''}
        onChange={hotelSelectOnChange}
      >
        <option value="0">--Please choose an option--</option>
        {hotels.map(hotel => (
          <option key={hotel.id} value={hotel.id}>
            {hotel.name}
          </option>
        ))}
      </select>
      <label htmlFor="check-in">Check-in:</label>
      <input type="date" id="input-date" name="date" required />
      <label htmlFor="select-nights">Number of nights:</label>
      <select name="nights" id="select-nights" required defaultValue={'7'}>
        <option value="3">3</option>
        <option value="7">7</option>
        <option value="10">10</option>
        <option value="14">14</option>
        <option value="30">30</option>
      </select>
      <label htmlFor="input-guests">Number of guests</label>
      <input
        type="number"
        id="input-guests"
        required
        defaultValue={2}
        min="1"
        max="3"
      />
      <div className="checkbox__container">
        <label htmlFor="breakfast-checkbox">
          <input type="checkbox" id="breakfast-checkbox" className="error" />
          <span className="checkbox__custom"></span>Breakfast
        </label>
      </div>
      <ComputedBookPrice />
      <ButtonForWhite
        text={'Submit'}
        style={{ margin: '50px 0 0 0', width: '100%' }}
      />
    </form>
  );
}
