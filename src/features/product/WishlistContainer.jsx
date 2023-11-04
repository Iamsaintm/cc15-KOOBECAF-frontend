import { useSelector } from "react-redux";
import Loading from "../../components/Loading";
import ProductCard from "./ProductCard";

function WishlistContainer() {
    const { wishlistProduct, loading } = useSelector((state) => state.product);

    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <>
                    {wishlistProduct?.map((data) => (
                        <ProductCard
                            key={data.id}
                            src={data.productsId.image[0].image}
                            productPrice={data.productsId.productPrice}
                            productName={data.productsId.productName}
                        />
                    ))}
                </>
            )}
        </>
    );
}

export default WishlistContainer;
