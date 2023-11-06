import DeleteContainer from "./DeleteContainer";

function DeleteProductForm({ productId, productDetail }) {
    return (
        <>
            <div>Are you sure you want to delete this listing?</div>
            <DeleteContainer productId={productId} productDetail={productDetail} />
        </>
    );
}

export default DeleteProductForm;
