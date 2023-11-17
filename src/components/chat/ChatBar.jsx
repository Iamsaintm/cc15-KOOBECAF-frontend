import React from "react";

function ChatBar({ productDetail }) {
    return (
        <div className="w-full h-[100px] bg-white rounded-md flex px-16 border border-dark-night">
            <div className="aspect-square rounded-md p-3">
                <img
                    className="h-full object-cover rounded-md"
                    src={productDetail.image[0]?.image}
                    alt="productImage"
                />
            </div>
            <div className="w-full">
                <div className="flex justify-around items-center h-full">
                    <div className=" text-base font-semibold ">{productDetail.productName}</div>
                    <div className="">&#3647; {productDetail.productPrice}</div>
                    <div className="text-sm ">{productDetail.status}</div>
                </div>
            </div>
        </div>
    );
}

export default ChatBar;
