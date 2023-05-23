import { RouteObject, createBrowserRouter } from "react-router-dom";
import HomePage from "./views/HomePage/Homepage";
import LoginPage from "./views/Auth/LoginPage/LoginPage";

export const paths = {
    home: "/",
    login: "/login",
};

export const routes: RouteObject[] = [
    {
        path: paths.home,
        element: <HomePage />,
    },
    {
        path: paths.login,
        element: <LoginPage />,
    }
];

export const router = createBrowserRouter(routes);