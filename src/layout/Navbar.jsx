import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../stores/slices/authSlice";
import Avatar from "../components/Avatar";
import userImage from "../assets/Images/user.jpg";
import { Link } from "react-router-dom";
import { logoutProduct, resetInputProduct, resetSearchProduct } from "../stores/slices/productSlice";

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
                <Avatar src={userImage} />
            </div>
        </div>
    );
}
