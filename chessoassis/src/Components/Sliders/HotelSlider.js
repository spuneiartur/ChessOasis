import './HotelSlider.css';
import img from '../../Assets/Hotels/Sensei Lanai Hawaii/img1.jpg';
import SliderArrowBtn from './SliderArrowBtn';

export default function HotelSlider(props) {
  return (
    <div className="slider">
      <SliderArrowBtn side="left" />
      <SliderArrowBtn side="right" />
      <div className="slider__content _ibg">
        <img src={img} alt="hotel" className="slider__img" />
      </div>
      <div className="slider__dots">
        <span className="slider__dot"></span>
      </div>
    </div>
  );
}
