import { useState } from "react";
import { ImBin2 } from "react-icons/im";
import { FaEdit } from "react-icons/fa";
import Modal from "../../components/Modal";
import DeleteProductForm from "./DeleteProductForm";
import { useNavigate } from "react-router-dom";
import { setInputProduct, updateInputProduct } from "../../stores/slices/productSlice";
import { useDispatch, useSelector } from "react-redux";

function ListProductCard({ src, productPrice, productName, status, productDetail, productId }) {
    const [isOpenDelete, setIsOpenDelete] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { categoryData } = useSelector((state) => state.category);
    const typeOfCategory = categoryData?.find((category) => category.id === productDetail.categoryId)?.typeOfCategory;
    const handleUpdateClick = async () => {
        const fieldName = "typeOfCategory";
        let fieldValue = typeOfCategory;
        if (productDetail.id === 1) {
            dispatch(updateInputProduct(productDetail));
            dispatch(setInputProduct({ fieldName, fieldValue }));
            navigate("/update/vehicle");
        } else if (productDetail.id === 2) {
            dispatch(updateInputProduct(productDetail));
            dispatch(setInputProduct({ fieldName, fieldValue }));
            navigate("/update/rental");
        } else {
            dispatch(updateInputProduct(productDetail));
            dispatch(setInputProduct({ fieldName, fieldValue }));
            navigate("/update/item");
        }
    };

    return (
        <>
            <div className="w-full h-[180px] bg-white rounded-md my-2 flex px-16">
                <div className="aspect-square rounded-md p-3">
                    <img className="h-full object-cover rounded-md" src={src} alt="productImage" />
                </div>
                <div className="p-4 w-full">
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-2">
                            <div className="text-xl font-semibold">{productName}</div>
                            <div className="">&#3647; {productPrice}</div>
                            <div className="text-sm">กรุงเทพมหานคร</div>
                        </div>
                        <div className="flex justify-between ">
                            <div className="">
                                {status === "AVAILABLE" && (
                                    <div className="w-72 py-1.5 bg-available text-xl rounded-md text-white flex justify-center">
                                        {status}
                                    </div>
                                )}
                                {status === "SOLD" && (
                                    <div className="w-72 py-1.5  bg-error-light text-xl rounded-md  text-white flex justify-center">
                                        {status}
                                    </div>
                                )}
                                {status === "NOT_AVAILABLE" && (
                                    <div className="w-72 py-1.5  bg-second text-xl rounded-md text-white flex justify-center">
                                        {status.replace(/_/g, " ")}
                                    </div>
                                )}
                            </div>

                            <div className="flex gap-6 items-center cursor-pointer">
                                <div onClick={handleUpdateClick} className="text-[1.5rem] text-dark-night">
                                    <FaEdit />
                                </div>
                                <div onClick={() => setIsOpenDelete(true)} className="text-[1.5rem] text-dark-night">
                                    <ImBin2 />
                                </div>

                                <Modal
                                    title={"Delete listing"}
                                    open={isOpenDelete}
                                    onClose={() => setIsOpenDelete(false)}
                                >
                                    <DeleteProductForm
                                        productDetail={productDetail}
                                        productId={productId}
                                        onClose={() => setIsOpenDelete(false)}
                                    />
                                </Modal>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ListProductCard;
