import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./ProductReducer";
import { thunk } from "redux-thunk";

const store = configureStore({
    reducer: {
        products: productReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
    preloadedState: {},
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
