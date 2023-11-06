import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading";
import DeleteProductCard from "./DeleteProductCard";
import Button from "../../components/Button";

function DeleteContainer({ productDetail, productId }) {
    const { loading } = useSelector((state) => state.product);

    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <>
                    <DeleteProductCard productDetail={productDetail} productId={productId} />
                    {/* {productByUserId?.map((data) => (
                        <DeleteProductCard
                            key={data.id}
                            id={id}
                            src={data.image[0].image}
                            productPrice={data.productPrice}
                            productName={data.productName}
                        />
                    ))} */}
                </>
            )}
        </>
    );
}

export default DeleteContainer;
