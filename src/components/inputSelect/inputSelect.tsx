import React from "react";
import InputSelectProps from "../../interfaces/components/inputSelectProps";

const InputSelect: React.FC<InputSelectProps> = ({
  label,
  name,
  value,
  onChange,
  options,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <label>{label}</label>
      <select
        className="border-2 border-gray-400"
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
