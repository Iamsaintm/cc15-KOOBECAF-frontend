import { useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, Link } from "react-router-dom";
import { BsFillBookmarkFill } from "react-icons/bs";
import { FaStore, FaTags } from "react-icons/fa6";

import ChangeLocation from "../features/subscribe/ChangeLocation";
import ProfileModal from "../components/ProfileModal";
import Button from "../components/Button";
import Search from "../features/filter/Search";
import Categories from "../features/filter/Categories";
import CategorieItem from "../features/filter/CategorieItem";

function SideNav() {
    const [isOpen, setIsOpen] = useState(false);

    const { pathname } = useLocation();
    const { authUserData } = useSelector((state) => state.auth);

    const handleOnClickFilter = () => {
        setIsOpen(true);
    };

    return (
        <>
            <div className="flex flex-col gap-2 pb-4 border-b-2">
                <div className="sticky">
                    <Search div={"pt-10 pb-2"} />
                    <div className="px-4  ">
                        <CategorieItem icons={<FaStore />} title={"Browse All"} isActive={pathname === "/"} />
                    </div>
                    <div className="px-4">
                        <CategorieItem
                            icons={<BsFillBookmarkFill />}
                            title={"Wishlist"}
                            isActive={pathname === "/wishlist"}
                            to="/wishlist"
                        />
                    </div>
                    <div className="px-4">
                        <CategorieItem
                            icons={<FaTags />}
                            title={"Selling"}
                            isActive={pathname === "/selling"}
                            to="/selling"
                        />
                    </div>
                </div>
                <div className="flex justify-center w-full">
                    <Link to={"/create"}>
                        <Button text={"Create new listing"} />
                    </Link>
                </div>

                {authUserData?.isSubscribe ? (
                    <>
                        <div className="px-4 cursor-pointer" onClick={handleOnClickFilter}>
                            <p className="text-lg font-semibold">Filters</p>
                            <div className="text-main-dark">Bangkok</div>
                        </div>

                        <ProfileModal open={isOpen}>
                            <ChangeLocation
                                onClose={() => {
                                    setIsOpen(false);
                                }}
                            />
                        </ProfileModal>
                    </>
                ) : null}
            </div>
            <div className="flex flex-col gap-2 overflow-auto h-screen pb-52 px-4">
                <Categories />
            </div>
        </>
    );
}

export default SideNav;
