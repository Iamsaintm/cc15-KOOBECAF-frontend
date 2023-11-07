import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BiLogOut } from "react-icons/bi";
import { logout } from "../stores/slices/authSlice";
import { logoutProduct } from "../stores/slices/productSlice";
import userImage from "../assets/Images/user.jpg";
import Avatar from "./Avatar";

export default function Dropdown() {
    const [isOpen, setIsOpen] = useState(false);
    const { authUserData, loading } = useSelector((state) => state.auth);

    const handleOnclick = () => {
        setIsOpen();
    };

    const dropDownEl = useRef(null); // {curent: null}
    const dispatch = useDispatch();

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (!dropDownEl.current.contains(e.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return (
        <div className="relative" ref={dropDownEl}>
            <div className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                <Avatar src={userImage} />
            </div>
            {isOpen && (
                <div className=" w-96 absolute bg-white right-0 translate-y-1 border rounded-xl shadow-xl p-2">
                    <Link onClick={() => setIsOpen(false)}>
                        <div className="flex gap-4 p-2 item-center hover:bg-gray-100 rounded-xl">
                            <Avatar className="h-14" src={userImage} />
                            <div>
                                <div className="font-semibold text-black">
                                    {authUserData?.firstName} {authUserData?.lastName}
                                </div>
                                <div className="text-sm text-gray-500">
                                    See Your Profile
                                </div>
                            </div>
                        </div>
                    </Link>
                    <hr className="m-2 border" />
                    <div
                        className="flex gap-4 p-2 items-center cursor-pointer hover:bg-gray-100 rounded-xl"
                        onClick={() => {
                            dispatch(logout());
                        }}
                    >
                        <div className="flex flex-1 justify-end items-center gap-4 ">
                            <div className="font-semibold text-sm text-black ">Log Out</div>
                            <div className="bg-gray-300 h-9 aspect-square rounded-full flex justify-center items-center">
                                <BiLogOut />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
