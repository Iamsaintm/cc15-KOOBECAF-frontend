import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { useSelector } from "react-redux";

import EditUser from "./EditUser";
import Avatar from "../../components/Avatar";
import userImage from "../../assets/Images/user.jpg";
import InputDropdown from "../../components/InputDropdown";
import SearchInput from "../../features/filter/SearchInput";
import ProductCard from "../../features/product/ProductCard";

export default function ProfileUser({ onClose, setEditUser }) {
    const { authUserData, loading } = useSelector((state) => state.auth);

    const [isOpen, setIsOpen] = useState(false);

    const handleOnClick = () => {
        onClose();
        setEditUser(true);
    };

    const productStatus = [
        { id: 1, status: "AVAILABLE" },
        { id: 2, status: "SOLD" },
        { id: 3, status: "NOT_AVAILABLE" },
    ];

    const sortBy = [
        { id: 1, status: "AVAILABLE" },
        { id: 2, status: "SOLD" },
        { id: 3, status: "NOT_AVAILABLE" },
    ];

    return (
        <>
            <div className="bg-white">
                <div className="relative rounded-lg">
                    <div className="rounded-t-lg bg-cover w-full h-[250px] bg-[url('https://img.freepik.com/premium-photo/cute-pastel-pupy-dog-pastl-room_902994-1158.jpg')]" />
                    <div
                        className="absolute text-3xl top-[3px] left-[95%] hover:text-[#959595] cursor-pointer text-white"
                        onClick={onClose}
                    >
                        X
                    </div>
                    <div className="flex flex-col p-4">
                        <div className="flex justify-end">
                            <FaEdit className="w-6 h-6 cursor-pointer" onClick={handleOnClick} />
                        </div>
                        <div className="flex justify-center text-xl font-bold pt-16 border-b pb-3">
                            {authUserData?.firstName} {authUserData?.lastName}
                        </div>
                    </div>

                    <div className="absolute top-[50%] left-[39%]">
                        <Avatar src={userImage} className="w-36" />
                    </div>
                </div>

                <div>
                    <div className="flex items-center px-4 gap-4">
                        <SearchInput className="p-2" placeholder="Search" />
                        <InputDropdown
                            name={"status"}
                            data={productStatus}
                            className={"bg-second hover:bg-second-dark"}
                        />
                        <InputDropdown
                            name={"status"}
                            data={sortBy}
                            className={
                                " bg-second hover:bg-second-dark focus:border-1 border-second focus:ring-2 focus:ring-second-dark"
                            }
                        />
                    </div>
                    <div className="flex justify-between px-4 pb-4 gap-2">
                        <div className="bg-red-300 w-full h-[150px]">7</div>
                        <div className="bg-blue-300 w-full">8</div>
                        <div className="bg-green-300 w-full">9</div>
                    </div>
                </div>
            </div>
        </>
    );
}

// profileImage: true,
// coverImage: true,
