import './LocationLabel.css';
import { FaLocationDot } from 'react-icons/fa6';

export default function LocationLabel(props) {
  return (
    <div className="container ">
      <FaLocationDot className="icon" />
      <p className="location">{props.text}</p>
    </div>
  );
}
