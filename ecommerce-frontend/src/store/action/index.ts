import { Dispatch } from "redux";
import api from "../../api/api";

export const fetchProducts =
    (queryString: string) => async (dispatch: Dispatch) => {
        try {
            dispatch({ type: "IS_FETCHING" });
            const { data } = await api.get(`public/products?${queryString}`);
            // console.log("API Response: ", data);

            dispatch({
                type: "FETCH_PRODUCTS",
                content: data.content,
                pageNumber: data.pageNumber,
                pageSize: data.pageSize,
                totalElements: data.totalElements,
                totalPages: data.totalPages,
                lastPage: data.lastPage,
            });
            dispatch({ type: "IS_SUCCESS" });
        } catch (error) {
            console.log(error);
            dispatch({
                type: "IS_ERROR",
                payload:
                    error?.response?.data?.message ||
                    "Failed to fetch products",
            });
        }
    };

export const fetchCategories =
    (queryString: string) => async (dispatch: Dispatch) => {
        try {
            dispatch({ type: "CATEGORY_LOADER" });
            const { data } = await api.get(`public/categories`);
            // console.log("API Response: ", data);

            dispatch({
                type: "FETCH_CATEGORIES",
                content: data.content,
                pageNumber: data.pageNumber,
                pageSize: data.pageSize,
                totalElements: data.totalElements,
                totalPages: data.totalPages,
                lastPage: data.lastPage,
            });
            dispatch({ type: "IS_ERROR" });
        } catch (error) {
            console.log(error);
            dispatch({
                type: "IS_ERROR",
                payload:
                    error?.response?.data?.message ||
                    "Failed to fetch products",
            });
        }
    };

export default fetchProducts;
