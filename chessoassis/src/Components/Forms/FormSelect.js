import './FormSelect.css';
import InputErrorBox from '../ErrorBoxes/InputErrorBox';

export default function FormSelect({
  label,
  id,
  required,
  defaultValue = null,
  children,
  onChange,
  errorMessage,
  error = false,
}) {
  return (
    <div className="form__select_container relative">
      {error && <InputErrorBox message={errorMessage} />}
      <div className="form__select_label--wrapper">
        <label htmlFor="select-hotels">{label}:</label>
      </div>

      <select
        id={id}
        required={required}
        defaultValue={defaultValue}
        onChange={onChange}
      >
        <option value={-1}>--Please choose an option--</option>
        {children}
      </select>
    </div>
  );
}
