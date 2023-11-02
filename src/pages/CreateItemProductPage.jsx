import React from "react";
import ProductPreview from "../features/product/ProductPreview";
import defaultProduct from "../assets/Images/hero-img_copy.jpg";

function CreateItemProductPage() {
    return (
        <>
            <div className="flex bg-main-light h-screen">
                <div className="w-[480px]"></div>
                <ProductPreview src={defaultProduct} />
            </div>
        </>
    );
}

export default CreateItemProductPage;
