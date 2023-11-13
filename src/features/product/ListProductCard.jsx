import { useState } from "react";
import { ImBin2 } from "react-icons/im";
import { FaEdit } from "react-icons/fa";
import Modal from "../../components/Modal";
import DeleteProductForm from "./DeleteProductForm";
import InputAvailable from "../../components/InputAvailable";
import { useNavigate } from "react-router-dom";

function ListProductCard({ src, productPrice, productName, status, productDetail, productId }) {
    const [isOpenDelete, setIsOpenDelete] = useState(false);
    const navigate = useNavigate();
    const handleUpdateClick = async () => {
        if (productDetail.categoryId === 1) {
            navigate(`/update/vehicle/${productDetail.id}`);
        } else if (productDetail.categoryId === 2) {
            navigate(`/update/rental/${productDetail.id}`);
        } else {
            navigate(`/update/item/${productDetail.id}`);
        }
        window.location.reload();
    };

    const statusAvailable = [
        { id: 1, status: "AVAILABLE" },
        { id: 2, status: "SOLD" },
        { id: 3, status: "NOT_AVAILABLE" },
    ];

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
                            <div className="flex">
                                <InputAvailable
                                    productDetail={productDetail}
                                    productId={productId}
                                    status={status}
                                    data={statusAvailable}
                                    name={"status"}
                                />
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
