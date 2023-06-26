import './ButtonForWhite.css';

export default function ButtonForWhite({ text, style, scrollTo }) {
  const btnClickHandler = e => {
    e.preventDefault();
    const section = document.querySelector(scrollTo);
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  return (
    <div className="button__for_white" style={style}>
      <button onClick={btnClickHandler}>{text}</button>
    </div>
  );
}
