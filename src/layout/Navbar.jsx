import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logoutProduct, resetInputProduct, resetSearchProduct } from "../stores/slices/productSlice";
import Dropdown from "../components/DropdownUser";

export default function Navbar() {
    const dispatch = useDispatch();

    return (
        <div className="flex justify-between items-center h-full px-6 text-white">
            <Link
                onClick={() => {
                    dispatch(resetInputProduct());
                }}
                to="/"
            >
                <div className="text-4xl font-fontHeader text-white">KOOBECAF</div>
            </Link>
            <div className="flex fixed gap-4 text-lg right-6">
                <button
                    onClick={() => {
                        dispatch(logout());
                        dispatch(logoutProduct());
                        dispatch(resetSearchProduct());
                    }}
                >
                    Logout
                </button>
                <Dropdown />
            </div>
        </div>
    );
}
