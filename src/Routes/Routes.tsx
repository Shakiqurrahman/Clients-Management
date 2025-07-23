import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
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
    ],
  },
]);
