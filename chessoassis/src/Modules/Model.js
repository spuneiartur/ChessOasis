import hotels from '../Data/hotels.json';
import advantages from '../Data/advantages.json';
import testimonials from '../Data/testimonials.json';

class Model {
  hotels = hotels;
  advantages = advantages;
  testimonials = testimonials;

  getHotels() {
    return this.hotels;
  }

  getAdvantages() {
    return this.advantages;
  }

  getTestimonials() {
    return this.testimonials;
  }

  initApplication(setHotels, setAdvantages, setTestimonials) {
    setHotels(this.hotels);
    setAdvantages(this.advantages);
    setTestimonials(this.testimonials);
  }

  validateInputedName(name, setErrorMessage) {
    if (name.length === 0) {
      setErrorMessage('Please enter your name');
      return false;
    }

    if (name.length < 3) {
      setErrorMessage('Name must be at least 3 characters long');
      return false;
    }

    if (name.split(' ').length < 2) {
      setErrorMessage('Please enter your full name');
      return false;
    }

    return true;
  }
}

export default new Model();
