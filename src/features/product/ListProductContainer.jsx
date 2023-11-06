import { useSelector } from "react-redux";
import Loading from "../../components/Loading";
import ListProductCard from "./ListProductCard";

function ListProductContainer() {
    const { productByUserId, loading } = useSelector((state) => state.product);

    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <>
                    {productByUserId?.map((data) => (
                        <ListProductCard
                            key={data.id}
                            productId={data.id}
                            productDetail={data}
                            src={data.image[0].image}
                            productPrice={data.productPrice}
                            productName={data.productName}
                        />
                    ))}
                </>
            )}
        </>
    );
}

export default ListProductContainer;
