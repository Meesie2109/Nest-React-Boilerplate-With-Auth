import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./views/HomePage/Homepage";
import LoginPage from "./views/Auth/LoginPage/LoginPage";
import RegisterPage from "./views/Auth/RegisterPage/RegisterPage";
import validateToken from "../core/utils/validateToken";

const auth = await validateToken();

export default () => {
  return (
    <BrowserRouter>
      <Routes>
        {auth && (
          <>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Navigate to={"/"} />} />
            <Route path="/register" element={<Navigate to={"/"} />} />
          </>
        )}
        {!auth && (
          <>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
};