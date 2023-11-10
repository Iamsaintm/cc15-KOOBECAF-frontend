import defaultProduct from "../../assets/Images/hero-img_copy.jpg";

export default function ProductCardUser({ src = defaultProduct, productPrice = "123", productName = "aaa" }) {
    return (
        <>
            <div className="w-full bg-white aspect-square rounded-md shadow-main shadow-md">
                <img className="h-full object-cover rounded-t-md" src={src} alt="" />
                <div className="p-1">
                    <div className="font-semibold ">&#3647;{productPrice}</div>
                    <div className="truncate ">{productName}</div>
                </div>
            </div>
        </>
    );
}
