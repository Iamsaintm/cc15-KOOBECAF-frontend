import React from "react";
import InputForm from "../../components/InputForm";

function RequiredContainer({ input, onChange }) {
    return (
        <>
            <div className="flex flex-col">
                <div className="text-xl font-bold">Required</div>
                <div>Be as descriptive as possible</div>
                <InputForm value={input.productName} onChange={onChange} name={"productName"} placeholder={"Title"} />
                <InputForm value={input.productPrice} onChange={onChange} name={"productPrice"} placeholder={"Price"} />
                <InputForm placeholder={"Category"} />
                <InputForm placeholder={"Location"} />
            </div>
        </>
    );
}

export default RequiredContainer;
