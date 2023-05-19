import { RouteObject, createBrowserRouter } from "react-router-dom";
import HomePage from "./views/HomePage/Homepage";

export const paths = {
    home: "/",
};

export const routes: RouteObject[] = [
    {
        path: paths.home,
        element: <HomePage />,
    },
];

export const router = createBrowserRouter(routes);