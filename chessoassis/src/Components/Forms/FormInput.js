import InputErrorBox from '../ErrorBoxes/InputErrorBox';
import './FormInput.css';

export default function FormInput({
  label,
  type,
  id,
  placeholder,
  required,
  defaultValue,
  min,
  max,
  onChange,
  onFocus,
  onBlur,
  errorMessage,
  error = false,
}) {
  return (
    <div className="form__input_container relative">
      {error && <InputErrorBox message={errorMessage} />}
      <div className="form__input_label--wrapper">
        <label htmlFor={id}>{label + ':'}</label>
      </div>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        required={required}
        defaultValue={defaultValue}
        min={min}
        max={max}
        onBlur={onBlur}
        onFocus={onFocus}
        onChange={onChange}
        className={error ? 'error' : ''}
      />
    </div>
  );
}
