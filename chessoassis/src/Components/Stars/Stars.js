import './Stars.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Stars(props) {
  const stars = [];
  for (let i = 0; i < props.noOfStars; i++) {
    stars.push(
      <FontAwesomeIcon
        icon="fa-solid fa-star"
        className="star__icon_full"
        key={i}
      />
    );
  }

  return <div className="stars__container">{stars}</div>;
}
