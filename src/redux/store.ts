import { configureStore } from "@reduxjs/toolkit";
import {
    FLUSH,
    PAUSE,
    PERSIST,
    persistStore,
    PURGE,
    REGISTER,
    REHYDRATE,
} from "redux-persist";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import { baseApi } from "./api/baseApi";
import authReducer from "./features/auth/authSlice";
import resetPasswordReducer from "./features/auth/resetPasswordSlice";

const createPersistConfig = (key: string) => ({
    key,
    storage,
});

const persistedAuthReducer = persistReducer(
    createPersistConfig("auth"),
    authReducer
);

// const persistedSalesFormReducer = persistReducer(
//   createPersistConfig("sales"),
//   salesFormReducer
// );

// const persistedReceivingFormReducer = persistReducer(
//   createPersistConfig("receiving"),
//   recivingFormReduer
// );

export const store = configureStore({
    reducer: {
        [baseApi.reducerPath]: baseApi.reducer,
        auth: persistedAuthReducer,
        resetPassword: resetPasswordReducer,
    },

    middleware: (getDefaultMiddlewares) =>
        getDefaultMiddlewares({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }).concat(baseApi.middleware),
    devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
