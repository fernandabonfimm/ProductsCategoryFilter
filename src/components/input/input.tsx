import React from "react";
import InputProps from "../../interfaces/components/inputProps";
import './styles.css'

const Input: React.FC<InputProps> = ({
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <div className="flexCol">
      <label className="labelInput">{label}</label>
      <input
        className="inputClass"
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
export default Input;
