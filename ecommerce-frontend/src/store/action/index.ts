import { Dispatch } from "redux";
import api from "../../api/api";

// Define action types
export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";
export const FETCH_PRODUCTS_FAILURE = "FETCH_PRODUCTS_FAILURE";

// Define a Typescript type for action
interface FetchProductsSuccessAction {
    type: typeof FETCH_PRODUCTS_SUCCESS;
    payload: {
        products: any[];
        pageNumber: number;
        pageSize: number;
        totalElements: number;
        totalPages: number;
        lastPage: boolean;
    };
}

interface FetchProductFailureAction {
    type: typeof FETCH_PRODUCTS_FAILURE;
    payload: string;
}

export type ProductActions =
    | FetchProductsSuccessAction
    | FetchProductFailureAction;

// Define the fetchProducts action as a Thunk action
export const fetchProducts = () => {
    return async (dispatch: Dispatch<ProductActions>) => {
        try {
            const { data } = await api.get(`public/products`);
            dispatch({
                type: FETCH_PRODUCTS_SUCCESS,
                payload: {
                    products: data.content,
                    pageNumber: data.pageNumber,
                    pageSize: data.pageSize,
                    totalElements: data.totalElements,
                    totalPages: data.totalPages,
                    lastPage: data.lastPage,
                },
            });
        } catch (error) {
            console.log(error);
            dispatch({
                type: FETCH_PRODUCTS_FAILURE,
                payload: "Failed to fetch products",
            });
        }
    };
};

// export const fetchProducts = async (
//     dispatch: (arg0: {
//         type: string;
//         payload: string[];
//         pageNumber: number;
//         pageSize: number;
//         totalElements: number;
//         totalPages: number;
//         lastPage: boolean;
//     }) => void
// ) => {
//     try {
//         const { data } = await api.get(`public/products`);
//         dispatch({
//             type: "FETCH_PRODUCTS",
//             payload: data.content,
//             pageNumber: data.pageNumber,
//             pageSize: data.pageSize,
//             totalElements: data.totalElements,
//             totalPages: data.totalPages,
//             lastPage: data.lastPage,
//         });
//     } catch (error) {
//         console.log(error);
//     }
// };
