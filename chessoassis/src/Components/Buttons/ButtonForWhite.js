import './ButtonForWhite.css';

export default function ButtonForWhite({ text, style }) {
  return (
    <div className="button__for_white" style={style}>
      <button>{text}</button>
    </div>
  );
}
