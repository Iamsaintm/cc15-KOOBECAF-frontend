import { FaArrowLeft } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import { BsFillBookmarkFill } from "react-icons/bs";
import CategorieItem from "../features/filter/CategorieItem";
import Avatar from "../components/Avatar";

function SideNavWishlist() {
    const { pathname } = useLocation();
    return (
        <>
            <div className="flex flex-col gap-2 px-4">
                <div className="flex pt-10 items-center">
                    <div className=" rounded-full p-2 hover:bg-main">
                        <Link to="/">
                            <FaArrowLeft />
                        </Link>
                    </div>
                    <div className="text-2xl font-semibold pl-2">Wishlist</div>
                </div>

                <div className="pt-3">
                    <CategorieItem
                        icons={<BsFillBookmarkFill />}
                        isActive={pathname === "/wishlist"}
                        to="/wishlist"
                        title={"Your wishlist"}
                    />
                </div>

                <hr className="border" />

                <div className="">
                    <CategorieItem
                        icons={<Avatar className="w-8 h-8" />}
                        isActive={pathname === "/"}
                        to="/"
                        title={"Marketplace profile"}
                    />
                </div>

                <div className="flex flex-col gap-2 overflow-auto h-screen pb-56 px-2"></div>
            </div>
        </>
    );
}

export default SideNavWishlist;
