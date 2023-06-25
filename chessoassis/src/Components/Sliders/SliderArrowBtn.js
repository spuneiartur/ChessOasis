import './SliderArrowBtn.css';

export default function SliderArrowBtn(props) {
  return (
    <button
      className={`btn__slider ${props.side}`}
      onClick={props.onClickChangeSlide}
    >
      <i className={`arrow__slider ${props.side}`}></i>
    </button>
  );
}
