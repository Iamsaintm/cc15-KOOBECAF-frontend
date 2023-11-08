import { FaCamera } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductById, setInputProduct, updateInputProduct } from "../../stores/slices/productSlice";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

function PhotoUpload() {
    const dispatch = useDispatch();
    const { inputProduct, productData } = useSelector((state) => state.product);
    const { errorMessage } = useSelector((state) => state.product);
    const { productId } = useParams();
    const { authUserData } = useSelector((state) => state.auth);
    const idsToDelete = inputProduct.idsToDelete;

    useEffect(() => {
        if (productId) {
            dispatch(fetchProductById(productId));
        }
        dispatch(updateInputProduct(productData));
    }, [authUserData]);

    const onChangeInput = (e) => {
        if (inputProduct.productImage?.length !== 0) {
            const fieldName = e.target.name;
            const fieldValue = [...inputProduct.productImage, ...e.target.files];
            dispatch(setInputProduct({ fieldName, fieldValue }));
        } else {
            const fieldName = e.target.name;
            const fieldValue = e.target.files;
            dispatch(setInputProduct({ fieldName, fieldValue }));
        }
    };

    let newFile = [];

    if (inputProduct.productImage) {
        newFile = [...newFile, ...Array.from(inputProduct.productImage)];
    }
    if (inputProduct.image) {
        newFile = [...newFile, ...inputProduct.image];
    }

    const amountPhoto = newFile?.length;
    const deleteImage = (index) => {
        let fieldName = "productImage";
        let fieldValue = Array.from(inputProduct.productImage).filter((x, idx) => idx !== index);
        if (fieldValue.length === 0) {
            fieldName = "image";
            fieldValue = inputProduct.image.filter((x, idx) => idx !== index);
        }

        dispatch(setInputProduct({ fieldName, fieldValue }));
        if (newFile[index].id) {
            const fieldName = "idsToDelete";
            const fieldValue = [...idsToDelete, newFile[index].id];
            dispatch(setInputProduct({ fieldName, fieldValue }));
        }
    };

    return (
        <>
            <div className="flex flex-col gap-2">
                <div className="text-xl font-bold">Photo Upload</div>
                <div className="flex flex-col">
                    <div className={`${errorMessage ? "text-error" : ""}`}>Photos - {amountPhoto}/5</div>

                    {newFile.length > 0 && (
                        <>
                            <div className="flex gap-1 flex-wrap w-[300px]">
                                {newFile.map((file, idx) => (
                                    <div
                                        key={idx}
                                        className={`relative rounded-md border-2 ${
                                            errorMessage ? "border-error/50" : ""
                                        } w-24`}
                                    >
                                        <img
                                            className="w-24 aspect-square rounded-md hover:brightness-50"
                                            src={file.image || URL.createObjectURL(file)}
                                            alt=""
                                        />
                                        <div
                                            onClick={() => {
                                                deleteImage(idx);
                                            }}
                                            className={`flex justify-center absolute top-0 right-0 w-7 aspect-square rounded-full bg-white border-2 ${
                                                errorMessage ? "border-error/50" : "border-slate-300"
                                            } hover:bg-slate-200`}
                                        >
                                            x
                                        </div>
                                    </div>
                                ))}
                                <label
                                    className={`flex flex-col gap-2 justify-center items-center border-2 ${
                                        errorMessage ? "border-error/50" : ""
                                    } bg-white rounded-md h-24 w-24 cursor-pointer`}
                                >
                                    <div className="flex text-xl justify-center items-center bg-[#d9d9d9] w-10 aspect-square rounded-full">
                                        <FaCamera />
                                    </div>
                                    <div className="text-sm font-semibold">Add Photo</div>
                                    <input
                                        name="productImage"
                                        onChange={onChangeInput}
                                        type="file"
                                        className="hidden"
                                        multiple
                                    />
                                </label>
                            </div>
                            {errorMessage && <div className="text-error">You can add up to 5 photos.</div>}
                        </>
                    )}
                    {/* {inputProduct.productImage.length > 0 && inputProduct.image?.length > 0 && (
                        <>
                            <div className="flex gap-1 flex-wrap w-[300px]">
                                {newFile.map((file, idx) => (
                                    <div
                                        key={idx}
                                        className={`relative rounded-md border-2 ${
                                            errorMessage ? "border-error/50" : ""
                                        } w-24`}
                                    >
                                        <img
                                            className="w-24 aspect-square rounded-md hover:brightness-50"
                                            src={URL.createObjectURL(file)}
                                            alt=""
                                        />
                                        <div
                                            onClick={() => {
                                                deleteImage(idx);
                                            }}
                                            className={`flex justify-center absolute top-0 right-0 w-7 aspect-square rounded-full bg-white border-2 ${
                                                errorMessage ? "border-error/50" : "border-slate-300"
                                            } hover:bg-slate-200`}
                                        >
                                            x
                                        </div>
                                    </div>
                                ))}
                                {inputProduct.image.map((imageData, idx) => (
                                    <div
                                        key={idx}
                                        className={`relative rounded-md border-2 ${
                                            errorMessage ? "border-error/50" : ""
                                        } w-24`}
                                    >
                                        <img
                                            className="w-24 aspect-square rounded-md hover:brightness-50"
                                            src={imageData.image}
                                            alt=""
                                        />

                                        <div
                                            onClick={() => {
                                                deleteImage(idx);
                                            }}
                                            className={`flex justify-center absolute top-0 right-0 w-7 aspect-square rounded-full bg-white border-2 ${
                                                errorMessage ? "border-error/50" : "border-slate-300"
                                            } hover:bg-slate-200`}
                                        >
                                            x
                                        </div>
                                    </div>
                                ))}
                                <label
                                    className={`flex flex-col gap-2 justify-center items-center border-2 ${
                                        errorMessage ? "border-error/50" : ""
                                    } bg-white rounded-md h-24 w-24 cursor-pointer`}
                                >
                                    <div className="flex text-xl justify-center items-center bg-[#d9d9d9] w-10 aspect-square rounded-full">
                                        <FaCamera />
                                    </div>
                                    <div className="text-sm font-semibold">Add Photo</div>
                                    <input
                                        name="productImage"
                                        onChange={onChangeInput}
                                        type="file"
                                        className="hidden"
                                        multiple
                                    />
                                </label>
                            </div>
                            {errorMessage && <div className="text-error">You can add up to 5 photos.</div>}
                        </>
                    )}

                    {inputProduct.productImage.length > 0 &&
                        inputProduct.image?.length === 0 &&
                        inputProduct.productImage.map((file, idx) => (
                            <div
                                key={idx}
                                className={`relative rounded-md border-2 ${errorMessage ? "border-error/50" : ""} w-24`}
                            >
                                <img
                                    className="w-24 aspect-square rounded-md hover:brightness-50"
                                    src={URL.createObjectURL(file)}
                                    alt=""
                                />
                                <div
                                    onClick={() => {
                                        deleteImage(idx);
                                    }}
                                    className={`flex justify-center absolute top-0 right-0 w-7 aspect-square rounded-full bg-white border-2 ${
                                        errorMessage ? "border-error/50" : "border-slate-300"
                                    } hover:bg-slate-200`}
                                >
                                    x
                                </div>
                            </div>
                        ))}

                    {inputProduct.image?.length > 0 && inputProduct.productImage.length === 0 && (
                        <>
                            <div className="flex gap-1 flex-wrap w-[300px]">
                                {inputProduct.image.map((imageData, idx) => (
                                    <div
                                        key={idx}
                                        className={`relative rounded-md border-2 ${
                                            errorMessage ? "border-error/50" : ""
                                        } w-24`}
                                    >
                                        <img
                                            className="w-24 aspect-square rounded-md hover:brightness-50"
                                            src={imageData.image}
                                            alt=""
                                        />

                                        <div
                                            onClick={() => {
                                                deleteImage(idx);
                                            }}
                                            className={`flex justify-center absolute top-0 right-0 w-7 aspect-square rounded-full bg-white border-2 ${
                                                errorMessage ? "border-error/50" : "border-slate-300"
                                            } hover:bg-slate-200`}
                                        >
                                            x
                                        </div>
                                    </div>
                                ))}
                                <label
                                    className={`flex flex-col gap-2 justify-center items-center border-2 ${
                                        errorMessage ? "border-error/50" : ""
                                    } bg-white rounded-md h-24 w-24 cursor-pointer`}
                                >
                                    <div className="flex text-xl justify-center items-center bg-[#d9d9d9] w-10 aspect-square rounded-full">
                                        <FaCamera />
                                    </div>
                                    <div className="text-sm font-semibold">Add Photo</div>
                                    <input
                                        name="productImage"
                                        onChange={onChangeInput}
                                        type="file"
                                        className="hidden"
                                        multiple
                                    />
                                </label>
                            </div>
                            {errorMessage && <div className="text-error">You can add up to 5 photos.</div>}
                        </>
                    )}

                    {inputProduct.productImage.length === 0 && inputProduct.image?.length === 0 && (
                        <>
                            <label className="flex flex-col gap-2 justify-center items-center border-2 bg-white rounded-md h-48 cursor-pointer">
                                <div className="flex text-2xl justify-center items-center bg-[#d9d9d9] w-12 aspect-square rounded-full">
                                    <FaCamera />
                                </div>
                                <div className="font-semibold">Add Photo</div>
                                <input
                                    name="productImage"
                                    onChange={onChangeInput}
                                    type="file"
                                    className="hidden"
                                    multiple
                                />
                            </label>
                        </>
                    )} */}
                    {newFile.length === 0 && (
                        <>
                            <label className="flex flex-col gap-2 justify-center items-center border-2 bg-white rounded-md h-48 cursor-pointer">
                                <div className="flex text-2xl justify-center items-center bg-[#d9d9d9] w-12 aspect-square rounded-full">
                                    <FaCamera />
                                </div>
                                <div className="font-semibold">Add Photo</div>
                                <input
                                    name="productImage"
                                    onChange={onChangeInput}
                                    type="file"
                                    className="hidden"
                                    multiple
                                />
                            </label>
                        </>
                    )}
                </div>
            </div>
        </>

        //         </div>
        //     </div>
        // </>

        // <>
        //     <div className="flex flex-col gap-2">
        //         <div className="text-xl font-bold">Photo Upload</div>
        //         <div className="flex flex-col">
        //             <div className={`${errorMessage ? "text-error" : ""}`}>Photos - {amountPhoto}/5</div>

        /* {inputProduct.productImage.length !== 0 && inputProduct.image?.length !== 0 ? (
                        <>
                            <div className="flex gap-1 flex-wrap w-[300px]">
                                {inputProduct.image.map((imageData, idx) => (
                                    <div
                                        key={idx}
                                        className={`relative rounded-md border-2 ${
                                            errorMessage ? "border-error/50" : ""
                                        } w-24`}
                                    >
                                        <img
                                            className="w-24 aspect-square rounded-md hover:brightness-50"
                                            src={imageData.image}
                                            alt=""
                                        />

                                        <div
                                            onClick={() => {
                                                deleteImage(idx);
                                            }}
                                            className={`flex justify-center absolute top-0 right-0 w-7 aspect-square rounded-full bg-white border-2 ${
                                                errorMessage ? "border-error/50" : "border-slate-300"
                                            } hover:bg-slate-200`}
                                        >
                                            x
                                        </div>
                                    </div>
                                ))}
                                {newFile.map((file, idx) => (
                                    <div
                                        key={idx}
                                        className={`relative rounded-md border-2 ${
                                            errorMessage ? "border-error/50" : ""
                                        } w-24`}
                                    >
                                        <img
                                            className="w-24 aspect-square rounded-md hover:brightness-50"
                                            src={URL.createObjectURL(file)}
                                            alt=""
                                        />
                                        <div
                                            onClick={() => {
                                                deleteImage(idx);
                                            }}
                                            className={`flex justify-center absolute top-0 right-0 w-7 aspect-square rounded-full bg-white border-2 ${
                                                errorMessage ? "border-error/50" : "border-slate-300"
                                            } hover:bg-slate-200`}
                                        >
                                            x
                                        </div>
                                    </div>
                                ))}
                                <label
                                    className={`flex flex-col gap-2 justify-center items-center border-2 ${
                                        errorMessage ? "border-error/50" : ""
                                    } bg-white rounded-md h-24 w-24 cursor-pointer`}
                                >
                                    <div className="flex text-xl justify-center items-center bg-[#d9d9d9] w-10 aspect-square rounded-full">
                                        <FaCamera />
                                    </div>
                                    <div className="text-sm font-semibold">Add Photo</div>
                                    <input
                                        name="productImage"
                                        onChange={onChangeInput}
                                        type="file"
                                        className="hidden"
                                        multiple
                                    />
                                </label>
                            </div>
                            {errorMessage && <div className="text-error">You can add up to 5 photos.</div>}
                        </>
                    ) : inputProduct.image?.length !== 0 ? (
                        <>
                            <div className="flex gap-1 flex-wrap w-[300px]">
                                {newFile.map((x, idx) => (
                                    <div
                                        key={idx}
                                        className={`relative rounded-md border-2 ${
                                            errorMessage ? "border-error/50" : ""
                                        } w-24`}
                                    >
                                        <img
                                            className="w-24 aspect-square rounded-md hover:brightness-50"
                                            src={URL.createObjectURL(inputProduct.productImage[idx])}
                                            alt=""
                                        />
                                        <div
                                            onClick={() => {
                                                deleteImage(idx);
                                            }}
                                            className={`flex justify-center absolute top-0 right-0 w-7 aspect-square rounded-full bg-white border-2 ${
                                                errorMessage ? "border-error/50" : "border-slate-300"
                                            } hover:bg-slate-200`}
                                        >
                                            x
                                        </div>
                                    </div>
                                ))}
                                <label
                                    className={`flex flex-col gap-2 justify-center items-center border-2 ${
                                        errorMessage ? "border-error/50" : ""
                                    } bg-white rounded-md h-24 w-24 cursor-pointer`}
                                >
                                    <div className="flex text-xl justify-center items-center bg-[#d9d9d9] w-10 aspect-square rounded-full">
                                        <FaCamera />
                                    </div>
                                    <div className="text-sm font-semibold">Add Photo</div>
                                    <input
                                        name="productImage"
                                        onChange={onChangeInput}
                                        type="file"
                                        className="hidden"
                                        multiple
                                    />
                                </label>
                            </div>
                            {errorMessage && <div className="text-error">You can add up to 5 photos.</div>}
                        </>
                    ) : (
                        <>
                            <label className="flex flex-col gap-2 justify-center items-center border-2 bg-white rounded-md h-48 cursor-pointer">
                                <div className="flex text-2xl justify-center items-center bg-[#d9d9d9] w-12 aspect-square rounded-full">
                                    <FaCamera />
                                </div>
                                <div className="font-semibold">Add Photo</div>
                                <input
                                    name="productImage"
                                    onChange={onChangeInput}
                                    type="file"
                                    className="hidden"
                                    multiple
                                />
                            </label>
                        </>
                    )} */
        //         </div>
        //     </div>
        // </>
        // <>
        //     <div className="flex flex-col gap-2">
        //         <div className="text-xl font-bold">Photo Upload</div>
        //         <div className="flex flex-col">
        //             <div className={`${errorMessage ? "text-error" : ""}`}>Photos - {amountPhoto}/5</div>
        //             <div className="flex gap-1 flex-wrap w-[300px]">

        //                 {/* Condition 1: Display images from inputProduct.image (URLs) */}
        //                 {inputProduct.image &&
        //                     inputProduct.image.length > 0 &&
        //                     inputProduct.image.map((imageData, idx) => (
        //                         <div
        //                             key={idx}
        //                             className={`relative rounded-md border-2 ${
        //                                 errorMessage ? "border-error/50" : ""
        //                             } w-24`}
        //                         >
        //                             <img
        //                                 className="w-24 aspect-square rounded-md hover:brightness-50"
        //                                 src={imageData.image}
        //                                 alt=""
        //                             />
        //                             {/* You can add actions or delete buttons here */}
        //                         </div>
        //                     ))}

        //                 {/* Condition 2: Display images from inputProduct.productImage (temporary files) */}
        //                 {inputProduct.productImage &&
        //                     inputProduct.productImage.length > 0 &&
        //                     inputProduct.productImage.map((file, idx) => (
        //                         <div
        //                             key={idx}
        //                             className={`relative rounded-md border-2 ${
        //                                 errorMessage ? "border-error/50" : ""
        //                             } w-24`}
        //                         >
        //                             <img
        //                                 className="w-24 aspect-square rounded-md hover:brightness-50"
        //                                 src={URL.createObjectURL(file)}
        //                                 alt=""
        //                             />
        //                             <div
        //                                 onClick={() => {
        //                                     deleteImage(idx);
        //                                 }}
        //                                 className={`flex justify-center absolute top-0 right-0 w-7 aspect-square rounded-full bg-white border-2 ${
        //                                     errorMessage ? "border-error/50" : "border-slate-300"
        //                                 } hover:bg-slate-200`}
        //                             >
        //                                 x
        //                             </div>
        //                         </div>
        //                     ))}

        //                 {/* Condition 3: Display a message or placeholder when there are no images */}
        //                 {(!inputProduct.image || inputProduct.image.length === 0) &&
        //                     (!inputProduct.productImage || inputProduct.productImage.length === 0) && (
        //                         <div className="text-center">No images available</div>
        //                     )}

        //                 {/* Add Photo button */}
        //                 <label
        //                     className={`flex flex-col gap-2 justify-center items-center border-2 ${
        //                         errorMessage ? "border-error/50" : ""
        //                     } bg-white rounded-md h-24 w-24 cursor-pointer`}
        //                 >
        //                     <div className="flex text-xl justify-center items-center bg-[#d9d9d9] w-10 aspect-square rounded-full">
        //                         <FaCamera />
        //                     </div>
        //                     <div className="text-sm font-semibold">Add Photo</div>
        //                     <input
        //                         name="productImage"
        //                         onChange={onChangeInput}
        //                         type="file"
        //                         className="hidden"
        //                         multiple
        //                     />
        //                 </label>
        //             </div>
        //             {errorMessage && <div className="text-error">You can add up to 5 photos.</div>}
        //         </div>
        //     </div>
        // </>
    );
}

export default PhotoUpload;
