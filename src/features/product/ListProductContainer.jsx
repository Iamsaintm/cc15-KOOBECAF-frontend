import { useSelector } from "react-redux";
import Loading from "../../components/Loading";
import ListProductCard from "./ListProductCard";

function ListProductContainer() {
    const { productData, loading } = useSelector((state) => state.product);

    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <>
                    {productData?.map((data) => (
                        <ListProductCard
                            key={data.id}
                            src={data.image[0].image}
                            productPrice={data.productPrice}
                            productName={data.productName}
                            status={data.status}
                        />
                    ))}
                </>
            )}
        </>
    );
}

export default ListProductContainer;
