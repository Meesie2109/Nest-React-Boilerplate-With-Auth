import { RouteObject, createBrowserRouter } from "react-router-dom";
import HomePage from "./views/HomePage/Homepage";
import LoginPage from "./views/Auth/LoginPage/LoginPage";
import RegisterPage from "./views/Auth/RegisterPage/RegisterPage";

export const paths = {
    home: "/",
    login: "/login",
    register: "/register",
};

export const routes: RouteObject[] = [
    {
        path: paths.home,
        element: <HomePage />,
    },
    {
        path: paths.login,
        element: <LoginPage />,
    },
    {
        path: paths.register,
        element: <RegisterPage />,
    }
];

export const router = createBrowserRouter(routes);