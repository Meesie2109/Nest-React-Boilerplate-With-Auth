import { Link } from "react-router-dom";
import Button from "../../../components/atoms/Button/Button";
import InputField from "../../../components/atoms/InputField/InputField";
import AuthCard from "../../../components/molecules/AuthCard/AuthCard";
import useForm from "../../../hooks/useAuth";

import $ from "./RegisterPage.module.scss";

const RegisterPage: React.FunctionComponent = () => {
  document.title = "Login";

  const { handleRegister, error } = useForm();

  return (
    <>
      <section className={$.container}>
        <AuthCard>
        {error && <p className={$.error}>{error}</p>}
          <h1>Register</h1>
          <h3>Welcome! Create an account to continue</h3>
          <form action="POST" onSubmit={handleRegister}>
              <InputField
                id="username"
                type="text"
                name="username"
                placeholder="Username"
                maxLength={50}
              />
              <InputField
                id="email"
                type="text"
                name="email"
                placeholder="Email"
                maxLength={50}
              />
              <InputField
                id="password"
                type="password"
                name="password"
                placeholder="Password"
                maxLength={50}
              />
              <InputField
                id="passwordConf"
                type="password"
                name="passwordConf"
                placeholder="Confirm password"
                maxLength={50}
              />
              <Button type="submit">Register</Button>
          </form>
          <p className={$.sub}>Already have an account? <Link to={'/login'}>Login</Link> </p>
        </AuthCard>
        <p className={$.disclaimer}>ⓒ 2023 all rights preserved</p>
      </section>
    </>
  );
};

export default RegisterPage;