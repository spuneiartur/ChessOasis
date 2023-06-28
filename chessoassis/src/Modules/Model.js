import hotelsJSON from '../Data/hotels.json';
import advantagesJSON from '../Data/advantages.json';
import testimonialsJSON from '../Data/testimonials.json';

class Model {
  constructor() {
    this.hotels = hotelsJSON;
    this.advantages = advantagesJSON;
    this.testimonials = testimonialsJSON;
    // Bind the methods to the instance of the class
    this.initApplication = this.initApplication.bind(this);
    this.getHotels = this.getHotels.bind(this);
    this.getAdvantages = this.getAdvantages.bind(this);
    this.getTestimonials = this.getTestimonials.bind(this);
    this.getHotelPrice = this.getHotelPrice.bind(this);
    this.validateInputedName = this.validateInputedName.bind(this);
    this.validateCheckInDate = this.validateCheckInDate.bind(this);
    this.validateGuests = this.validateGuests.bind(this);
    this.validateHotels = this.validateHotels.bind(this);
    this.validateNights = this.validateNights.bind(this);
  }

  initApplication(setHotels, setAdvantages, setTestimonials) {
    setHotels(this.hotels);
    setAdvantages(this.advantages);
    setTestimonials(this.testimonials);
  }

  getHotels() {
    return this.hotels;
  }

  getAdvantages() {
    return this.advantages;
  }

  getTestimonials() {
    return this.testimonials;
  }

  getHotelPrice(hotelId, nights, guests, breakfast) {
    const hotel = this.hotels.find(hotel => hotel.id === +hotelId);
    const price =
      (hotel.price + (breakfast ? hotel.breakfastPrice : 0)) * nights * guests;
    return price;
  }

  validateInputedName(name, setErrorMessage) {
    if (name.length === 0) {
      setErrorMessage(prevState => {
        return { ...prevState, name: 'Please enter your name' };
      });

      return false;
    }

    if (name.length < 3) {
      setErrorMessage(prevState => {
        return { ...prevState, name: 'Name must be at least 3 characters' };
      });
      return false;
    }

    if (name.split(' ').length < 2 || name.split(' ')[1].length === 0) {
      setErrorMessage(prevState => {
        return { ...prevState, name: 'Please enter your full name' };
      });

      return false;
    }

    return true;
  }

  validateInputedName(name) {
    if (name.length === 0) {
      return false;
    }

    if (name.length < 3) {
      return false;
    }

    if (name.split(' ').length < 2 || name.split(' ')[1].length === 0) {
      return false;
    }

    return true;
  }

  validateCheckInDate(date, setErrorMessage) {
    if (date.length === 0) {
      setErrorMessage(prevState => {
        return { ...prevState, checkIn: 'Please enter your check-in date' };
      });
      return false;
    }

    const today = new Date();
    const checkInDate = new Date(date);

    if (checkInDate < today) {
      setErrorMessage(prevState => {
        return { ...prevState, checkIn: 'Check-in date must be in the future' };
      });

      return false;
    }

    return true;
  }

  validateCheckInDate(date) {
    if (date.length === 0) {
      return false;
    }

    const today = new Date();
    const checkInDate = new Date(date);

    if (checkInDate < today) {
      return false;
    }

    return true;
  }

  validateGuests(guests, setErrorMessage) {
    if (!Number.isInteger(guests)) {
      setErrorMessage(prevState => {
        return {
          ...prevState,
          guests: 'Number of guests must be an integer value',
        };
      });
      return false;
    }
    if (guests < 0) {
      setErrorMessage(prevState => {
        return {
          ...prevState,
          guests: 'Number of guests must be a positive value',
        };
      });
      return false;
    }
    if (guests < 1) {
      setErrorMessage(prevState => {
        return { ...prevState, guests: 'Number of guests must be at least 1' };
      });
      return false;
    }
    if (guests > 3) {
      setErrorMessage(prevState => {
        return { ...prevState, guests: 'Number of guests must be at most 3' };
      });
      return false;
    }

    return true;
  }

  validateGuests(guests) {
    if (!Number.isInteger(guests)) {
      return false;
    }
    if (guests < 0) {
      return false;
    }
    if (guests < 1) {
      return false;
    }
    if (guests > 3) {
      return false;
    }

    return true;
  }

  validateHotels(hotelId, setErrorMessage) {
    if (hotelId === -1) {
      setErrorMessage(prevState => {
        return { ...prevState, hotels: 'Please select a hotel' };
      });
      return false;
    }
    return true;
  }

  validateHotels(hotelId) {
    if (hotelId === -1) {
      return false;
    }
    return true;
  }

  validateNights(nights, setErrorMessage) {
    if (nights === -1) {
      setErrorMessage(prevState => {
        return { ...prevState, nights: 'Please select number of nights' };
      });
      return false;
    }
    return true;
  }

  validateNights(nights) {
    if (nights === -1) {
      return false;
    }
    return true;
  }
}

export default new Model();
