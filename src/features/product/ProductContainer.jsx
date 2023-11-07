import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import ProductCard from "./ProductCard";
import Loading from "../../components/Loading";

function ProductContainer() {
    const { productData, loading } = useSelector((state) => state.product);
    const { pathname } = useLocation();

    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <>
                    {productData?.map((x) => (
                        <Link key={x.id} to={`/product/${x.id}`} state={{ productDetail: x }}>
                            <ProductCard
                                src={x.image[0]?.image}
                                productPrice={x.productPrice}
                                productName={x.productName}
                                productId={x.id}
                                productDetail={x}
                                isActive={pathname === `/product/${x.id}`}
                            />
                        </Link>
                    ))}
                </>
            )}
        </>
    );
}

export default ProductContainer;
