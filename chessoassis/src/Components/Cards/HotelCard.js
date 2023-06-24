import { useState } from 'react';
import './HotelCard.css';
import mainImg from '../../Assets/Hotels/Sensei Lanai Hawaii/main.jpg';
import LocationLabel from '../Location/LocationLabel';
import CardLabel from './CardLabel';

export default function HotelCard(props) {
  const [isHovered, setIsHovered] = useState(false);

  const mouseEnterHandler = e => {
    setIsHovered(true);
  };

  const mouseLeaveHandler = e => {
    setIsHovered(false);
  };

  return (
    <div
      className="card _ibg"
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
    >
      <div className={`card__label ${isHovered ? 'show' : ''} `}>
        <CardLabel text={'Sensei Lanai, A Four Seasons Resort'} noOfStars={3} />
      </div>
      <LocationLabel text={'Hawaii'} isHovered={isHovered} />
      <img src={mainImg} alt="Background" />
    </div>
  );
}
