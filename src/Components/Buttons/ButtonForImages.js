import './ButtonForImages.css';

export default function ButtonForImages(props) {
  const btnClickHandler = e => {
    e.preventDefault();
    const section = document.querySelector(props.scrollTo);
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  return (
    <button className="btn__for_images" onClick={btnClickHandler}>
      {props.text}
    </button>
  );
}
