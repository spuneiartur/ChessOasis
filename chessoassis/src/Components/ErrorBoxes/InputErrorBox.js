import './InputErrorBox.css';

export default function InputErrorBox({ message }) {
  return (
    <div className="error__box_container">
      <div className="error__box">
        <div className="error__box_content">{message}</div>
      </div>
    </div>
  );
}
