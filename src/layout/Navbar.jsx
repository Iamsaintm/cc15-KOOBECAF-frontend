import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../stores/slices/authSlice";
import Avatar from "../components/Avatar";
import userImage from "../assets/Images/user.jpg";
import { Link } from "react-router-dom";

export default function Navbar() {
    const dispatch = useDispatch();

    return (
        <div className="flex justify-between items-center h-full px-6 text-white">
            <Link to="/">
                <div className="text-4xl font-fontHeader text-white">KOOBECAF</div>
            </Link>
            <div className="flex gap-4 text-lg">
                <button onClick={() => dispatch(logout())}>Logout</button>
                <Avatar src={userImage} />
            </div>
        </div>
    );
}
