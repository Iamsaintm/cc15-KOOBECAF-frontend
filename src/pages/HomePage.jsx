import ProductContainer from "../features/product/ProductContainer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchDataUser } from "../stores/slices/authSlice";
import { fetchAllProduct } from "../stores/slices/productSlice";
import { getAccessToken } from "../utils/local-storage";
import { fetchAllCategory } from "../stores/slices/categorySlice";

function HomePage() {
    const dispatch = useDispatch();

    useEffect(() => {
        if (getAccessToken()) {
            dispatch(fetchAllProduct());
<<<<<<< HEAD
=======
            dispatch(fetchDataUser());
            dispatch(fetchAllCategory());
>>>>>>> develop
        }
    }, []);
    return (
        <>
            <div className="flex w-full bg-second-light">
                <div className="min-w-[360px]"></div>
                <div className="flex flex-col w-full bg-white">
                    <div className="flex justify-start py-6 px-12">
                        <div className="text-xl font-semibold">Today's picks</div>
                    </div>
                    <div className="w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-12 px-12 bg-white">
                        <ProductContainer />
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomePage;
