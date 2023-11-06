import { useDispatch } from "react-redux";
import { logout } from "../stores/slices/authSlice";
import { Link } from "react-router-dom";
import { logoutProduct, resetInputProduct, resetSearchProduct } from "../stores/slices/productSlice";
import Avatar from "../components/Avatar";
import userImage from "../assets/Images/user.jpg";
import Dropdown from "../components/Dropdown";

export default function Navbar() {
    const dispatch = useDispatch();
    dispatch(resetSearchProduct());

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
                {/* <Avatar src={userImage} /> */}
            </div>
        </div>
    );
}
