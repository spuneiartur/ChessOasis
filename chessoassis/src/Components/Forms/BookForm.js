import React, { useEffect, useState } from 'react';
import ButtonForWhite from '../Buttons/ButtonForWhite';
import AnimationDots from '../LoadingAnimations/AnimationDots';
import './BookForm.css';
import ComputedBookPrice from '../ComputedPrice/ComputedBookPrice';
import InputErrorBox from '../ErrorBoxes/InputErrorBox';
import FormInput from './FormInput';
import FormCheckBox from './FormCheckBox';
import FormSelect from './FormSelect';

export default function BookForm({
  title,
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
      <h2 className="book__form_title">{title}</h2>
      <FormInput
        label={'Full Name'}
        type={'text'}
        id={'book__hotel--name'}
        placeholder={'Enter your full name'}
        required={true}
        errorMessage={error.name ? errorMessage : undefined}
        onBlur={nameInputOnBlur}
        onFocus={nameOnFocus}
        onChange={e => setFormData({ ...formData, name: e.target.value })}
        error={error.name}
      />
      <FormSelect
        label={'Select preferred hotel'}
        id={'book__hotel--select'}
        options={hotels}
        onChangeHandler={hotelSelectOnChange}
        children={hotels.map(hotel => (
          <option key={hotel.id} value={hotel.id}>
            {hotel.name}
          </option>
        ))}
      />

      <FormInput
        label={'Check-in date'}
        type={'date'}
        id={'book__hotel--check-in'}
        required={true}
      />
      <FormSelect
        label={'Number of nights'}
        id={'book__hotel--nights'}
        required={true}
        defaultValue={'7'}
        children={[3, 7, 10, 14, 30].map((n, index) => (
          <option key={index} value={n}>
            {n}
          </option>
        ))}
      />

      <FormInput
        label={'Number of guests'}
        type={'number'}
        id={'book__hotel--guests'}
        required={true}
        defaultValue={2}
        min="1"
        max="3"
      />
      <FormCheckBox
        label={'Breakfast'}
        id={'book__hotel_checkbox--breakfast'}
      />
      <ComputedBookPrice />
      <ButtonForWhite
        text={'Submit'}
        style={{ margin: '50px 0 0 0', width: '100%' }}
      />
    </form>
  );
}
