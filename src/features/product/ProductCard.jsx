import { useEffect, useState } from "react";
import defaultProduct from "../../assets/Images/hero-img_copy.jpg";
import Skeleton from "react-loading-skeleton";

function ProductCard({
    src = defaultProduct,
    productPrice = "1,050,000",
    productName = "2007 Ferrari f430",
    address,
    page,
}) {
    const [skeleton, setSkeleton] = useState(false);

    useEffect(() => {
        const id = setTimeout(() => {
            setSkeleton(true);
        }, 1200);
        return () => clearTimeout(id);
    }, [page]);

    return (
        <>
            <div className="w-44 h-[300px] bg-white rounded-md shadow-main shadow-md">
                <div className="w-full overflow-hidden bg-gray-200 group-hover:opacity-75 h-48 rounded-t-md">
                    {skeleton ? (
                        <img className="h-full w-full object-cover object-center rounded-t-md" src={src} alt="" />
                    ) : (
                        <Skeleton height={192} enableAnimation={true} />
                    )}
                </div>
                <div className="p-2">
                    <div className="text-sm text-gray-700">
                        {" "}
                        {skeleton ? <>&#3647; {productPrice}</> : <Skeleton />}
                    </div>
                    <div>{skeleton ? productName : <Skeleton />}</div>
                    <div className="mt-1 text-sm text-gray-500">{skeleton ? "กรุงเทพมหานคร" : <Skeleton />}</div>
                </div>
            </div>
        </>
    );
}

export default ProductCard;
