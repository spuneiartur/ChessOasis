import './ModalWindow.css';

export default function ModalWindow({ closeSlider, children }) {
  return (
    <div className="modal__background" onClick={closeSlider}>
      {children}
    </div>
  );
}
