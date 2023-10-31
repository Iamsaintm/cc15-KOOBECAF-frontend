import React from "react";
import CreateProductCard from "../features/product/CreateProductCard";

function CreateProductPage() {
    const menu = [
        {
            id: 1,
            src: "",
            header: "สินค้าที่จะขาย",
            content: (
                <>
                    สร้างรายการสินค้า <br /> รายการเดียวสำหรับ <br /> สินค้าที่จะขาย 1 <br /> รายการขึ้นไป
                </>
            ),
        },
        {
            id: 2,
            src: "",
            header: "พาหนะที่จะขาย",
            content: (
                <>
                    ขายรถยนต์ รถบรรทุก <br /> หรือพาหนะประเภทอื่นๆ
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
                        <div className="text-xl font-bold">เลือกประเภทรายการสินค้า</div>
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
