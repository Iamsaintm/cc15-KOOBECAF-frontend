import { Link } from "react-router-dom";
import Button from "../components/Button";
import Categories from "../features/filter/Categories";
import Search from "../features/filter/Search";

function SideNav() {
    return (
        <>
            <div className="sticky">
                <Search />
            </div>
            <div className="flex justify-center w-full">
                <Link to={"/create"}>
                    <Button text={"Create new listing"} />
                </Link>
            </div>
            <div className="flex flex-col gap-2 overflow-auto h-screen pb-48 px-4">
                <Categories />
            </div>
        </>
    );
}

export default SideNav;
