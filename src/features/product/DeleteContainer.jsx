import { useSelector } from "react-redux";

import Loading from "../../components/Loading";
import DeleteProductCard from "./DeleteProductCard";

function DeleteContainer({ productDetail, productId }) {
    const { loading } = useSelector((state) => state.product);

    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <>
                    <DeleteProductCard productDetail={productDetail} productId={productId} />
                </>
            )}
        </>
    );
}

export default DeleteContainer;
