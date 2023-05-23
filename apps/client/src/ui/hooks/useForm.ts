import { useState } from "react";

// Get api url from .env file
const api = await import.meta.env.VITE_API_URL;

export default () => {
  const [error, setError] = useState<string | null>(null);

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    handleSubmit(e, "");
  };

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    handleSubmit(e, "signup");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>, type: string) => {
    e.preventDefault();

    // Check if fields are empty
    if (!e.currentTarget.email.value || !e.currentTarget.password.value)
      return setError("Please fill in all fields");

    if (type === "signup" && !e.currentTarget.username.value)
      return setError("Please fill in all fields");

    if (
      type === "signup" &&
      e.currentTarget.password.value !== e.currentTarget.passwordConf.value
    )
      return setError("Passwords do not match");

    const url = type === "signup" ? "signup" : "signin";

    // Fetch to server
    fetch(`${api}/auth/${url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: `${e.currentTarget.email.value}`,
        password: `${e.currentTarget.password.value}`,
        [type ? "name" : ""]: `${e.currentTarget.username?.value}` || "",
      }),
    }).then(async (res) => {
      const data = await res.json();

      if (data.statusCode === 500) {
        // Message when server is down
        setError("Somehting went wrong, please try again later");
      } else if (data.statusCode !== 200 && data.statusCode !== 201) {
        // Message when server is up but something else went wrong
        setError(data.message);
      } else {
        if (type === "signup") {
          setError(null);
          window.location.href = "/login";
        } else {
          // Message when everything is ok
          setError(null);
          localStorage.setItem("token", data.token);
          window.location.href = "/overview";
        }
      }
    });
    return null;
  };

  return {
    error,
    setError,
    handleLogin,
    handleRegister,
  };
};
