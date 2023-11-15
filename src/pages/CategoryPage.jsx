import { useEffect } from "react";
import { fetchProductByCategory, resetProductPrice, resetSearchProduct } from "../stores/slices/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { fetchAllCategory } from "../stores/slices/categorySlice";
import ProductByCategoryContainer from "../features/product/ProductByCategoryContainer";

function CategoryPage() {
    const dispatch = useDispatch();
    const { pathname } = useLocation();
    const { categoryData } = useSelector((state) => state.category);
    let categoryId = "";
    const categorySearch = categoryData?.find((el) => el.typeOfCategory.includes(pathname.slice(10)));
    if (categorySearch) {
        categoryId = categorySearch.id;
    }

    useEffect(() => {
        dispatch(fetchAllCategory());
        dispatch(fetchProductByCategory(`${categoryId}`));
        dispatch(resetSearchProduct());
        dispatch(resetProductPrice());
    }, [categoryId]);

    return (
        <>
            <div className="flex mt-16 w-full bg-second-light">
                <div className="min-w-[360px]"></div>
                <div className="flex flex-col w-full bg-white">
                    <div className="flex justify-start py-6 px-12">
                        <div className="text-xl font-semibold">Today's picks</div>
                    </div>
                    <div className="w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-12 px-12 bg-white">
                        <ProductByCategoryContainer />
                    </div>
                </div>
            </div>
        </>
    );
}

export default CategoryPage;
