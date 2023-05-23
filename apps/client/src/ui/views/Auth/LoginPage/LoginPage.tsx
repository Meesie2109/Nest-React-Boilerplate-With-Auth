import Button from "../../../components/atoms/Button/Button";
import InputField from "../../../components/atoms/InputField/InputField";
import AuthCard from "../../../components/molecules/AuthCard/AuthCard";

import $ from "./LoginPage.module.scss";

const LoginPage: React.FunctionComponent = () => {
  document.title = "Login";

  const error = "Invalid credentials";

  return (
    <>
      <section className={$.container}>
        <AuthCard>
        {error && <p className={$.error}>{error}</p>}
          <h1>Login</h1>
          <h3>Welcome back! login to continue</h3>
          <form action="POST" onSubmit={() => console.log("hello")}>
              <InputField
                id="username"
                type="text"
                name="username"
                placeholder="Username"
                maxLength={50}
              />
              <InputField
                id="password"
                type="password"
                name="password"
                placeholder="Password"
                maxLength={50}
              />
              <Button type="submit">Login</Button>
          </form>
        </AuthCard>
        <p className={$.disclaimer}>ⓒ 2023 all rights preserved</p>
      </section>
    </>
  );
};

export default LoginPage;