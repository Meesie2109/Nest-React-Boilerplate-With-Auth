import $ from "./InputField.module.scss";

type Props = {
  id: string;
  type: string;
  name: string;
  placeholder?: string;
  maxLength?: number;
  value?: string;
};

const InputField = ({
  id,
  type,
  name,
  placeholder,
  maxLength,
  value,
}: Props) => {
  return (
    <input
      id={$[id]}
      className={$.input}
      type={type}
      name={name}
      placeholder={placeholder}
      maxLength={maxLength}
      value={value}
    />
  );
};

export default InputField;