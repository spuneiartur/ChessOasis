import Stars from '../Stars/Stars';
import './TestimonialsSlider.css';

export default function TestimonialsSlider({ customers }) {
  return (
    <div className="testimonials__slide">
      <div className="testimonials__slide_img _ibg">
        <img src={customers[0].image} alt="customer-img"></img>
      </div>
      <div className="testimonials__slide_content">
        <div className="testimonials__slide_title">{customers[0].fname}</div>
        <div className="testimonials__slide_text">
          "{customers[0].description}"
        </div>
        <div className="testimonials__slide_stars">
          <Stars noOfStars={customers[0].noOfStars} />
        </div>
      </div>
    </div>
  );
}
