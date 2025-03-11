import { FETCH_PRODUCTS_SUCCESS, ProductActions } from "../action";

const initialState = {
    products: null,
    categories: null,
    pagination: {},
};

export const ProductReducer = (
    state = initialState,
    action: ProductActions
) => {
    switch (action.type) {
        case FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                products: action.payload.products,
                pagination: {
                    pageNumber: action.payload.pageNumber,
                    pageSize: action.payload.pageSize,
                    totalElements: action.payload.totalElements,
                    totalPages: action.payload.totalPages,
                    lastPage: action.payload.lastPage,
                },
            };
        default:
            return state;
    }
};
