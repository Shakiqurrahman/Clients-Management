import { RouterProvider } from "react-router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { router } from "./Routes/Routes";

function App() {
    return (
        <>
            <RouterProvider router={router} />
            <ToastContainer position="top-right" autoClose={3000} />
        </>
    );
}

export default App;
