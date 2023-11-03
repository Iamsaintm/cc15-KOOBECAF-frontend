import defaultProduct from "../../assets/Images/hero-img_copy.jpg";

function ProductCard({ src = defaultProduct, productPrice = "1,050,000", productName = "2007 Ferrari f430", address }) {
    return (
        <>
            <div className="w-full h-[320px] bg-main/50 rounded-md shadow-main shadow-md">
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
