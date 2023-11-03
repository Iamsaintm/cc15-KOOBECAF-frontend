import React, { useRef, useState } from "react";
import { FaCamera } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { setInputProductImage } from "../../stores/slices/productSlice";

function PhotoUpload() {
    const dispatch = useDispatch();
    const { inputProduct } = useSelector((state) => state.product);
    const onChangeInput = (e) => {
        const fieldValue = e.target.files;
        dispatch(setInputProductImage({ fieldValue }));
    };

    let newFile = null;

    if (inputProduct.productImage) {
        newFile = Array.from(inputProduct.productImage);
    }

    return (
        <>
            <div className="flex flex-col gap-2">
                <div className="text-xl font-bold">Photo Upload</div>
                <div className="flex flex-col">
                    <div>Photos - 0/5</div>
                    {inputProduct.productImage ? (
                        <>
                            <div className="flex flex-wrap">
                                {newFile.map((x, idx) => (
                                    <div key={idx} className="border-2 w-24">
                                        <img
                                            className="w-24 aspect-square"
                                            src={URL.createObjectURL(inputProduct.productImage[idx])}
                                            alt=""
                                        />
                                    </div>
                                ))}
                                <label className="flex flex-col gap-2 justify-center items-center border-2 bg-white rounded-md h-24 w-24 cursor-pointer">
                                    <div className="flex text-xl justify-center items-center bg-[#d9d9d9] w-10 aspect-square rounded-full">
                                        <FaCamera />
                                    </div>
                                    <div className="text-sm font-semibold">Add Photo</div>
                                    <input onChange={onChangeInput} type="file" className="hidden" multiple />
                                </label>
                            </div>
                        </>
                    ) : (
                        <>
                            <label className="flex flex-col gap-2 justify-center items-center border-2 bg-white rounded-md h-48 cursor-pointer">
                                <div className="flex text-2xl justify-center items-center bg-[#d9d9d9] w-12 aspect-square rounded-full">
                                    <FaCamera />
                                </div>
                                <div className="font-semibold">Add Photo</div>
                                <input onChange={onChangeInput} type="file" className="hidden" multiple />
                            </label>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}

export default PhotoUpload;
