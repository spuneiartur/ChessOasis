import '/.HotelCards.css';
import mainImg from '../../Assets/Hotels/Sensei Lanai Hawaii/main.jpg';

export default function HotelCards(props) {
  return (
    <div className="card">
      <div className="card__image _ibg">
        <img src={mainImg} className="card__image" alt="Background" />
      </div>
      <div className="card__content"></div>
    </div>
  );
}
