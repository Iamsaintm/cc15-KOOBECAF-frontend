import { useEffect } from "react";
import { fetchProductByCategory } from "../stores/slices/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { getAccessToken } from "../utils/local-storage";
import ProductByCategoryContainer from "../features/product/ProductByCategoryContainer";
import { useLocation } from "react-router-dom";

function CategoryPage() {
    const dispatch = useDispatch();
    const { pathname } = useLocation();
    const { categoryData } = useSelector((state) => state.category);
    let categoryId = "";
    const categorySearch = categoryData.find((el) => el.typeOfCategory.includes(pathname.slice(10)));
    if (categorySearch) {
        categoryId = categorySearch.id;
    }

    useEffect(() => {
        if (getAccessToken()) {
            dispatch(fetchProductByCategory(`${categoryId}`));
        }
    }, [categoryId]);

    return (
        <>
            <div className="flex w-full bg-second-light">
                <div className="min-w-[360px]"></div>
                <div className="flex flex-col w-full bg-white">
                    <div className="flex justify-start py-6 px-12">
                        <div className="text-xl font-semibold">Today's picks</div>
                    </div>
                    <div className="w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-12 px-12 bg-white">
                        <ProductByCategoryContainer />
                    </div>
                </div>
            </div>
        </>
    );
}

export default CategoryPage;
