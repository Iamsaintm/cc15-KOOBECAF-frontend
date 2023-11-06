import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setInputProduct } from "../../stores/slices/productSlice";

function DescriptionContainer() {
    const dispatch = useDispatch();
    const { description } = useSelector((state) => state.product.inputProduct);

    const onChangeInput = (e) => {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;
        dispatch(setInputProduct({ fieldName, fieldValue }));
    };

    return (
        <>
            <div className="flex flex-col gap-4">
                <div className="text-xl font-bold">Description</div>
                <div className="h-24 bg-blue-200 rounded-md border-2">
                    <textarea
                        name="description"
                        value={description}
                        onChange={onChangeInput}
                        className="resize-none w-full h-full rounded-md"
                    />
                </div>
                <div className="w-[300px] break-all text-sm text-error self-center">
                    !! Items like animals, drugs, weapons, counterfeits, and other items that infringe intellectual
                    property aren't allowed on KOOBECAF.
                </div>
            </div>
        </>
    );
}

export default DescriptionContainer;
