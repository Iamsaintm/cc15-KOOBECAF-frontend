import React from "react";
import ProductPreview from "../features/product/ProductPreview";
import defaultProduct from "../assets/Images/hero-img_copy.jpg";

function CreateItemProductPage() {
    return (
        <>
            <div className="flex bg-main-light h-screen">
                <ProductPreview src={defaultProduct} productDetail="Description" />
            </div>
        </>
    );
}

export default CreateItemProductPage;
