import Stars from '../Stars/Stars';
import './TestimonialsSlider.css';

export default function TestimonialsSlider({ customers, currentSlide }) {
  return (
    <div className="testimonials__slide_wrapper">
      {customers.map((customer, index) => {
        return (
          <div
            className="testimonials__slide"
            key={index}
            style={{
              transform: `translateX(${(index - currentSlide) * 100}%)`,
            }}
          >
            <div className="testimonials__slide_img _ibg">
              <img src={customer.image} alt="customer-img"></img>
            </div>
            <div className="testimonials__slide_content">
              <div className="testimonials__slide_title">{customer.fname}</div>
              <div className="testimonials__slide_text">
                "{customer.testimonial}"
              </div>
              <div className="testimonials__slide_stars">
                <Stars noOfStars={customer.rating} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
