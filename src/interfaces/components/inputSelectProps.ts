interface InputSelectProps {
  label: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  options: Array<{
    _id: string;
    name: string;
  }>;
}
export default InputSelectProps;
