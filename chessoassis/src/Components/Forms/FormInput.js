import './FormInput.css';

export default function FormInput({ label, type, id, placeholder, required }) {
  return (
    <div className="form__input_container">
      <div className="form__input_label--wrapper">
        <label htmlFor="f-name">{label}</label>
      </div>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
}
