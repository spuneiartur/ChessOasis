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
}

export default new Model();
