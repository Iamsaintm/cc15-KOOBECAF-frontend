import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAllProduct, fetchProductByUserId } from "../stores/slices/productSlice";
import { getAccessToken } from "../utils/local-storage";
import { fetchAllCategory } from "../stores/slices/categorySlice";
import ProductContainer from "../features/product/ProductContainer";
import { fetchDataUser } from "../stores/slices/authSlice";

function HomePage() {
    const dispatch = useDispatch();

    useEffect(() => {
        if (getAccessToken()) {
            dispatch(fetchAllProduct());
            dispatch(fetchAllCategory());
            dispatch(fetchDataUser())
                .unwrap()
                .then((res) => {
                    dispatch(fetchProductByUserId(res.user.id));
                });
        }
    }, []);

    return (
        <>
            <ProductContainer />
        </>
    );
}

export default HomePage;
