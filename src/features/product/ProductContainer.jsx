import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import Loading from "../../components/Loading";

function ProductContainer() {
    const { productData, loading } = useSelector((state) => state.product);

    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <>
                    {productData?.map((x) => (
                        <ProductCard
                            key={x.id}
                            src={x.image[0].image}
                            productPrice={x.productPrice}
                            productName={x.productName}
                        />
                    ))}
                </>
            )}
        </>
    );
}

export default ProductContainer;
