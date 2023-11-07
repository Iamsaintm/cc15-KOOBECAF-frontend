import { FaSistrix, FaEdit, FaCamera } from "react-icons/fa";
import { useSelector } from "react-redux";
import userImage from "../../assets/Images/user.jpg";
import Avatar from "../../components/Avatar";
import InputDropdown from "../../components/InputDropdown";
import SearchInput from "../../features/filter/SearchInput";
import ProductCard from "../../features/product/ProductCard";
import { useState } from "react";

export default function EditUser({ onClose }) {
    const { authUserData, loading } = useSelector((state) => state.auth);
    const [isOpen, setIsOpen] = useState(false);
    
    const handleOnClose = () => {
        onClose();
        setIsOpen(true);
    };

    return (
        <>
            <div className="p-4 bg-white rounded-lg ">
                <div className="flex flex-col items-center pb-4 rounded-lg">
                    <div className="relative">
                        <p className="text-xl font-bold ">Edit Profile</p>
                        <div
                            className="absolute bottom-1 left-[330px] text-2xl hover:text-[#959595] cursor-pointer"
                            onClick={handleOnClose}
                        >
                            X
                        </div>
                    </div>
                </div>
                <div className="px-4 font-semibold" />
                <div className="border border-empty w-full" />
                <div className="flex gap-4 py-4">
                    <p className="text-lg font-semibold">Edit Name: </p>
                    <div className="text-lg">
                        {authUserData?.firstNamm} {authUserData?.lastName}
                    </div>
                </div>
                <div className="flex justify-between">
                    <p className="text-lg font-semibold">Profile Image </p>
                    <FaEdit className="w-6 h-6 cursor-pointer" />
                </div>
                <div className="flex justify-center ">
                    <div className="w-[200px]">{authUserData?.profileImage}</div>
                    {/* <Avatar src={userImage} className="w-[200px]" /> */}
                </div>
                <div className="flex justify-between">
                    <p className="text-lg font-semibold">Cover Image</p>
                    <FaEdit className="w-6 h-6 cursor-pointer" />
                </div>
                <div className="rounded-lg bg-cover w-full h-[250px]">{authUserData?.coverImage}</div>
                {/* <div className="rounded-lg bg-cover w-full h-[250px] bg-[url('https://img.freepik.com/premium-photo/cute-pastel-pupy-dog-pastl-room_902994-1158.jpg')]" /> */}
            </div>
        </>
    );
}
