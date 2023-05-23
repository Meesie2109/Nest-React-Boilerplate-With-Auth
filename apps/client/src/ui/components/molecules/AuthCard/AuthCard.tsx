import $ from "./AuthCard.module.scss";

type Props = {
  children: React.ReactNode;
};

const AuthCard = ({ children }: Props) => {
  return (
    <section className={$.auth_card}>
      <div className={$.content}>
        {children}
      </div>
    </section>
  );
};

export default AuthCard;