import { useState } from 'react';
import './HotelCard.css';
import LocationLabel from '../Location/LocationLabel';
import CardLabel from './CardLabel';

export default function HotelCard({ openSlider, hotel }) {
  const [isHovered, setIsHovered] = useState(false);

  const mouseEnterHandler = e => {
    setIsHovered(true);
  };

  const mouseLeaveHandler = e => {
    setIsHovered(false);
  };

  const onClickHandler = e => {
    openSlider(hotel);
  };

  return (
    <div
      className="card _ibg"
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      onClick={onClickHandler}
    >
      <div className={`card__label ${isHovered ? 'show' : ''} `}>
        <CardLabel text={hotel.name} noOfStars={hotel.stars} />
      </div>
      <LocationLabel text={hotel.location} isHovered={isHovered} />
      <img src={hotel.mainImg} alt="Background" />
    </div>
  );
}
