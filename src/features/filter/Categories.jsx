import { FaCarRear, FaBuilding, FaScrewdriverWrench, FaMusic, FaPaw } from "react-icons/fa6";
import { GiPriceTag, GiClothes, GiSmartphone, GiGardeningShears, GiSellCard, GiIsland } from "react-icons/gi";
import { MdOutlineFamilyRestroom, MdOutlineSmartToy, MdSportsMartialArts } from "react-icons/md";
import { BiCameraMovie } from "react-icons/bi";
import { ImPriceTags } from "react-icons/im";
import { FaHome } from "react-icons/fa";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { LuToyBrick } from "react-icons/lu";
import { Link } from "react-router-dom";

function Categories() {
    const list = [
        { icons: <FaCarRear />, title: "Vehicle" },
        { icons: <FaBuilding />, title: "Property for rent" },
        { icons: <GiPriceTag />, title: "Classified" },
        { icons: <GiClothes />, title: "Clothing" },
        { icons: <GiSmartphone />, title: "Electronics" },
        { icons: <BiCameraMovie />, title: "Entertainment" },
        { icons: <MdOutlineFamilyRestroom />, title: "Family" },
        { icons: <ImPriceTags />, title: "Free stuff" },
        { icons: <GiGardeningShears />, title: "Garden and outdoors" },
        { icons: <MdOutlineSmartToy />, title: "Hobbies" },
        { icons: <FaHome />, title: "Home goods" },
        { icons: <FaScrewdriverWrench />, title: "Home improvement suppiles" },
        { icons: <FaMusic />, title: " Musical instrument" },
        { icons: <HiOutlineBuildingOffice2 />, title: "Office supplies" },
        { icons: <FaPaw />, title: "Pet supplies" },
        { icons: <GiIsland />, title: "Property for sale" },
        { icons: <MdSportsMartialArts />, title: "Sporting goods" },
        { icons: <LuToyBrick />, title: "Toy & games" },
        { icons: <GiSellCard />, title: "Buy-and-sell groups" },
    ];

    return (
        <>
            <div className="flex flex-col">
                <div className="text-lg font-semibold">Categories</div>
                {list.map((item, id) => (
                    <Link to={"/"}>
                        <div className="flex gap-4 hover:bg-second/40 rounded-lg p-2 group">
                            <div className="flex justify-center items-center text-xl w-10 aspect-square rounded-full group-hover:bg-main bg-[#d9d9d9]">
                                {item.icons}
                            </div>
                            <div className="self-center font-medium">{item.title}</div>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    );
}

export default Categories;
