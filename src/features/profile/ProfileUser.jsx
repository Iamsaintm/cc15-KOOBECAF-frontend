import { useState, useEffect } from "react";
import { FaEdit } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataUser } from "../../stores/slices/authSlice";

import Avatar from "../../components/Avatar";
import InputDropdown from "../../components/InputDropdown";
import SearchInput from "../../features/filter/SearchInput";
import CoverImage from "../../components/CoverImage";
import ProductCardUser from "../../features/profile/ProductCardUser";

export default function ProfileUser({ onClose, setEditUser }) {
    const { authUserData, loading } = useSelector((state) => state.auth);

    const [isOpen, setIsOpen] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchDataUser());
    }, []);

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
            <div className="bg-white rounded-lg ">
                <div className="relative">
                    <CoverImage className="rounded-t-lg bg-cover w-full h-[250px]">
                        {authUserData?.coverImage}
                    </CoverImage>

                    <div
                        className="absolute text-3xl top-[3px] left-[95%] hover:text-[#959595] cursor-pointer"
                        onClick={onClose}
                    >
                        X
                    </div>
                    <div className="flex flex-col p-4">
                        <div className="flex justify-end">
                            <FaEdit className="w-6 h-6 cursor-pointer hover:text-[#959595]" onClick={handleOnClick} />
                        </div>
                        <div className="flex justify-center text-xl font-bold pt-5 border-b pb-3">
                            {authUserData?.firstName} {authUserData?.lastName}
                        </div>
                    </div>

                    <div className="absolute top-[35%] left-[39%]">
                        <Avatar className="w-36">{authUserData?.profileImage}</Avatar>
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
                    <div className="grid grid-cols-3 justify-between px-4 pb-4 gap-2 overflow-y-auto h-[268px]">
                        <ProductCardUser>7</ProductCardUser>
                        <ProductCardUser>8</ProductCardUser>
                        <ProductCardUser>9</ProductCardUser>
                        <ProductCardUser>9</ProductCardUser>
                        <ProductCardUser>9</ProductCardUser>
                        <ProductCardUser>9</ProductCardUser>
                    </div>
                </div>
            </div>
        </>
    );
}

// profileImage: true,
// coverImage: true,
