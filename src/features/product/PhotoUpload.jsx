import { FaCamera } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { setInputProduct } from "../../stores/slices/productSlice";

function PhotoUpload() {
    const dispatch = useDispatch();
    const { inputProduct } = useSelector((state) => state.product);
    const { errorMessage } = useSelector((state) => state.product);

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

    let newFile = null;

    if (inputProduct.productImage) {
        newFile = Array.from(inputProduct.productImage);
    }

    const deleteImage = (index) => {
        const fieldName = "productImage";
        const fieldValue = Array.from(inputProduct.productImage).filter((x, idx) => idx !== index);
        dispatch(setInputProduct({ fieldName, fieldValue }));
    };

    return (
        <>
            <div className="flex flex-col gap-2">
                <div className="text-xl font-bold">Photo Upload</div>
                <div className="flex flex-col">
                    <div className={`${errorMessage ? "text-error" : ""}`}>Photos - {newFile.length}/5</div>
                    {inputProduct.productImage.length !== 0 ? (
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
                    )}
                </div>
            </div>
        </>
    );
}

export default PhotoUpload;
