import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productReducer";
import { thunk } from "redux-thunk";
import errorReducer from "./errorReducer";

const store = configureStore({
    reducer: {
        errors: errorReducer,
        products: productReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
    preloadedState: {},
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
