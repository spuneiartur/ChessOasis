import './ComputedBookPrice.css';
import AnimationDots from '../LoadingAnimations/AnimationDots';

export default function ComputedBookPrice({
  price,
  currency,
  animationIsActive,
}) {
  return (
    <div className="book__form_price--container">
      <span className="book__form_price--text">computed price: </span>
      {animationIsActive && (
        <span className="book__form_price--value">Waiting for data </span>
      )}
      {animationIsActive && <AnimationDots />}
      {!animationIsActive && <span>{price + ' ' + currency}</span>}
    </div>
  );
}
