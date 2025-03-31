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

export const addToCart =
    (data, qty = 1, toast) =>
    (dispatch, getState) => {
        const { products } = getState().products;
        const getProduct = products.find(
            (item) => item.productId === data.productId
        );

        const isQuantityExist = getProduct.quantity >= qty;

        if (isQuantityExist) {
            dispatch({ type: "ADD_CART", payload: { ...data, quantity: qty } });

            toast.success(
                `${data?.productName} added to the cart successfully!`
            );

            localStorage.setItem(
                "cartItems",
                JSON.stringify(getState().carts.cart)
            );
        } else {
            toast.error(`${data?.productName} is out of stock!`);
        }
    };

// toast, currentQuantity, setCurrentQuantity;

export const increaseCartQuantity =
    (data, toast, currentQuantity, setCurrentQuantity) =>
    (dispatch, getState) => {
        const { cart } = getState().carts;
        const item = cart.find((item) => item.productId === data.productId);

        console.log(data);
        console.log(getState());

        if (!item) {
            console.error("Error: Item not found in cart", data);
            toast.error("Item not found in cart!");
            return;
        }

        const newQuantity = currentQuantity + 1;

        setCurrentQuantity(newQuantity);

        dispatch({
            type: "INCREASE_QUANTITY",
            payload: item,
        });

        localStorage.setItem(
            "cartItems",
            JSON.stringify(getState().carts.cart)
        );

        toast.success(`Increased ${data.productName} to ${newQuantity}!`);

        // const isQuantityExist = getProduct.quantity >= currentQuantity + 1;

        // if (!item) {
        //     const newQuantity = currentQuantity + 1;
        //     setCurrentQuantity(newQuantity);

        //     dispatch({
        //         type: "ADD_CART",
        //         payload: { ...data, quantity: newQuantity },
        //     });

        //     localStorage.setItem(
        //         "cartItems",
        //         JSON.stringify(getState().carts.cart)
        //     );

        //     // toast.success("+1");
        // } else {
        //     toast.error("Quantity Reached to Limit!");
        // }
    };

export const decreaseCartQuantity =
    (data, toast, currentQuantity, setCurrentQuantity) =>
    (dispatch, getState) => {
        const { cart } = getState().carts;
        const item = cart.find((item) => item.productId === data.productId);

        if (!item) {
            toast.error("Item not found in cart!");
            return;
        }

        const newQuantity = currentQuantity - 1;
        setCurrentQuantity(newQuantity);

        dispatch({
            type: "DECREASE_QUANTITY",
            payload: item,
        });

        localStorage.setItem(
            "cartItems",
            JSON.stringify(getState().carts.cart)
        );

        toast.success(
            `Decreased ${data.productName} from ${currentQuantity} to ${newQuantity}`
        );
    };

export const removeFromCart = (data, toast) => (dispatch, getState) => {
    const { cart } = getState().carts;
    const item = cart.find((item) => item.productId === data.productId);

    if (!item) {
        toast.error("Item is not found in cart!");
        return;
    }

    dispatch({
        type: "REMOVE_CART",
        payload: item,
    });

    toast.success(`${data.productName} removed from cart successfully!`);
    localStorage.setItem("cartItems", JSON.stringify(getState().carts.cart));
};

export default fetchProducts;
