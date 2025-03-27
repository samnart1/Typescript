import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productReducer";
import { thunk } from "redux-thunk";
import errorReducer from "./errorReducer";
import { cartReducer } from "./cartReducer";

const cartItems = localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [];

const initialState = {
    carts: { cart: cartItems },
};

const store = configureStore({
    reducer: {
        errors: errorReducer,
        products: productReducer,
        carts: cartReducer,
    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),

    preloadedState: initialState,
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
