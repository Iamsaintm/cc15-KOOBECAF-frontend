import { Link, useLocation } from "react-router-dom";
import { FaTags, FaArrowLeft } from "react-icons/fa6";
import CategorieItem from "../features/filter/CategorieItem";
import Button from "../components/Button";
import Avatar from "../components/Avatar";

function SideNavSelling() {
    const { pathname } = useLocation();
    return (
        <>
            <div className="flex flex-col gap-2 px-4">
                {/* <div className="sticky h-6"></div> */}
                <div className="flex items-center pt-10">
                    <div className=" rounded-full p-2 hover:bg-main">
                        <Link to="/">
                            <FaArrowLeft />
                        </Link>
                    </div>
                    <div className="text-2xl font-semibold pl-2">Selling</div>
                </div>
                <div className="flex justify-center my-3">
                    <Link to={"/create"}>
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
export default SideNavSelling;
