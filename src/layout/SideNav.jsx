import { Link } from "react-router-dom";
import Button from "../components/Button";
import Search from "../features/filter/Search";
import Categories from "../features/filter/Categories";
import CategorieItem from "../features/filter/CategorieItem";
import { BsFillBookmarkFill } from "react-icons/bs";
import { FaStore, FaTags } from "react-icons/fa6";
import { useLocation } from "react-router-dom";
import InputDropdown from "../components/InputDropdown";

function SideNav() {
    const { pathname } = useLocation();

    return (
        <>
            <div className="flex flex-col gap-2 pb-4 border-b-2">
                <div className="sticky">
                    <Search />
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
                    <Link className="w-full px-20" to={"/create"}>
                        <Button text={"Create new listing"} />
                    </Link>
                </div>
            </div>
            <div className="flex flex-col gap-2 overflow-auto h-screen pb-52 px-4">
                <Categories />
            </div>
        </>
    );
}

export default SideNav;
