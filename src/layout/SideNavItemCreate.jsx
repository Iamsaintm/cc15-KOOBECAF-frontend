import React, { useState } from "react";
import CategorieItem from "../features/filter/CategorieItem";
import { FaTag, FaTags } from "react-icons/fa6";
import { useLocation } from "react-router-dom";
import Avatar from "../components/Avatar";
import userImage from "../assets/Images/user.jpg";
import { useSelector } from "react-redux";
import PhotoUpload from "../features/product/PhotoUpload";
import RequiredContainer from "../features/product/RequiredContainer";
import Button from "../components/Button";
import Categories from "../features/filter/Categories";
import DescriptionContainer from "../features/product/DescriptionContainer";

function SideNavItemCreate({ header }) {
    const [input, setInput] = useState({
        productName: "",
        productPrice: "",
    });
    const { firstName, lastName } = useSelector((state) => state.auth.authUserData);

    const onChangeInput = (e) => setInput({ ...input, [e.target.name]: e.target.value });

    return (
        <>
            <div className="flex flex-col gap-2 h-screen">
                <div className="sticky h-6"></div>
                <div className="flex flex-col gap-2 px-4">
                    <div className="text-2xl font-bold">{header}</div>
                    <div className="flex gap-3 items-center">
                        <Avatar />
                        <div>
                            {firstName} {lastName}
                        </div>
                    </div>
                </div>
                <div className="border-b-2 mb-2 pb-2"></div>
                <div className="flex flex-col gap-4 overflow-auto h-screen pb-16 px-4">
                    <PhotoUpload />
                    <RequiredContainer input={input} onChange={onChangeInput} />
                    <div className="flex flex-col gap-4">
                        <DescriptionContainer />
                        <Button text={"Create"} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default SideNavItemCreate;
