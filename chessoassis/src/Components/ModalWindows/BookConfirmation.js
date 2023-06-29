import './BookConfirmation.css';

export default function BookConfirmation({ text, children }) {
  return (
    <div className="bookConfirmation__wrapper">
      <div className="bookConfirmation__content">
        <div className="bookConfirmation__text">{text}</div>
        {children}
      </div>
    </div>
  );
}
