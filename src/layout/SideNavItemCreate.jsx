import React from "react";
import CategorieItem from "../features/filter/CategorieItem";
import { FaTag, FaTags } from "react-icons/fa6";
import { useLocation } from "react-router-dom";
import Avatar from "../components/Avatar";
import userImage from "../assets/Images/user.jpg";
import { useSelector } from "react-redux";

function SideNavItemCreate() {
    const { firstName, lastName } = useSelector((state) => state.auth.authUserData);

    return (
        <>
            <div className="flex flex-col gap-2 px-4">
                <div className="sticky h-6"></div>
                <div className="text-2xl font-semibold pl-2">Item for sale</div>
                <div className="flex gap-3 items-center">
                    <Avatar />
                    <div>
                        {firstName} {lastName}
                    </div>
                </div>
                <div className="border-b-2 mb-2 pb-2"></div>
                <div className="flex flex-col gap-2 overflow-auto h-screen pb-56 px-2"></div>
            </div>
        </>
    );
}

export default SideNavItemCreate;
