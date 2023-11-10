import defaultProduct from "../../assets/Images/hero-img_copy.jpg";

function ProductCard({ src = defaultProduct, productPrice = "1,050,000", productName = "2007 Ferrari f430", address }) {
    return (
        <>
            <div className=" bg-white rounded-md shadow-main shadow-md">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden  bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80 ">
                    <img className="h-full w-full object-cover object-center lg:h-full lg:w-full" src={src} alt="" />
                </div>
                <div className="p-2">
                    <div className="text-sm text-gray-700">&#3647;{productPrice}</div>
                    <div>{productName}</div>
                    <div className="mt-1 text-sm text-gray-500">กรุงเทพมหานคร</div>
                </div>
            </div>
        </>
    );
}

export default ProductCard;
