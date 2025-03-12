const initialState = {
    products: [],
    categories: null,
    pagination: {},
};

interface actionProps {
    type: string;
    content: string[];
    pageNumber: number;
    pageSize: number;
    totalElements: number;
    totalPages: number;
    lastPage: boolean;
}

const productReducer = (state = initialState, action: actionProps) => {
    switch (action.type) {
        case "FETCH_PRODUCTS":
            return {
                ...state,
                products: action.content,
                pagination: {
                    pageNumber: action.pageNumber,
                    pageSize: action.pageSize,
                    totalElements: action.totalElements,
                    totalPages: action.totalPages,
                    lastPage: action.lastPage,
                },
            };

        default:
            return {
                ...state,
            };
    }
};

export default productReducer;
