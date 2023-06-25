import './SliderDots.css';

export default function SliderDots(props) {
  const dots = [];
  for (let i = 0; i < props.count; i++) {
    dots.push(<span className="slider__dot" key={i}></span>);
  }

  return <div className="slider__dots">{dots}</div>;
}
