import { Link, useLocation } from "react-router-dom";
import { FaTags, FaArrowLeft } from "react-icons/fa6";
import CategorieItem from "../features/filter/CategorieItem";
import Button from "../components/Button";

function SideNavSelling() {
    const { pathname } = useLocation();
    return (
        <>
            <div className="flex flex-col gap-2 px-4">
                {/* <div className="sticky h-6"></div> */}
                <div className="flex items-center pt-10">
                    <Link to="/">
                        <FaArrowLeft />
                    </Link>
                    <div className="text-2xl font-semibold pl-2">Selling</div>
                </div>
                <div className="flex justify-center w-full my-3">
                    <Link className="w-full px-20" to={"/create"}>
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

                <div className="flex flex-col gap-2 overflow-auto h-screen pb-56 px-2"></div>
            </div>
        </>
    );
}
export default SideNavSelling;
