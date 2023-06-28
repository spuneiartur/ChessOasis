import './FormCheckBox.css';
import { useState } from 'react';

export default function FormInput({
  label,
  id,
  placeholder,
  required,
  defaultValue,
  errorMessage = undefined,
  onChange,
}) {
  const [checked, setChecked] = useState(defaultValue);

  const handleInputChange = e => {
    onChange(e);
    setChecked(e.target.checked);
  };
  return (
    <div className="checkbox__container">
      <label htmlFor="breakfast-checkbox">
        <input
          type="checkbox"
          id="breakfast-checkbox"
          checked={checked}
          className="error"
          onChange={handleInputChange}
        />
        <span className="checkbox__custom"></span>
        {label}
      </label>
    </div>
  );
}
