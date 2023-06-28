import React, { useEffect, useState } from 'react';
import ButtonForWhite from '../Buttons/ButtonForWhite';
import AnimationDots from '../LoadingAnimations/AnimationDots';
import './BookForm.css';
import ComputedBookPrice from '../ComputedPrice/ComputedBookPrice';

import FormInput from './FormInput';
import FormCheckBox from './FormCheckBox';
import FormSelect from './FormSelect';

export default function BookForm({
  title,
  hotels,
  setSelectedHotel,
  formData,
  setFormData,
  nightsDefaultValue,
  guestsDefaultValue,
  breakfastDefaultValue,
  validateName,
  validateCheckIn,
  validateGuests,
  validateHotels,
  validateNights,
  getHotelPrice,
}) {
  const [animationIsActive, setAnimationIsActive] = useState(false);
  const [error, setError] = useState({});
  const [price, setPrice] = useState(null);
  const [errorMessage, setErrorMessage] = useState({});

  useEffect(() => {
    setAnimationIsActive(true);
    setFormData(prevState => {
      return {
        ...prevState,
        breakfast: breakfastDefaultValue,
        guests: guestsDefaultValue,
        nights: nightsDefaultValue,
      };
    });
  }, []);

  useEffect(() => {
    checkPrice();
  }, [formData]);

  const checkPrice = () => {
    if (error.hotels || error.nights || error.guests) {
      setPrice(null);
      setAnimationIsActive(true);
    } else {
      if (
        validateHotels(formData.hotelId) &&
        validateGuests(formData.guests) &&
        validateNights(formData.nights)
      ) {
        setPrice(
          getHotelPrice(
            formData.hotelId,
            formData.nights,
            formData.guests,
            formData.breakfast
          )
        );
        setAnimationIsActive(false);
      }
    }
  };

  // Name input validation -----------------------------------
  const nameInputOnBlur = e => {
    setError(prevState => {
      return {
        ...prevState,
        name: !validateName(e.target.value, setErrorMessage),
      };
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

  // Check in date validation -----------------------------------
  const checkInputOnBlur = e => {
    setError(prevState => {
      return {
        ...prevState,
        checkIn: !validateCheckIn(e.target.value, setErrorMessage),
      };
    });
  };

  const checkOnFocus = e => {
    if (error.checkIn) {
      e.currentTarget.value = '';
      setError(prevState => {
        return { ...prevState, checkIn: false };
      });
    }
  };

  // No of guests date validation -----------------------------------
  const guestsInputOnBlur = e => {
    setError(prevState => {
      return {
        ...prevState,
        guests: !validateGuests(+e.target.value, setErrorMessage),
      };
    });
  };

  const guestsOnFocus = e => {
    if (error.guests) {
      e.currentTarget.value = 2;
      setError(prevState => {
        return { ...prevState, guests: false };
      });
    }
  };

  // Hotels validation ---------------------------------------------
  const hotelSelectOnChange = e => {
    let selectedHotel = hotels.find(hotel => hotel.id === +e.target.value);
    selectedHotel = selectedHotel ? selectedHotel : {};

    setSelectedHotel(selectedHotel);

    setFormData(prevState => {
      return {
        ...prevState,
        hotelId: selectedHotel.id,
      };
    });

    setError(prevState => {
      return {
        ...prevState,
        hotels: !validateHotels(+e.target.value, setErrorMessage),
      };
    });
  };

  // Number of nights validation -----------------------------------
  const nightsSelectOnChange = e => {
    setFormData(prevState => {
      return {
        ...prevState,
        nights: +e.target.value,
      };
    });

    setError(prevState => {
      return {
        ...prevState,
        nights: !validateNights(+e.target.value, setErrorMessage),
      };
    });
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
        onBlur={nameInputOnBlur}
        onFocus={nameOnFocus}
        onChange={e => setFormData({ ...formData, name: e.target.value })}
        error={error.name}
        errorMessage={error.name ? errorMessage.name : undefined}
      />
      <FormSelect
        label={'Select preferred hotel'}
        id={'book__hotel--select'}
        options={hotels}
        onChange={hotelSelectOnChange}
        children={hotels.map(hotel => (
          <option key={hotel.id} value={hotel.id}>
            {hotel.name}
          </option>
        ))}
        error={error.hotels}
        errorMessage={error.hotels ? errorMessage.hotels : undefined}
      />
      <FormInput
        label={'Check-in date'}
        type={'date'}
        id={'book__hotel--check-in'}
        required={true}
        onBlur={checkInputOnBlur}
        onFocus={checkOnFocus}
        onChange={e => setFormData({ ...formData, checkIn: e.target.value })}
        error={error.checkIn}
        errorMessage={error.checkIn ? errorMessage.checkIn : undefined}
      />
      <FormSelect
        label={'Number of nights'}
        id={'book__hotel--nights'}
        required={true}
        defaultValue={nightsDefaultValue}
        children={[3, 7, 10, 14, 30].map((n, index) => (
          <option key={index} value={n}>
            {n}
          </option>
        ))}
        onChange={nightsSelectOnChange}
        error={error.nights}
        errorMessage={error.nights ? errorMessage.nights : undefined}
      />

      <FormInput
        label={'Number of guests'}
        type={'number'}
        id={'book__hotel--guests'}
        required={true}
        defaultValue={guestsDefaultValue}
        min="1"
        max="3"
        onBlur={guestsInputOnBlur}
        onFocus={guestsOnFocus}
        onChange={e => setFormData({ ...formData, guests: e.target.value })}
        error={error.guests}
        errorMessage={error.guests ? errorMessage.guests : undefined}
      />
      <FormCheckBox
        label={'Breakfast'}
        id={'book__hotel_checkbox--breakfast'}
        defaultValue={breakfastDefaultValue}
        onChange={e =>
          setFormData({ ...formData, breakfast: e.target.checked })
        }
      />
      <ComputedBookPrice
        price={price}
        animationIsActive={animationIsActive}
        currency={'RON'}
      />
      <ButtonForWhite
        text={'Submit'}
        style={{ margin: '50px 0 0 0', width: '100%' }}
      />
    </form>
  );
}
