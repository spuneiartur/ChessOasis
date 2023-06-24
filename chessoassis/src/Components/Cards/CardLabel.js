import StarsContainer from '../Stars/Stars';
import './CardLabel.css';

export default function CardLabel(props) {
  return (
    <div className="label">
      <p className="label__text">{props.text}</p>
      <StarsContainer noOfStars={props.noOfStars} />
    </div>
  );
}
