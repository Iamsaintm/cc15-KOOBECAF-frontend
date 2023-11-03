import { Link } from "react-router-dom";
import { FaSistrix } from "react-icons/fa6";
import ListingSearch from "../features/filter/ListingSearch";
import Button from "../components/Button";
import ListProductContainer from "../features/product/ListProductContainer";

function SellingPage() {
    return (
        <>
            <div className="flex flex-col w-full bg-main-light min-h-screen ">
                <div className="flex">
                    <div className="min-w-[360px]"></div>

                    <div className="flex w-full">
                        <div className="py-3 px-6 w-full mt-16">
                            <div className="flex items-center bg-white justify-between rounded-lg">
                                <div className="text-xl font-semibold pl-5">Your listings</div>
                                <div className="pr-5">
                                    <ListingSearch />
                                </div>
                            </div>
                            {/* ไม่มีรายการ*/}
                            {/* <div className="flex justify-center items-center">
                                <div className="flex flex-col items-center">
                                    <div className="text-[5rem] ">
                                        <FaSistrix />
                                    </div>
                                    <div className="pt-5 text-xl">
                                        When you start selling, your listings will appear here.
                                    </div>
                                    <div className="flex justify-center w-full py-3 pt-5">
                                        <Link className="w-full px-20" to={"/create"}>
                                            <Button text={"Create new listing"} />
                                        </Link>
                                    </div>
                                </div>
                            </div> */}
                            {/* มีรายการ*/}
                            <div className="flex flex-col pt-2">
                                <ListProductContainer />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SellingPage;
