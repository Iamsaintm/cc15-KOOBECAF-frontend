import defaultProduct from "../../assets/Images/hero-img_copy.jpg";

function ProductCard({ src = defaultProduct, productPrice, productName, address }) {
    return (
        <>
            <div className="w-full h-[320px] bg-white rounded-md shadow-main shadow-md">
                <div className="w-full aspect-square rounded-md">
                    <img className="h-full object-cover rounded-t-md" src={src} alt="" />
                </div>
                <div className="p-2">
                    <div className="font-semibold">&#3647;{productPrice}</div>
                    <div>{productName}</div>
                    <p className="text-sm">กรุงเทพมหานคร</p>
                </div>
            </div>
        </>
    );
}

export default ProductCard;
