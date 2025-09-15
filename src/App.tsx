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
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <RouterProvider router={router} />
                    <ToastContainer position="top-center" autoClose={2500} />
                </PersistGate>
            </Provider>
        </>
    );
}

export default App;
