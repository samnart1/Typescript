import { Dispatch } from "redux";
import api from "../../api/api";

const fetchProducts = () => async (dispatch: Dispatch) => {
    try {
        const { data } = await api.get(`public/products`);
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
    } catch (error) {
        console.log(error);
    }
};

export default fetchProducts;
