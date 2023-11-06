import { useState } from "react";
import Modal from "../../components/Modal";
import DeleteProductForm from "./DeleteProductForm";

function ListProductCard({ src, productPrice, productName, status, productDetail, productId }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="w-full h-[180px] bg-white rounded-md my-2 flex px-16">
                <div className="aspect-square rounded-md p-3">
                    <img className="h-full object-cover rounded-md" src={src} alt="productImage" />
                </div>
                <div className="p-4 w-full ">
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

                            <div className="flex gap-6 items-center cursor-pointer ">
                                <div>edit</div>
                                <div onClick={() => setIsOpen(true)}>delete</div>
                                <Modal title={"Delete listing"} open={isOpen} onClose={() => setIsOpen(false)}>
                                    <DeleteProductForm productDetail={productDetail} productId={productId} />
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
