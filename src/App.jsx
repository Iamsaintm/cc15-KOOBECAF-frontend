import { ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAccessToken } from "./utils/local-storage";
import { fetchDataUser } from "./stores/slices/authSlice";
import Route from "./routes/Route";
import "react-loading-skeleton/dist/skeleton.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { fetchProductByUserId } from "./stores/slices/productSlice";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        if (getAccessToken()) {
            dispatch(fetchDataUser())
                .unwrap()
                .then((res) => {
                    dispatch(fetchProductByUserId(res.user.id));
                });
        }
    }, []);

    return (
        <>
            <Route />
            <ToastContainer position="bottom-center" autoClose={3000} theme="colored" />
        </>
    );
}

export default App;
