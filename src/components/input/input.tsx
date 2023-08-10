import React from "react";
import InputProps from "../../interfaces/components/inputProps";
const Input: React.FC<InputProps> = ({
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <div>
      <label>{label}</label>
      <input
        className="border-2 border-gray-400"
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
