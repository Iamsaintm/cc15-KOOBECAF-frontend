import { ToastContainer } from "react-toastify";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchDataUser } from "./stores/slices/authSlice";
import { getAccessToken } from "./utils/local-storage";
import { fetchAllProduct } from "./stores/slices/productSlice";
import Route from "./routes/Route";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        if (getAccessToken()) {
            dispatch(fetchAllProduct());
            dispatch(fetchDataUser());
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
