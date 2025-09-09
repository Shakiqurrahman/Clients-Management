import { Provider } from "react-redux";
import { RouterProvider } from "react-router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./redux/store";
import { router } from "./Routes/Routes";

function App() {
    return (
        <>
            <PersistGate persistor={persistor}>
                <Provider store={store}>
                    <RouterProvider router={router} />
                    <ToastContainer position="top-right" autoClose={3000} />
                </Provider>
            </PersistGate>
        </>
    );
}

export default App;
