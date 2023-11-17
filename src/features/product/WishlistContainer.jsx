import { useSelector } from "react-redux";
import Loading from "../../components/Loading";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

function WishlistContainer() {
    const { wishlistProduct, loading } = useSelector((state) => state.product);

    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <>
                    {wishlistProduct?.map((data) => (
                        <Link key={data.id} to={`/product/${data.id}`} state={{ productDetail: data.productsId }}>
                            <ProductCard
                                src={data.productsId.image[0].image}
                                productPrice={data.productsId.productPrice}
                                productName={data.productsId.productName}
                                productDetail={data.productsId}
                            />
                        </Link>
                    ))}
                </>
            )}
        </>
    );
}

export default WishlistContainer;
