import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import ProductCard from "./ProductCard";
import Loading from "../../components/Loading";
import { addPath } from "../../utils/local-storage";

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
                    {product && product?.length > 0 ? (
                        product?.map((data) =>
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
                        )
                    ) : (
                        <div>Product Not Found</div>
                    )}
                </>
            )}
        </>
    );
}

export default ProductByCategoryContainer;
