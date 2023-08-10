import React from "react";
import InputSelectProps from "../../interfaces/components/inputSelectProps";
import './styles.css'

const InputSelect: React.FC<InputSelectProps> = ({
  label,
  name,
  value,
  onChange,
  options,
}) => {
  return (
    <div className="flexCol">
      <label className="labelInput">{label}</label>
      <select
        className="inputClass"
        name={name}
        value={value}
        onChange={onChange}
      >
        {options.map((option) => (
          <option key={option._id} value={option.name}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default InputSelect;
