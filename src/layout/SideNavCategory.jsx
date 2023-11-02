import { Link } from "react-router-dom";
import Button from "../components/Button";
import Search from "../features/filter/Search";
import Categories from "../features/filter/Categories";
import { useLocation } from "react-router-dom";
import InputForm from "../components/InputForm";

function SideNavCategory() {
    const { pathname } = useLocation();
    const nameTagSearch = pathname.slice(10).replace(/_/g, " ");

    return (
        <>
            <div className="flex flex-col gap-2 pb-4 border-b-2">
                <div className="sticky">
                    <Search nameTagSearch={`${nameTagSearch}`} />
                </div>
                <div className="flex justify-center w-full">
                    <Link className="w-full px-20" to={"/create"}>
                        <Button text={"Create new listing"} />
                    </Link>
                </div>
            </div>

            <div className="p-4">
                <div className="text-lg font-semibold">Filters Price</div>
                <div className="flex justify-between items-center  ">
                    <div className="">
                        <InputForm styles="w-24" placeholder="Min" className="pt-0" />
                    </div>
                    <div className="flex justify-center text-lg">To</div>
                    <div className="">
                        <InputForm styles="w-24" placeholder="Max" className="pt-0" />
                    </div>
                </div>
            </div>

            <div className="border" />

            <div className="flex flex-col gap-2 overflow-auto h-screen pb-52 px-4">
                <Categories />
            </div>
        </>
    );
}

export default SideNavCategory;
