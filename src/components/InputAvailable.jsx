import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateProductStatus } from "../stores/slices/productSlice";

function InputAvailable({ name, data, productId, status }) {
    const dispatch = useDispatch();
    const [newStatus, setNewStatus] = useState(status);
    let context = null;

    const dataMap = (type) => {
        context = data.map((x) => (
            <option value={x[type]} key={x.id} className="bg-white text-black">
                {x[type].replace(/_/g, " ")}
            </option>
        ));
    };

    dataMap(name);

    const onChangeInput = (e) => {
        const fieldValue = e.target.value;
        dispatch(updateProductStatus({ fieldValue, productId }));
        window.location.reload();
    };

    return (
        <>
            <select
                className="border-none rounded-md bg-available text-white w-72 text-xl"
                name={name}
                value={newStatus}
                onChange={onChangeInput}
            >
                {context}
            </select>
        </>
    );
}

export default InputAvailable;
