import './ModalSlider.css';
import HotelSlider from '../Sliders/HotelSlider';

export default function ModalSlider({ closeSlider, hotel }) {
  return (
    <div className="modal__background" onClick={closeSlider}>
      <HotelSlider hotel={hotel} />
    </div>
  );
}
