import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import Loading from "../../components/Loading";

function ProductByCategoryContainer() {
    const { productByCategory, loading } = useSelector((state) => state.product);

    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <>
                    {!(productByCategory?.length === 0) ? (
                        <>
                            {productByCategory?.map((x) => (
                                <ProductCard
                                    key={x.id}
                                    src={x.image[0].image}
                                    productPrice={x.productPrice}
                                    productName={x.productName}
                                />
                            ))}
                        </>
                    ) : (
                        <div>Product Not Found</div>
                    )}
                </>
            )}
        </>
    );
}

export default ProductByCategoryContainer;
