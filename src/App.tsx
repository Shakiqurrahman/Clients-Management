import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./redux/store";
import { router } from "./Routes/Routes";

function App() {
    return (
        <>
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <RouterProvider router={router} />
                    <Toaster position="top-center" />
                </PersistGate>
            </Provider>
        </>
    );
}

export default App;
