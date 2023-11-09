import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { FaTags, FaArrowLeft } from "react-icons/fa6";

import CategorieItem from "../features/filter/CategorieItem";
import Button from "../components/Button";
import Avatar from "../components/Avatar";
import EditUser from "../features/profile/EditUser";
import ProfileModal from "../components/ProfileModal";
import ProfileUser from "../features/profile/ProfileUser";

function SideNavSelling() {
    const [isOpen, setIsOpen] = useState(false);
    const [editUser, setEditUser] = useState(false);
    const { authUserData } = useSelector((state) => state.auth);
    const { pathname } = useLocation();

    return (
        <>
            <div className="flex flex-col gap-2 px-4">
                <div className="flex items-center pt-10">
                    <div className=" rounded-full p-2 hover:bg-main">
                        <Link to="/">
                            <FaArrowLeft />
                        </Link>
                    </div>
                    <div className="text-2xl font-semibold pl-2">Selling</div>
                </div>
                <div className="flex px-12 my-3">
                    <Link className="w-full " to={"/create"}>
                        <Button text={"Create new listing"} />
                    </Link>
                </div>
                <div>
                    <CategorieItem
                        icons={<FaTags />}
                        isActive={pathname === "/selling"}
                        to="/selling"
                        title={"Your listings"}
                    />
                </div>

                <hr className="border" />

                <div className="flex flex-col gap-2">
                    <CategorieItem
                        icons={<Avatar src={authUserData?.profileImage}></Avatar>}
                        onClick={() => {
                            setIsOpen(true);
                        }}
                        title={"Marketplace profile"}
                    />
                    <ProfileModal open={isOpen}>
                        <ProfileUser
                            setEditUser={setEditUser}
                            onClose={() => {
                                setIsOpen(false);
                            }}
                        />
                    </ProfileModal>

                    <ProfileModal open={editUser}>
                        <EditUser
                            setIsOpen={setIsOpen}
                            onClose={() => {
                                setEditUser(false);
                            }}
                        />
                    </ProfileModal>
                </div>

                <div className="flex flex-col gap-2 overflow-auto h-screen pb-56 px-2"/>
            </div>
        </>
    );
}
export default SideNavSelling;
