import './FormSelect.css';

export default function FormSelect({
  label,
  id,
  required,
  defaultValue = null,
  children,
  onChangeHandler,
}) {
  return (
    <div className="form__select_container">
      <div className="form__select_label--wrapper">
        <label htmlFor="select-hotels">{label}:</label>
      </div>

      <select
        id={id}
        required={required}
        defaultValue={defaultValue}
        onChange={onChangeHandler}
      >
        <option value={null}>--Please choose an option--</option>
        {children}
      </select>
    </div>
  );
}
