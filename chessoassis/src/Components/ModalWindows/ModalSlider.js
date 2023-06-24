import './ModalSlider.css';
import HotelSlider from '../Sliders/HotelSlider';

export default function ModalSlider(props) {
  return (
    <div className="modal__background" onClick={props.closeSlider}>
      <HotelSlider />
    </div>
  );
}
