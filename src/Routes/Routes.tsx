import { createBrowserRouter } from "react-router";
import Employees from "../pages/Employees";
import Home from "../pages/Home";
import Login from "../pages/Login";
import ResetPassword from "../pages/ResetPassword";
import MainLayout from "./MainLayout";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/employees",
                element: <Employees />,
            },
        ],
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/reset-password",
        element: <ResetPassword />,
    },
    // {
    //     path: "/sign-up",
    //     element: <SignUp />,
    // },
]);
