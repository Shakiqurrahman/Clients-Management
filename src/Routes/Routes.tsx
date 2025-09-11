import { createBrowserRouter } from "react-router";
import Employees from "../pages/Employees";
import Home from "../pages/Home";
import Login from "../pages/Login";
import ResetPassword from "../pages/ResetPassword";
import MainLayout from "./MainLayout";
import AdminProtected from "./protected/AdminProtected";
import PrivateRoute from "./protected/PrivateRoute";
import RequiredAuth from "./protected/RequiredAuth";

export const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <PrivateRoute>
                <MainLayout />
            </PrivateRoute>
        ),
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/employees",
                element: (
                    <AdminProtected>
                        <Employees />
                    </AdminProtected>
                ),
            },
        ],
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/reset-password",
        element: (
            <RequiredAuth>
                <ResetPassword />
            </RequiredAuth>
        ),
    },
    // {
    //     path: "/sign-up",
    //     element: <SignUp />,
    // },
]);
