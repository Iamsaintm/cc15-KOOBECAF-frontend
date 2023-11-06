import { useSelector } from "react-redux";
import Loading from "../../components/Loading";
import DeleteProductCard from "./DeleteProductCard";

function DeleteContainer() {
    const { deleteProduct, loading } = useSelector((state) => state.product);

    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <>
                    {deleteProduct?.map((data) => (
                        <DeleteProductCard
                            key={data.id}
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

export default DeleteContainer;
