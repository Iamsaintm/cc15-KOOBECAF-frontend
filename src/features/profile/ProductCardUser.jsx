import React from "react";
import defaultProduct from "../../assets/Images/hero-img_copy.jpg";

export default function ProductCardUser({
    src = defaultProduct,
    productPrice = "1,050,000",
    productName = "2007 Ferrari f430",
}) {
    return (
        <>
            <div className="w-full bg-white rounded-md shadow-main shadow-md">
                <div className="w-full aspect-square rounded-md">
                    <img className="h-full object-cover rounded-t-md" src={src} alt="" />
                </div>
                <div className="p-2">
                    <div className="font-semibold">&#3647;{productPrice}</div>
                    <div>{productName}</div>
                </div>
            </div>
        </>
    );
}
