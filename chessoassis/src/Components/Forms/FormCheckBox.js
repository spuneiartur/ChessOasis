import './FormCheckBox.css';

export default function FormInput({
  label,
  id,
  placeholder,
  required,
  errorMessage = undefined,
}) {
  return (
    <div className="checkbox__container">
      <label htmlFor="breakfast-checkbox">
        <input type="checkbox" id="breakfast-checkbox" className="error" />
        <span className="checkbox__custom"></span>
        {label}
      </label>
    </div>
  );
}
