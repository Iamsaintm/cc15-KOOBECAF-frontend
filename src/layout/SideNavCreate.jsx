import { Link } from "react-router-dom";
import Button from "../components/Button";
import Search from "../features/filter/Search";
import CategorieItem from "../features/filter/CategorieItem";
import { FaTag, FaTags } from "react-icons/fa6";
import { useLocation } from "react-router-dom";

function SideNavCreate() {
    const { pathname } = useLocation();

    return (
        <>
            <div className="flex flex-col gap-2 px-4">
                <div className="sticky h-6"></div>
                <div className="text-2xl font-bold pl-2">Create new listing</div>
                <div>
                    <CategorieItem icons={<FaTag />} isActive={pathname === "/create"} title={"Choose listing type"} />
                </div>
                <div className="border-b-2 mb-2 pb-2"></div>
                <CategorieItem
                    icons={<FaTags />}
                    isActive={pathname === "/selling"}
                    to="/selling"
                    title={"Your listings"}
                />
                <div className="flex flex-col gap-2 overflow-auto h-screen pb-56 px-2"></div>
            </div>
        </>
    );
}

export default SideNavCreate;
