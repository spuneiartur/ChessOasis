import './Stars.css';
import { FaRegStar } from 'react-icons/fa6';

export default function Stars(props) {
  const stars = [];
  for (let i = 0; i < props.noOfStars; i++) {
    stars.push(<FaRegStar key={i} className="star__icon" />);
  }

  return <div className="stars__container">{stars}</div>;
}
