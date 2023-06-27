import './ComputedBookPrice.css';
import AnimationDots from '../LoadingAnimations/AnimationDots';

export default function ComputedBookPrice({ price, currency }) {
  return (
    <div className="book__form_price--container">
      <span className="book__form_price--text">computed price:</span>
      <span className="book__form_price--value"> Waiting for data </span>
      <AnimationDots />
    </div>
  );
}
