import { useDispatch, useSelector } from "react-redux";
import { FaExclamationTriangle } from "react-icons/fa";
import { RootState } from "../../store/reducer/store";
import Filter from "./Filter";
import useProductFilter from "../../hooks/useProductFilter";
import { useEffect } from "react";
import { fetchCategories } from "../../store/action/index";
import Loader from "../shared/Loader";
import Paginations from "../shared/Paginations";
import ProductCard from "../shared/ProductCard";

// interface Product {
//     productId: number;
//     productName: string;
//     image: string;
//     description: string;
//     quantity: number;
//     price: number;
//     discount: number;
//     specialPrice: number;
// }

// http://localhost:8080/products?keyword=test&sortby=desc

const Products = () => {
    const { isLoading, errorMessage } = useSelector(
        (state: RootState) => state.errors
    );

    const { products, categories, pagination } = useSelector(
        (state: RootState) => state.products
    );
    const dispatch = useDispatch();

    useProductFilter();

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);

    return (
        <div className="lg:px-14 sm:px-8 px-4 2xl:w-[90%] 2xl::mx-auto">
            <Filter categories={categories ? categories : []} />
            {isLoading ? (
                <Loader text="Please wait..." width="200" />
            ) : errorMessage ? (
                <div className="flex justify-center items-center h-[200px]">
                    <FaExclamationTriangle className="text-slate-800 text-3xl mr-2" />
                    <span className="text-slate-800 text:lg font-medium">
                        {errorMessage}
                    </span>
                </div>
            ) : (
                <>
                    <div className="min-h-[700px]">
                        <div className="pb-6 pt-14 grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-y-6 gap-x-6">
                            {products &&
                                products.map((item, index) => (
                                    <ProductCard key={index} {...item} />
                                ))}
                        </div>
                    </div>
                </>
            )}
            <Paginations
                numberOfPages={pagination?.totalPages}
                totalProducts={pagination?.totalElements}
            />
        </div>
    );
};

export default Products;
