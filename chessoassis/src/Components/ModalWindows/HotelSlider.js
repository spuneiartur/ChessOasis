import './HotelSlider.css';
import img from '../../Assets/Hotels/Sensei Lanai Hawaii/img1.jpg';

export default function HotelSlider(props) {
  return (
    <div className="slider__background">
      <div className="slider">
        <button className="btn__left"></button>
        <button className="btn__right"></button>
        <div className="slider__content _ibg">
          <img src={img} alt="hotel" className="slider__img" />
        </div>
        <div className="slider__dots">
          <span className="slider__dot"></span>
        </div>
      </div>
    </div>
  );
}
