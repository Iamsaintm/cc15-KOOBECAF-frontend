import React from "react";
import CreateProductCard from "../features/product/CreateProductCard";

function CreateProductPage() {
    const menu = [
        {
            id: 1,
            src: "",
            header: "Item for Sale",
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
            content: (
                <>
                    Sell a car, truck or
                    <br />
                </>
            ),
        },
        {
            id: 3,
            src: "",
            header: "บ้านสำหรับขายหรือ\nเช่า",
            content: (
                <>
                    รายการบ้านหรือ <br /> อพาร์ตเมนต์สำหรับขาย <br /> หรือเช่า
                </>
            ),
        },
    ];

    return (
        <>
            <div className="flex h-screen w-full">
                <div className="min-w-[300px]"></div>
                <div className="flex justify-center items-center w-full">
                    <div className="flex gap-3 flex-col">
                        <div className="text-xl font-bold">Choose Listing Type</div>
                        <div className="grid grid-cols-3 m-auto gap-3 w-[532px] h-[222px]">
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
