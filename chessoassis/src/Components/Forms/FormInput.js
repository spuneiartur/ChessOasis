import InputErrorBox from '../ErrorBoxes/InputErrorBox';
import './FormInput.css';

export default function FormInput({
  label,
  type,
  id,
  placeholder,
  required,
  errorMessage = undefined,
  defaultValue = undefined,
  min = undefined,
  max = undefined,
  onChange = undefined,
  onFocus = undefined,
  onBlur = undefined,
  error = false,
}) {
  return (
    <div className="form__input_container">
      {/* <InputErrorBox message={errorMessage} /> */}
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
