import { useEffect } from "react";
import { fetchAllCategory } from "../stores/slices/categorySlice";
import { useDispatch } from "react-redux";
import { fetchDataUser } from "../stores/slices/authSlice";
import { fetchAllProduct, fetchProductByUserId } from "../stores/slices/productSlice";

import CreateProductCard from "../features/product/CreateProductCard";

function CreateProductPage() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllCategory());
        dispatch(fetchAllProduct());
        dispatch(fetchDataUser())
            .unwrap()
            .then((res) => {
                dispatch(fetchProductByUserId(res.user.id));
            });
    }, []);

    const menu = [
        {
            id: 1,
            src: "",
            header: "Item for Sale",
            to: "/create/item",
            content: (
                <>
                    create a single listing <br /> for one or more items <br /> to sell.
                </>
            ),
        },
        {
            id: 2,
            src: "",
            header: "Vehicle for Sale",
            to: "/create/vehicle",
            content: (
                <>
                    Sell a car, truck or <br /> other type of vehicle.
                </>
            ),
        },
        {
            id: 3,
            src: "",
            header: (
                <>
                    Home for Sale or <br /> Rent
                </>
            ),
            to: "/create/rental",
            content: (
                <>
                    List a house or <br /> apartment for sale or rent. <br /> rent.
                </>
            ),
        },
    ];

    return (
        <>
            <div className="flex h-screen w-full bg-main-light">
                <div className="min-w-[300px]"></div>
                <div className="flex justify-center items-center w-full">
                    <div className="flex gap-3 flex-col">
                        <div className="text-xl font-bold">Choose Listing Type</div>
                        <div className="grid grid-cols-3 m-auto gap-8 w-[600px] h-[222px]">
                            {menu.map((x) => (
                                <CreateProductCard key={x.id} {...x} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CreateProductPage;
