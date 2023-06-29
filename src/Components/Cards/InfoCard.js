import ButtonForWhite from '../Buttons/ButtonForWhite';
import './InfoCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function InfoCard({
  style,
  icon,
  title,
  text,
  btnText,
  btnScrollTo,
}) {
  return (
    <div className="info__card " style={style}>
      <div className="info__card_content">
        <FontAwesomeIcon icon={icon} className="info__card_icon" />
        <h3>{title}</h3>
        <p>{text}</p>
        <ButtonForWhite text={btnText} scrollTo={btnScrollTo} />
      </div>
    </div>
  );
}
