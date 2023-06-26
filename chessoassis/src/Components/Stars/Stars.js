import './Stars.css';
import { FaRegStar } from 'react-icons/fa6';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Stars(props) {
  const stars = [];
  for (let i = 0; i < props.noOfStars; i++) {
    stars.push(
      <FontAwesomeIcon icon="fa-solid fa-star" className="star__icon_full" />
    );
  }

  return <div className="stars__container">{stars}</div>;
}

{
  /* <FaRegStar key={i} className="star__icon" /> */
}
