import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import ProductCard from "./ProductCard";
import Loading from "../../components/Loading";
import { addPath } from "../../utils/local-storage";
import NotFoundProduct from "../../components/NotFoundProduct";

function ProductByCategoryContainer() {
    const { pathname } = useLocation();
    const { productByCategory, loading, searchProduct, productPrice } = useSelector((state) => state.product);

    let product = productByCategory;

    if (searchProduct.length > 0 && (productPrice.minPrice || productPrice.maxPrice)) {
        product = productByCategory?.filter(
            (el) =>
                el.productName.toLowerCase().includes(searchProduct.toLowerCase().trim()) &&
                Number(el.productPrice) >= productPrice.minPrice &&
                Number(el.productPrice) <= productPrice.maxPrice,
        );
    } else if ((searchProduct.length === 0 && productPrice.minPrice) || productPrice.maxPrice) {
        product = productByCategory?.filter((el) =>
            Number(el.productPrice) >= productPrice.minPrice && Number(el.productPrice) <= productPrice.maxPrice
                ? el
                : null,
        );
    } else if (searchProduct.length > 0 && productPrice.minPrice === "" && productPrice.maxPrice === "") {
        product = productByCategory?.filter((el) =>
            el.productName.toLowerCase().includes(searchProduct.toLowerCase().trim()) ? el : null,
        );
    }
    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <>
                    <div className="flex mt-16 w-full bg-second-light">
                        <div className="min-w-[360px]"></div>
                        <div className="flex flex-col w-full bg-white">
                            <div className="flex justify-start py-6 px-12">
                                <div className="text-xl font-semibold">Today's picks</div>
                            </div>
                            {product && product?.length > 0 ? (
                                <div className="w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-12 px-12 bg-white">
                                    {product?.map((data) =>
                                        data.status === "AVAILABLE" ? (
                                            <Link
                                                key={data.id}
                                                onClick={() => addPath(pathname)}
                                                to={`/product/${data.id}`}
                                                state={{ productDetail: data }}
                                            >
                                                <ProductCard
                                                    key={data.id}
                                                    src={data.image[0].image}
                                                    productPrice={data.productPrice}
                                                    productName={data.productName}
                                                    productDetail={data}
                                                />
                                            </Link>
                                        ) : null,
                                    )}
                                </div>
                            ) : (
                                <NotFoundProduct />
                            )}
                        </div>
                    </div>
                </>
            )}
        </>
    );
}

export default ProductByCategoryContainer;
