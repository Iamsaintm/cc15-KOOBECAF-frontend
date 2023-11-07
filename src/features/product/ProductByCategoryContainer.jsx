import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import Loading from "../../components/Loading";

function ProductByCategoryContainer() {
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
                        product?.map((data) => (
                            <Link key={data.id} to={`/product/${data.id}`} state={{ productDetail: data }}>
                                <ProductCard
                                    key={data.id}
                                    src={data.image[0].image}
                                    productPrice={data.productPrice}
                                    productName={data.productName}
                                    productDetail={data}
                                />
                            </Link>
                        ))
                    ) : (
                        <div>Product Not Found</div>
                    )}
                </>
            )}
        </>
    );
}

export default ProductByCategoryContainer;
