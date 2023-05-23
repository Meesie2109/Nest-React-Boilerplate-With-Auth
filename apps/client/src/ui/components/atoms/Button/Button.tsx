import $ from "./Button.module.scss";

type Props = {
  type?: "submit" | "button";
  className?: string; // Individual
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
};

const Button = ({ type = "button", className, onClick, children }: Props) => {
  return (
    <button
      type={type}
      className={`${$[type]} ${className ? $[className] : ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;