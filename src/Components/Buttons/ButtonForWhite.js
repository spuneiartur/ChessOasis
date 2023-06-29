import './ButtonForWhite.css';

export default function ButtonForWhite({
  text,
  style,
  scrollTo = undefined,
  onClick = undefined,
}) {
  const btnClickHandler = e => {
    e.preventDefault();
    if (scrollTo === undefined) return;
    const section = document.querySelector(scrollTo);
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const onClickHandler = onClick ? onClick : btnClickHandler;

  return (
    <div className="button__for_white" style={style}>
      <button onClick={onClickHandler}>{text}</button>
    </div>
  );
}
