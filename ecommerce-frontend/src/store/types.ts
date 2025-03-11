import { ThunkAction, ThunkDispatch } from "@reduxjs/toolkit";
// import { Action } from "redux";
import { ProductReducer } from "./reducer/ProductReducer";
import { ProductActions } from "./action";

// Define RootState based on reduces
export type RootState = ReturnType<typeof ProductReducer>;

// Define AppDispatch for useDispatch
export type AppDispatch = ThunkDispatch<RootState, void, ProductActions>;

// Define a Thunk action type
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    ProductActions
>;
