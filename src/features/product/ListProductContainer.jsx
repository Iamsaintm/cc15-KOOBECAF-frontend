import { useSelector } from "react-redux";
import Loading from "../../components/Loading";
import ListProductCard from "./ListProductCard";

function ListProductContainer() {
    const { productByUserId, loading, searchProduct } = useSelector((state) => state.product);

    let product = productByUserId;
    if (searchProduct.length !== 0) {
        product = productByUserId?.filter((el) =>
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
                            <ListProductCard
                                key={data.id}
                                src={data?.image[0]?.image}
                                productPrice={data.productPrice}
                                productId={data.id}
                                productDetail={data}
                                productName={data.productName}
                                status={data.status}
                            />
                        ))
                    ) : (
                        <div>Product Not Found</div>
                    )}
                </>
            )}
        </>
    );
}

export default ListProductContainer;
