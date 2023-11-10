import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import ProductCard from "./ProductCard";
import Loading from "../../components/Loading";
import { addPath } from "../../utils/local-storage";

function ProductContainer() {
    const { pathname } = useLocation();
    console.log(pathname);
    const { productData, loading, searchProduct } = useSelector((state) => state.product);

    let product = productData;
    if (searchProduct.length !== 0) {
        product = productData?.filter((el) =>
            el.productName.toLowerCase().includes(searchProduct.toLowerCase().trim()) ? el : null,
        );
    }
    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <>
                    {product && product.length > 0 ? (
                        product.map((data) => (
                            <Link
                                key={data.id}
                                onClick={() => addPath(pathname)}
                                to={`/product/${data.id}`}
                                state={{ productDetail: data }}
                            >
                                <ProductCard
                                    src={data.image[0]?.image}
                                    productPrice={data.productPrice}
                                    productName={data.productName}
                                    productDetail={data}
                                />
                            </Link>
                        ))
                    ) : (
                        <div>Product not Found</div>
                    )}
                </>
            )}
        </>
    );
}

export default ProductContainer;
